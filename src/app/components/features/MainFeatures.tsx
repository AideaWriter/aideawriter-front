import SectionFeatures from '@/app/components/features/SectionFeatures';
import SectionHowItWork from '@/app/components/features/SectionHowItWork';
import SectionProductivity from '@/app/components/features/SectionProductivity';

const MainFeatures = () => {
    return <main className={'site-main'}>
        <SectionFeatures />
        <SectionHowItWork />
        <SectionProductivity />
    </main>
}

export default MainFeatures
