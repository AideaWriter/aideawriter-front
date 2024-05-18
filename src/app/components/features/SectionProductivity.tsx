import Link from 'next/link';

const SectionProductivity = () =>{
    return <section className={'site-section-productivity'}>
        <div className={'site-container'}>
            <div className={'bg-container'}>
                <h3 className={'site-section-productivity-subtitle'}>Boost your writing productivity</h3>
                <h1 className={'site-section-productivity-title'}>End writer’s block today</h1>
                <p className={'site-section-productivity-paragraph'}>It’s like having access to a team of copywriting experts writing powerful copy for you in 1-click.</p>
                <Link href={'#'} className={'site-section-productivity-button'}>Start writing for free</Link>
                <div className={'site-section-productivity-block-span'}>
                    <span>No credit card required</span>
                    <span>Cancel anytime</span>
                    <span>10+ tools to expolore</span>
                </div>
            </div>
        </div>
    </section>
}

export default SectionProductivity
