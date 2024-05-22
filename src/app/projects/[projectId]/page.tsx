import DashboardLayout from '@/app/dashboard/layout';
import NavMenu from '@/app/components/navigation/NavMenu';
import DashboardComponent from '@/app/components/dashboard/DashboardComponent';
import TablesWithArticlesByProject from '@/app/components/projects/TablesWithArticlesByProject';
import React from 'react';

interface ProjectIdParams {
    projectId: string;
}

const ProjectId: React.FC<{ params: ProjectIdParams }> = ({ params }) => {
    return (
        <DashboardLayout>
            <main className="dashboard-container">
                <NavMenu/>
                <DashboardComponent>
                    <TablesWithArticlesByProject projectId={params} />
                    {/*<ArticlesListByProject projectId={params} />*/}
                </DashboardComponent>
            </main>
        </DashboardLayout>
    )
}

export default ProjectId
