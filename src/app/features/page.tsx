import RootLayout from '@/app/layout';
import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import MainFeatures from '@/app/components/features/MainFeatures';

const Features = () => {
    return <RootLayout>
        <Header />
        <MainFeatures />
        <Footer />
    </RootLayout>
}

export default Features
