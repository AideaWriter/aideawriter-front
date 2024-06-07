'use client';


import dynamic from 'next/dynamic';
import {useContext, useEffect, useState} from 'react';
import ProjectContext from '@/app/components/createNewArticle/ProjectContext';

const EditorComponent = dynamic(
    () => import('../clientOnlyComponents/EditorComponent'),
    { ssr: false }
);

const ArticlePanel = ({ text }) => {
    const dataProject = useContext(ProjectContext);
    const [buttonDisable, setButtonDisable] = useState(false)
    const [textSaveButton, setTextSaveButton] = useState('Save')

    useEffect(() => {
        console.log(text.settings);
        if (text.text) setButtonDisable(!buttonDisable)
    },[text])

    console.log(dataProject);
    const handleSubmit = async (event) => {
        event.preventDefault();

        const res  = await fetch(`/api/articles/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: text.settings.model,
                words: text.settings.words,
                textFor: text.settings.textFor,
                theme: text.settings.theme,
                keyWords: text.settings.keyWords,
                titles: text.settings.titles,
                temperature: text.settings.temperature,
                projects: dataProject,
                text: text.text,
                language: text.settings.language
            })
        }).then((request) => {
            if (request.ok){
                setTextSaveButton('Saved')
            }
        })

        const timerId = setTimeout(() => {
            setTextSaveButton("Save");  // Обновление состояния после задержки
        }, 3000);

        return () => {
            clearTimeout(timerId);  // Очистка таймера при размонтировании компонента
        };
        // console.log(res);
        // if (res) {
        //
        // } else {
        //     console.log();
        // }
    };


    return <div className={'central-panel editor-panel'}>
        <EditorComponent dataSetting={text} />
        {buttonDisable ? <div className="save-button">
            <button onClick={handleSubmit}>{textSaveButton}</button>
        </div> : ""}


    </div>
}

export default ArticlePanel
