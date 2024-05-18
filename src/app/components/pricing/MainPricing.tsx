import SectionPlans from '@/app/components/home/sections/SectionPlans';
import SectionQuestions from '@/app/components/home/sections/SectionQuestions';
import SectionProductivity from '@/app/components/features/SectionProductivity';

const MainPricing = () => {
    return <main className={'site-main'}>
        <SectionPlans />
        <SectionQuestions />
        <SectionProductivity />
    </main>
}

export default MainPricing
