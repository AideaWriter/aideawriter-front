import RootLayout from '@/app/layout';
import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import MainPricing from '@/app/components/pricing/MainPricing';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Free AI Article Writer | Pricing',
    description: 'Generate high-quality content with AIdea Writer. Fast, SEO-friendly articles and posts for free. Boost your content strategy effortlessly.',
}

const Pricing = () => {
    return <RootLayout>
        <Header />
        <MainPricing />
        {/*<MainFeatures />*/}
        <Footer />
    </RootLayout>
}

export default Pricing
