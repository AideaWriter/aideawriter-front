'use client';


import {useEffect, useRef} from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import LinkTool from '@editorjs/link';


const EditorComponent = ({ dataSetting }) => {
    const ejInstance = useRef();
     // dataSetting


    // console.log(dataSetting );

    // useEffect(() => {
    //
    //     const updateEditorData = async () => {
    //
    //         if (dataSetting && dataSetting.text) {
    //             // console.log(ejInstance);
    //             // Сначала очистите текущее содержимое
    //             await ejInstance.current.clear();
    //             if (dataSetting && dataSetting.text){
    //                 await ejInstance.current.render(dataSetting.text);
    //             }else{
    //                 console.error("Некорректные данные для render:", dataSetting.text);
    //             }
    //         }
    //     };
    //     updateEditorData();
    // }, [dataSetting.text]);

    console.log(ejInstance.current);
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                ejInstance.current = editor;
                if (dataSetting && dataSetting.text) {
                    ejInstance.current.render(dataSetting.text).catch(e => {
                        console.error("Ошибка при рендеринге:", e);
                    });
                }
            },
            autofocus: true,
            data: dataSetting.text,
            onChange: async () => {
                let content = await editor.saver.save();

                console.log(content);
            },
            tools: {
                header: {
                    class: Header,
                    config: {
                        levels: [1, 2, 3, 4],
                        defaultLevel: 2
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                linkTool: {
                    class: LinkTool,
                }
            }
        });
    };




    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);


    useEffect(() => {
        const updateEditorData = async () => {
            if (ejInstance.current && dataSetting && dataSetting.text) {
                try {
                    await ejInstance.current.clear();
                    await ejInstance.current.render(dataSetting.text);
                } catch (e) {
                    console.error("Ошибка при рендеринге:", e);
                }
            }
        };

        updateEditorData();
    }, [dataSetting.text]);

    return <><div id="editorjs"></div></> ;
};


export default EditorComponent
