import Link from 'next/link';
import Image from 'next/image';
import CheckCircle from '../../../images/check-circle-solid.svg';

const SectionPlans = () => {
    return <section className={'site-section-plans'}>
        <div className={'site-container'}>
            <h2 className={`site-section-description-title`}>Plans that best suit your business requirements</h2>
            <p className={`site-section-description-paragraph`}>This is a straightforward and commonly used header that lets customers know they are looking at different pricing options.</p>
            <ul className={'site-section-plans-row'}>
                <li className={'site-section-plans-tariff-card'}>
                    <h3>Free</h3>
                    <h4>Basic chat functionality</h4>
                    <h2> <span>$0</span>/mo</h2>
                    <span>Free forever</span>
                    <div className={'line-decoration'}></div>
                    <ul>
                        <li><Image src={CheckCircle} /> 30 days history</li>
                        <li><Image src={CheckCircle} /> Up to 1000 messages/mo</li>
                        <li><Image src={CheckCircle} /> Limited AI capabilities</li>
                    </ul>

                    <Link href={`/pages/auth/signup`}>Start Free Trial</Link>

                </li>
                <li className={'site-section-plans-tariff-card'}>
                    <h3>Pro</h3>
                    <h4>Basic chat functionality</h4>
                    <h2><span>$17</span>/mo</h2>
                    <span>Free forever</span>
                    <div className={'line-decoration'}></div>
                    <ul>
                        <li><Image src={CheckCircle} /> 30 days history</li>
                        <li><Image src={CheckCircle} /> Up to 1000 messages/mo</li>
                        <li><Image src={CheckCircle} /> Limited AI capabilities</li>
                    </ul>
                    <Link href={`/pages/auth/signup`}>Start Free Trial</Link>
                </li>
                <li className={'site-section-plans-tariff-card'}>
                    <h3>Pro +</h3>
                    <h4>Basic chat functionality</h4>
                    <h2><span>$25</span>/mo</h2>
                    <span>Free forever</span>
                    <div className={'line-decoration'}></div>
                    <ul>
                        <li><Image src={CheckCircle} /> 30 days history</li>
                        <li><Image src={CheckCircle} /> Up to 1000 messages/mo</li>
                        <li><Image src={CheckCircle} /> Limited AI capabilities</li>
                    </ul>
                    <Link href={`/pages/auth/signup`}>Start Free Trial</Link>
                </li>
            </ul>
        </div>
    </section>
}

export default SectionPlans
