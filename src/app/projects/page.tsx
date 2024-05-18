import DashboardLayout from '@/app/dashboard/layout';
import NavMenu from '@/app/components/navigation/NavMenu';
import DashboardComponent from '@/app/components/dashboard/DashboardComponent';
import TablesWithProjects from '@/app/components/projects/TablesWithProjects';


const Projects = () => {
    return (
        <DashboardLayout>
            <main className="dashboard-container">
                <NavMenu/>
                <DashboardComponent>
                    <TablesWithProjects />
                </DashboardComponent>
            </main>
        </DashboardLayout>
    )
}

export default Projects
