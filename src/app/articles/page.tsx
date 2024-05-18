import DashboardLayout from '@/app/dashboard/layout';
import NavMenu from '@/app/components/navigation/NavMenu';
import DashboardComponent from '@/app/components/dashboard/DashboardComponent';
import TablesWithArticles from '@/app/components/articles/TablesWithArticles';


const Articles = () => {
    return (
        <DashboardLayout>
            <main className="dashboard-container">
                <NavMenu/>
                <DashboardComponent>
                    <TablesWithArticles />
                </DashboardComponent>
            </main>
        </DashboardLayout>
    )
}

export default Articles
