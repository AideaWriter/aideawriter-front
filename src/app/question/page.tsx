import RootLayout from '@/app/layout';
import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import MainQuestion from '@/app/components/question/MainQuestion';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Free AI Article Writer | F.A.Q',
    description: 'Generate high-quality content with AIdea Writer. Fast, SEO-friendly articles and posts for free. Boost your content strategy effortlessly.',
}

const Question = () => {
    return <RootLayout>
        <Header />
        <MainQuestion />
        <Footer />
    </RootLayout>
}

export default Question
