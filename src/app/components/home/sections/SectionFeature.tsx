import Image from 'next/image';
import Converts from '../../../images/converts.svg';
import ContentOutput from '../../../images/content_output.svg';
import Globe from '../../../images/Globe.svg';
import Ideas from '../../../images/ideas.svg';
import Ideas2 from '../../../images/ideas2.svg';
import Build from '../../../images/build.svg';

const SectionFeature = () => {
    return <section className={'section-feature'}>
        <div className={'site-container'}>
            <h2 className={`site-section-description-title`}>How will CopyGen unlock your creative potential?</h2>
            <p className={`site-section-description-paragraph`}>AIdeaWriter.app allows you to create multiple pieces of content quickly and efficiently, increasing your productivity and freeing up time to focus on other important tasks.</p>
            <ul className={'site-section-feature-list'}>
                <li>
                    <Image src={ContentOutput} alt={'ContentOutput'} />
                    <div>
                        <h3>Write copy & content that converts</h3>
                        <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on other important tasks.</p>
                    </div>

                </li>
                <li>
                    <Image src={Converts} alt={'Converts'} />
                    <div>
                        <h3>10X your content output</h3>
                        <p>Use templates to streamline your content creation process. This can include templates for blog posts, social media posts, videos, and more.</p>
                    </div>

                </li>
                <li>
                    <Image src={Globe} alt={'Globe'} />
                    <div>
                        <h3>Create content in 6 languages</h3>
                        <p>AIdeaWriter can read and write content in 6 languages including English, Spanish, French, and Portuguese.</p>
                    </div>

                </li>
                <li>
                    <Image src={Ideas} alt={'Ideas'} />
                    <div>
                        <h3>Write better, everywhere.</h3>
                        <p>Reading widely can help improve your writing skills by exposing you to different writing styles, grammar structures, and vocabulary.</p>
                    </div>

                </li>
                <li>
                    <Image src={Ideas2} alt={'Ideas2'} />
                    <div>
                        <h3>Have fun! AIdeaWriter is a joy.</h3>
                        <p>AI is an exciting, new technology that can unlock your imagination to create some amazing things.</p>
                    </div>

                </li>
                <li>
                    <Image src={Build} alt={'Build'} />
                    <div>
                        <h3>Build an AI-Powered business.</h3>
                        <p>Building an AI-powered business is an ongoing process, and requires ongoing investment in data, technology, and expertise.</p>
                    </div>

                </li>
            </ul>
        </div>
    </section>
}

export default SectionFeature
