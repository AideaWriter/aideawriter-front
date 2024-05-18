"use client";

import ArticlesListByProject from '@/app/components/projects/ArticlesListByProject';
import HeadingsTable from '@/app/components/articles/HeadingsTable';
import {useEffect, useState} from 'react';
import axios from 'axios';

const TablesWithArticlesByProject = ({ projectId }) => {

const [nameProject, setNameProject] = useState({})

    useEffect(() => {
        const getProject = async () => {
            try {
                const {data} = await axios.get('/api/project/by_id', {
                    params: {
                        uid: projectId.projectId,
                    }
                });

                setNameProject(data)
            }catch (e){
                console.log(e);
            }
        }
        getProject();
    }, [])

    console.log(projectId.projectId, nameProject);

    return <div className="article-page">
        <h1>Articles Of {nameProject.name}</h1>
        <p>List of all your projects create by Logo.</p>
        <HeadingsTable theme={'Theme'} title={'Title'} words={'Words'} deleteItem={'Delete'}/>
        <ArticlesListByProject projectId={projectId} />
    </div>
}


export default TablesWithArticlesByProject
