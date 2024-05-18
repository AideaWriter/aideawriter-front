'use client';


import {useEffect, useState} from 'react';
import axios from 'axios';

const SettingSavedArticle = ({ data }) => {
    const [savedValuesHeadings, setSavedValuesHeadings] = useState([])
    const [savedValuesKeywords, setSavedValuesKeywords] = useState([])
    const [dataName, setDataName] = useState(null);


    useEffect(() => {
        setSavedValuesHeadings(data.titles)
        setSavedValuesKeywords(data.keyWords)
        const getUser = async () => {
            try {
                const {data} = await axios.get('/api/user/get-user');
                setDataName(data);

            }catch (e){
                console.log(e);
            }

        }
        getUser();
    },[data])

    return <div className={'right-panel'}>
        {/*<UserBar />*/}
        <div className={'user-bar'}>

            <div className={'user-button'}>
                <h3> Articles point {dataName?.articles}</h3>
            </div>

        </div>
        <div className={'setting-article-form'}>
            <div>
                <h4>Model: <span>{data.model === 'gpt-4-0613' ? "GPT-4" : "GPT-3.5-turbo"}</span></h4>

            </div>
            <div>
                <h4>Post type: <span>{data.textFor}</span></h4>
            </div>
            <div>
                <h4>Language: <span>{data.language}</span></h4>
            </div>
            <div>
                <h4>Subject of the text: <span>{data.theme}</span></h4>

            </div>
            <div>
                <h4>Headings:</h4>
                <div className={'result-input-setting'}>
                    {savedValuesHeadings?.map((value, index) => (
                        <p key={index} className={'input-value-setting'}> {value}</p>
                    ))}
                </div>

            </div>
            <div>
                <h4>Keywords:</h4>
                <div className={'result-input-setting'}>
                    {savedValuesKeywords?.map((value, index) => (
                        <p key={index} className={'input-value-setting'}> {value} </p>
                    ))}
                </div>

            </div>
            <div>
                <h4>Depth of the text (how creative the text should be): <span>{data.temperature}</span></h4>
            </div>

        </div>
    </div>



}

export default SettingSavedArticle
