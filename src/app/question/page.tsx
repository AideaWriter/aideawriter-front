import RootLayout from '@/app/layout';
import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import MainQuestion from '@/app/components/question/MainQuestion';

const Question = () => {
    return <RootLayout>
        <Header />
        <MainQuestion />
        <Footer />
    </RootLayout>
}

export default Question
