'use client';

import {useEffect, useState} from 'react';
import axios from 'axios';
import SettingSavedArticle from '@/app/components/articles/SettingSavedArticle';
import ArticlePanelForUpdate from '@/app/components/articles/ArticlePanelForUpdate';

const ArticleAndSettings = ({ id }) =>{
    const [dataArticle, setDataArticle] = useState({})
    const [returnText, setReturnText] = useState({})


    const handleChildData = (dataAndSettings) => {
        console.log(dataAndSettings);
        setReturnText(dataAndSettings)
    };

    console.log(id.articleId);

    useEffect(() => {
        const getArticle = async () => {
            try {
                const {data} = await axios.get('/api/articles/get_by_id', {
                    params: {
                        uid: id.articleId,
                    }
                });
                setDataArticle(data);
            }catch (e){
                console.log(e);
            }
        }
            getArticle()
    }, [])


    // console.log(returnText);
    return <div className={'create-article-container'}>
        {/*<ArticlePanel text={dataArticle} />*/}
        <ArticlePanelForUpdate text={dataArticle}  />
        <SettingSavedArticle data={dataArticle} />
    </div>
}

export default ArticleAndSettings
