import RootLayout from '@/app/layout';
import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import MainFeatures from '@/app/components/features/MainFeatures';
import {Metadata} from 'next';


export const metadata: Metadata = {
    title: 'AI Text Generator Tool | Feature',
    description: 'Generated by create next app',
}


const Features = () => {
    return <RootLayout>
        <Header />
        <MainFeatures />
        <Footer />
    </RootLayout>
}

export default Features
