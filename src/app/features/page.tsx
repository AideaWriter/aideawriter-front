import RootLayout from '@/app/layout';
import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import MainFeatures from '@/app/components/features/MainFeatures';
import {Metadata} from 'next';


export const metadata: Metadata = {
    title: 'AI Text Generator Tool | Feature',
    description: 'Generate high-quality content with AIdea Writer. Fast, SEO-friendly articles and posts for free. Boost your content strategy effortlessly.',
}


const Features = () => {
    return <RootLayout>
        <Header />
        <MainFeatures />
        <Footer />
    </RootLayout>
}

export default Features
