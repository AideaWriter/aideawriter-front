import DashboardLayout from '@/app/dashboard/layout';
import NavMenu from '@/app/components/navigation/NavMenu';
import DashboardComponent from '@/app/components/dashboard/DashboardComponent';
import CentralPanel from '@/app/components/dashboard/CentralPanel';
import RightPanel from '@/app/components/dashboard/RightPanel';


const Dashboard = () => {
    return <DashboardLayout>
        <main className="dashboard-container">
            <NavMenu/>
            <DashboardComponent >
                <CentralPanel />
                <RightPanel />
            </DashboardComponent>
        </main>
    </DashboardLayout>
}
export default Dashboard

