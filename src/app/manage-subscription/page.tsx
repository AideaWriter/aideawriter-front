import DashboardLayout from '@/app/dashboard/layout';
import NavMenu from '@/app/components/navigation/NavMenu';
import DashboardComponent from '@/app/components/dashboard/DashboardComponent';
import TariffPanel from '@/app/components/manage-subscription/TariffPanel';

const ManageSubscription = () => {
    return (
        <DashboardLayout>
            <main className="dashboard-container">
                <NavMenu/>
                <DashboardComponent>
                    <TariffPanel />
                </DashboardComponent>
            </main>
        </DashboardLayout>
    )
}

export default ManageSubscription
