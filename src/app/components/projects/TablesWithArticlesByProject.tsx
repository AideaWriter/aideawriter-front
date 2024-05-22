"use client";

import ArticlesListByProject from '@/app/components/projects/ArticlesListByProject';
import HeadingsTable from '@/app/components/articles/HeadingsTable';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface TablesWithArticlesByProjectProps {
    projectId: any;
}

const TablesWithArticlesByProject: React.FC<TablesWithArticlesByProjectProps> = ({ projectId }) => {

const [nameProject, setNameProject] = useState<any | null>({})

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
