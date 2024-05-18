import SectionHeader from '@/app/components/home/sections/SectionHeader';
import SectionDescription from '@/app/components/home/sections/SectionDescription';
import SectionGenerationMadeEasy from '@/app/components/home/sections/SectionGenerationMadeEasy';
import SectionFeature from '@/app/components/home/sections/SectionFeature';
import SectionPlans from '@/app/components/home/sections/SectionPlans';
import SectionQuestions from '@/app/components/home/sections/SectionQuestions';

const Main = () => {
    return <main className={'site-main'}>
        <SectionHeader />
        <SectionDescription />
        <SectionGenerationMadeEasy />
        <SectionFeature />
        <SectionPlans/>
        <SectionQuestions />
    </main>
}

export default Main
