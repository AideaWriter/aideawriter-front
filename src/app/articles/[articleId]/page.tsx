import DashboardLayout from '@/app/dashboard/layout';
import NavMenu from '@/app/components/navigation/NavMenu';
import DashboardComponent from '@/app/components/dashboard/DashboardComponent';
import ArticleAndSettings from '@/app/components/articles/ArticleAndSettings';


const ArticleId = ({ params }) => {
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
