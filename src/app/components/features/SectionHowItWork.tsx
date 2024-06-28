import Image from 'next/image';
import CreateProject from '../../images/Create_New_Project.jpg';
import CreateNewArticle from '../../images/Create_New_Article_2.jpg';
import SelectProject from '../../images/Select_Project.jpg';
import SiteSectionHeaderImage from '../../images/Screenshot_app.webp';

const SectionHowItWork = () => {
    return <section className={'site-how-it-work'}>
        <div className={'site-container'}>
            <h3 className={'site-how-it-work-subtitle'}>HOW IT WORKS</h3>
            <h1 className={'site-how-it-work-title'}>Few steps to write content </h1>
            <ul>
                <li className={'site-how-it-work-item'}>
                    <div className={'site-how-it-work-text'}>
                        <span>01</span>
                        <h3>Create a Project</h3>
                        {/*<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, quasi architecto beatae vitae dicta sunt explicabo.</p>*/}
                    </div>
                    <div className={'site-how-it-work-image color-bg-image-1'}>
                        <Image src={CreateProject} alt={'CreateProject'} />
                    </div>
                </li>
                <li className={'site-how-it-work-item-rewert'}>
                    <div className={'site-how-it-work-image rewert-img color-bg-image-2'}><Image src={CreateNewArticle} alt={'CreateNewArticle'} /></div>
                    <div className={'site-how-it-work-text rewert-text'}>
                        <span>02</span>
                        <h3>Go to the Create New Article tab</h3>
                        {/*<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, quasi architecto beatae vitae dicta sunt explicabo.</p>*/}
                    </div>
                </li>
                <li className={'site-how-it-work-item'}>
                    <div className={'site-how-it-work-text'}>
                        <span>03</span>
                        <h3>Select a Project</h3>
                        {/*<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, quasi architecto beatae vitae dicta sunt explicabo.</p>*/}

                    </div>
                    <div className={'site-how-it-work-image color-bg-image-3'}>
                        < Image src={SelectProject} alt={'SelectProject'} />
                    </div>
                </li>
                <li className={'site-how-it-work-item-rewert'}>
                    <div className={'site-how-it-work-image rewert-img color-bg-image-4'}>
                        <Image src={SiteSectionHeaderImage} alt={'SiteSectionHeaderImage'} />
                    </div>
                    <div className={'site-how-it-work-text rewert-text'}>
                        <span>04</span>
                        <h3>Enter the required settings and you’re done!</h3>
                        {/*<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, quasi architecto beatae vitae dicta sunt explicabo.</p>*/}

                    </div>
                </li>
            </ul>
        </div>
    </section>
}

export default SectionHowItWork
