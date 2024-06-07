'use client';


import dynamic from 'next/dynamic';
import {useContext, useState} from 'react';
import ProjectContext from '@/app/components/createNewArticle/ProjectContext';

const ArticleEditorUpdate = dynamic(
    () => import('../clientOnlyComponents/ArticleEditorUpdate'),
    { ssr: false }
);

const ArticlePanelForUpdate = ({ text }) => {
    const data = useContext(ProjectContext);
    const [returnText, setReturnText] = useState({})
    const [textSaveButton, setTextSaveButton] = useState('Update')

    const handleChildData = (dataText) => {
        console.log(dataText);
        setReturnText(dataText)
    };
    console.log(returnText);
    const handleSubmit = async (event) => {
        event.preventDefault();


        const res  = await fetch(`/api/articles/update`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: text.uid,
                text: returnText
            })
        }).then(response => {
            if (response.ok){
                setTextSaveButton('Updated')
            }
            return response.json().then(data =>{
                console.log(data);
            })
        })

        const timerId = setTimeout(() => {
            setTextSaveButton("Update");  // Обновление состояния после задержки
        }, 3000);

        return () => {
            clearTimeout(timerId);  // Очистка таймера при размонтировании компонента
        };
    };


    return <div className={'central-panel editor-panel'}>
        <ArticleEditorUpdate dataSetting={text} onChildData={handleChildData} />
        <div className="save-button">
            <button onClick={handleSubmit}>{textSaveButton}</button>
        </div>

    </div>
}

export default ArticlePanelForUpdate
