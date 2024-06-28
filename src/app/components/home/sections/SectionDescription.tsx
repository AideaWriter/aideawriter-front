import Image from 'next/image';
import SiteSectionDescription from '../../../images/Screenshot_app2.webp';
import CheckCircleSolid from '../../../images/check-circle-solid.svg';

const SectionDescription = () => {
    return <section className={`site-section-description`}>
        <div className={`site-container`}>
            <h2 className={`site-section-description-title`}>Increase profits and efficiency with our AI text generator</h2>
            <p className={`site-section-description-paragraph`}>An AI text generator can help businesses increase profits by improving their content marketing strategy. By leveraging the power of artificial intelligence a faster rate than ever before.</p>
            <div className={`site-section-description-row`}>
                <div className={'site-section-description-image'}>
                    <Image src={SiteSectionDescription} alt={'SiteSection Description'} />
                </div>
                <div className={`site-section-description-text-block`}>
                    <h2 className={`site-section-description-text-title`}>Unleash the full potential of AI to create the best content you need in just few clicks</h2>
                    <p className={`site-section-description-text-paragraph`}>With an AI text generator, businesses can create high-quality content in a fraction of the time it would take to create the same content manually.</p>
                    <ul className={`site-section-description-text-list`}>
                        <li> <Image src={CheckCircleSolid} alt={'CheckCircleSolid'} /> The AI-generated text is always fresh and relevant.</li>
                        <li> <Image src={CheckCircleSolid} alt={'CheckCircleSolid'} /> The AI-generated text is guaranteed to be unique and original.</li>
                        <li> <Image src={CheckCircleSolid} alt={'CheckCircleSolid'} /> The AI-generated text is SEO-friendly and authoritative.</li>
                        <li> <Image src={CheckCircleSolid} alt={'CheckCircleSolid'} /> AI text generators can help businesses create content that is more engaging and personalized to their customers&apos; needs</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
}

export default SectionDescription
