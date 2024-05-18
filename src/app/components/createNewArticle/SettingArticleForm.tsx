'use client';

import {FormEventHandler, useEffect, useState} from 'react';
import XImage from '../../images/x.svg';
import Image from 'next/image';
import PopUpLoadingGenerateArticle from '@/app/components/createNewArticle/PopUpLoadingGenerateArticle';
import axios from 'axios';

const SettingArticleForm = ({ onChildData }) => {
    const [inputValueHeadings, setInputValueHeadings] = useState('');
    const [inputValueKeywords, setInputValueKeywords] = useState('');
    const [savedValuesHeadings, setSavedValuesHeadings] = useState([]);
    const [savedValuesKeywords, setSavedValuesKeywords] = useState([]);
    const [dataUser, setDataUser] = useState(null);
    const [savedValuesСreative, setSavedValuesСreative] = useState('');
    const [dataSettings, setDataSettings] = useState({});
    const [popUpGenerateLoading, setPopUpGenerateLoading] = useState(false)

    const maxDecimalValue = 1.0;

    const handleInputHeadingsChange = (event) => {
        setInputValueHeadings(event.target.value);
    };
    const handleInputKeywordsChange = (event) => {
        setInputValueKeywords(event.target.value);
    };

    // const handleChangeWords = (event) => {
    //     const newValue = event.target.value;
    //     // Регулярное выражение для проверки, содержит ли строка только цифры
    //     if (/^\d*$/.test(newValue)) {
    //         setSavedValuesWords(newValue);
    //     }
    // }

    useEffect( ()=>{
        const getUser = async () => {
            try {
                const {data} = await axios.get('/api/user/get-user');
                setDataUser(data);

            }catch (e){
                console.log(e);
            }

        }
        getUser();
    },[])


    const handleChangeСreative = (event) => {
        const newValue = event.target.value;

        // Проверяем, что введенное значение - это число и оно не больше максимального
        if (!isNaN(newValue) && newValue <= maxDecimalValue) {
            setSavedValuesСreative(newValue);
        }
    };

    const handleBlurСreative = () => {
        // При потере фокуса округляем значение до двух десятичных знаков
        if (savedValuesСreative) {
            setSavedValuesСreative(Number(savedValuesСreative).toFixed(2));
        }
    };

    const handleSaveHeadings = () => {
        if (inputValueHeadings.trim() !== '') {
            setSavedValuesHeadings([...savedValuesHeadings, inputValueHeadings]);
            setInputValueHeadings(''); // Очистка поля ввода после сохранения
        }
    };

    const handleSaveKeywords = () => {
        if (inputValueKeywords.trim() !== '') {
            setSavedValuesKeywords([...savedValuesKeywords, inputValueKeywords]);
            setInputValueKeywords(''); // Очистка поля ввода после сохранения
        }
    };


    const handleDeleteHeadings = (indexToDelete) => {
        setSavedValuesHeadings(savedValuesHeadings.filter((_, index) => index !== indexToDelete));
    };

    const handleDeleteKeywords = (indexToDelete) => {
        setSavedValuesKeywords(savedValuesKeywords.filter((_, index) => index !== indexToDelete));
    };


    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        let titlesArray = [...savedValuesHeadings];
        let keyWordArray = [...savedValuesKeywords];
        setPopUpGenerateLoading(true)
        const res  = await fetch(`/api/ai/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                theme: formData.get('theme'),
                model: formData.get('model'),
                textFor: formData.get('textFor'),
                language: formData.get('language'),
                temperature: formData.get('temperature'),
                titles: titlesArray,
                keyWords: keyWordArray
            }),
        }).then(response => {
            if (response.ok){
                setPopUpGenerateLoading(false)
            }
            return response.json().then(text => {
                console.log(text);
                onChildData({
                    text,
                    settings:{
                        theme: formData.get('theme'),
                        model: formData.get('model'),
                        textFor: formData.get('textFor'),
                        language: formData.get('language'),
                        temperature: formData.get('temperature'),
                        titles: titlesArray,
                        keyWords: keyWordArray
                    } })
            })
        })
    }


// const handlePopUpGenerateLoading = () => {
//
// }




    return <>
        <form onSubmit={handleSubmit} className={'setting-article-form'}>
            <label>
                <span>Model</span>
                <select className={'select-style'} name="model" id="model">
                    <option value="gpt-4-0613">GPT-4</option>
                    <option value="gpt-3.5-turbo">GPT-3.5-turbo</option>
                </select>
            </label>
            <label>
                <span>Post type</span>
                <select className={'select-style'} name="textFor" id="textFor">
                    <option value="Web Site">Web Site</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Reddit">Reddit</option>
                    <option value="YouTube">YouTube</option>
                </select>
            </label>
            <label>
                <span>Language</span>
                <select className={'select-style'} name="language" id="language">
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Russian">Russian</option>
                    <option value="German">German</option>
                </select>
            </label>
            <label>
                <span>Subject of the text</span>
                <input type="text" name={'theme'}/>
            </label>
            <label>
                <span>Headings</span>
                <div className={'input-and-button'}>
                    <input
                        type="text"
                        value={inputValueHeadings}
                        onChange={handleInputHeadingsChange}
                        name="titles"
                    />
                    <div className={'button-plus'} onClick={handleSaveHeadings}> <span>+</span></div>
                </div>
                <div className={'result-input-setting'}>
                    {savedValuesHeadings.map((value, index) => (
                        <p key={index} className={'input-value-setting'}> {value} <button onClick={() => handleDeleteHeadings(index)} type={'button'} > <Image src={XImage} alt={'x'} /> </button></p>
                    ))}
                </div>

            </label>
            <label>
                <span>Keywords</span>
                <div className={'input-and-button'}>
                    <input
                        type="text"
                        value={inputValueKeywords}
                        onChange={handleInputKeywordsChange}
                        name="keyWords"
                    />
                    <div className={'button-plus'} onClick={handleSaveKeywords}> <span> + </span></div>
                </div>
                <div className={'result-input-setting'}>
                    {savedValuesKeywords.map((value, index) => (
                        <p key={index} className={'input-value-setting'}> {value} <button onClick={() => handleDeleteKeywords(index)} type={'button'} > <Image src={XImage} alt={'x'} /> </button></p>
                    ))}
                </div>

            </label>
            <label>
                <span>Depth of the text (how creative the text should be)</span>
                <input
                    inputMode="numeric"
                    value={savedValuesСreative}
                    onChange={handleChangeСreative}
                    onBlur={handleBlurСreative}
                    step="0.1"
                    type="text"
                    name="temperature"
                />
            </label>
            {/*<label>*/}
            {/*    <span>Word count</span>*/}
            {/*    <input*/}
            {/*        inputMode="numeric"*/}
            {/*        value={savedValuesWords}*/}
            {/*        onChange={handleChangeWords}*/}
            {/*        type="text"*/}
            {/*        name="words"*/}
            {/*    />*/}
            {/*</label>*/}
            {
                dataUser && dataUser.articles > 0 &&  <button className={'button-generate'} type={'submit'}>Generate</button>
            }
        </form>
        {
            popUpGenerateLoading ? < PopUpLoadingGenerateArticle /> : ""
        }

    </>



}

export default SettingArticleForm
