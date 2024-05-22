import React from 'react';
import DashboardLayout from '@/app/dashboard/layout';
import NavMenu from '@/app/components/navigation/NavMenu';
import DashboardComponent from '@/app/components/dashboard/DashboardComponent';
import ArticleAndSettings from '@/app/components/articles/ArticleAndSettings';

interface ArticleIdParams {
    articleId: string;
}

const ArticleId: React.FC<{ params: ArticleIdParams }> = ({ params }) => {
    return (
        <DashboardLayout>
            <main className="dashboard-container">
                <NavMenu/>
                <DashboardComponent>
                    <ArticleAndSettings id={params} />
                </DashboardComponent>
            </main>
        </DashboardLayout>
    )
}

export default ArticleId
