import SectionQuestions from '@/app/components/home/sections/SectionQuestions';
import SectionProductivity from '@/app/components/features/SectionProductivity';

const MainQuestion = () => {
    return <main className={'site-main'}>
        <SectionQuestions />
        <SectionProductivity />
    </main>
}

export default MainQuestion
