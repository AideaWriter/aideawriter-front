import ListTariff from '@/app/components/manage-subscription/ListTariff';

const TariffPanel = () =>{
    return <div className="tariff-panel">
        <h2>Plans that best suit your business requirements</h2>
        <p>This is a straightforward and commonly used header that lets customers know they are looking at different pricing options.</p>
        <ListTariff />
    </div>
}

export default TariffPanel
