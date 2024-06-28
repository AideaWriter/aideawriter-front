import Image from 'next/image';
import Converts from '../../images/converts.svg';
import ContentOutput from '../../images/content_output.svg';
import Globe from '../../images/Globe.svg';
import Ideas from '../../images/ideas.svg';
import Ideas2 from '../../images/ideas2.svg';
import Build from '../../images/build.svg';

const SectionFeatures = () => {
    return <section className={'site-section-generate-feature'}>
        <div className={'site-container'}>
            <h3 className={'site-section-generate-feature-subtitle'}>FEATURE</h3>
            <h1 className={'site-section-generate-feature-title'}>Generate AI text content in 1 click.</h1>
            <ul className={'site-section-generate-feature-row'}>
                <li>
                    <div className={'site-section-generate-feature-image'}>
                        <Image src={Converts} alt={'Converts'} />
                    </div>
                    <h3>Write content faster</h3>
                    <p>You do not need to spend hours to write good content — let our advance AI Writer to get it done.</p>
                </li>
                <li>
                    <div className={'site-section-generate-feature-image'}><Image src={ContentOutput} alt={'ContentOutput'} /></div>
                    <h3>Easy to use</h3>
                    <p>Use our simple AI tool quickly and easily</p>
                </li>
                <li>
                    <div className={'site-section-generate-feature-image'}> <Image src={Globe} alt={'Globe'} /></div>

                    <h3>Brainstorm faster</h3>
                    <p>Use our advanced AI as your personal content writer or partner for your endless work for your business. </p>
                </li>
                <li>
                    <div className={'site-section-generate-feature-image'}><Image src={Ideas} alt={'Ideas'} /></div>

                    <h3>Copy and publish anywhere</h3>
                    <p>You can simply copy your desire content and then you can publish, like Shopify, WordPress, or anywhere.</p>
                </li>
                <li>
                    <div className={'site-section-generate-feature-image'}><Image src={Ideas2} alt={'Ideas2'} /></div>

                    <h3>Repurpose content easily</h3>
                    <p>Write and saved once, use everywhere. Also rewrite content for different porpose with minimal effort.</p>
                </li>
                <li>
                    <div className={'site-section-generate-feature-image'}><Image src={Build} alt={'Build'} /></div>

                    <h3>Write in Any Language</h3>
                    <p>Let AI write for you in over 6 languages. Our AI can write in English, Spanish, French, Portuguese, Russian, German.</p>
                </li>
            </ul>
        </div>
    </section>
}

export default SectionFeatures
