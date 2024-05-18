'use client';

import ProjectsList from '@/app/components/projects/ProjecstList';
import CreateProjectButton from '@/app/components/projects/CreateProjectButton';
import {useState} from 'react';

const TablesWithProjects = () => {

    const [ childDataCreateButton, setChildDataCreateButton ] = useState()

    const handleChildData = (dataAndSettings) => {
        console.log(dataAndSettings);
        setChildDataCreateButton(dataAndSettings)
    };

    console.log(childDataCreateButton);
    return <div className="article-page">
        <h1>Projects</h1>
        <p>List of all your projects create by Logo.</p>
        {/*<HeadingsTable />*/}
        {/*<ArticlesList />*/}
        <CreateProjectButton childData={handleChildData} />
        <ProjectsList data={childDataCreateButton} />
    </div>
}


export default TablesWithProjects
