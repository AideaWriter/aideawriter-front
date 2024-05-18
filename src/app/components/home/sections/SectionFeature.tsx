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
            <p className={`site-section-description-paragraph`}>Copygen.ai allows you to create multiple pieces of content quickly and efficiently, increasing your productivity and freeing up time to focus on other important tasks.</p>
            <ul className={'site-section-feature-list'}>
                <li>
                    <Image src={ContentOutput} />
                    <div>
                        <h3>Write copy & content that converts</h3>
                        <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on other important tasks.</p>
                    </div>

                </li>
                <li>
                    <Image src={Converts} />
                    <div>
                        <h3>Write copy & content that converts</h3>
                        <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on other important tasks.</p>
                    </div>

                </li>
                <li>
                    <Image src={Globe} />
                    <div>
                        <h3>Write copy & content that converts</h3>
                        <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on other important tasks.</p>
                    </div>

                </li>
                <li>
                    <Image src={Ideas} />
                    <div>
                        <h3>Write copy & content that converts</h3>
                        <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on other important tasks.</p>
                    </div>

                </li>
                <li>
                    <Image src={Ideas2} />
                    <div>
                        <h3>Write copy & content that converts</h3>
                        <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on other important tasks.</p>
                    </div>

                </li>
                <li>
                    <Image src={Build} />
                    <div>
                        <h3>Write copy & content that converts</h3>
                        <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on other important tasks.</p>
                    </div>

                </li>
            </ul>
        </div>
    </section>
}

export default SectionFeature
