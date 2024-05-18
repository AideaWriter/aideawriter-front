import RootLayout from '@/app/layout';
import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import MainPricing from '@/app/components/pricing/MainPricing';

const Pricing = () => {
    return <RootLayout>
        <Header />
        <MainPricing />
        {/*<MainFeatures />*/}
        <Footer />
    </RootLayout>
}

export default Pricing
