import DashboardLayout from '@/app/dashboard/layout';
import NavMenu from '@/app/components/navigation/NavMenu';
import DashboardComponent from '@/app/components/dashboard/DashboardComponent';
import TablesWithInvoices from '@/app/components/invoices/TablesWithInvoices';


const Invoices = () => {
    return (
        <DashboardLayout>
            <main className="dashboard-container">
                <NavMenu/>
                <DashboardComponent>
                    <TablesWithInvoices />
                    {/*<TablesWithArticles />*/}
                </DashboardComponent>
            </main>
        </DashboardLayout>
    )
}

export default Invoices
