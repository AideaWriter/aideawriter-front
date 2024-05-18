import HeadingsTable from '@/app/components/articles/HeadingsTable';
import InvoicesList from '@/app/components/invoices/InvoicesList';

const TablesWithInvoices = () => {
    return <div className="article-page">
        <h1>Invoices</h1>
        <p>List of all your invoices</p>
        <HeadingsTable theme={'Subscription'} title={'Price'} project={'Link Invoice'}/>
        <InvoicesList />
    </div>
}

export default TablesWithInvoices
