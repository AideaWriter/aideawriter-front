'use client';

import ArticlePanel from '@/app/components/createNewArticle/ArticlePanel';
import SettingArticlePanel from '@/app/components/createNewArticle/SettingArticlePanel';
import {useState} from 'react';

const CreateArticle = () =>{

    const [returnText, setReturnText] = useState({})


    const handleChildData = (dataAndSettings) => {
        console.log(dataAndSettings);
        setReturnText(dataAndSettings)
    };

    // console.log(returnText);
    return <div className={'create-article-container'}>
        <ArticlePanel text={returnText} />
        <SettingArticlePanel childDataText={handleChildData} />
    </div>
}

export default CreateArticle
