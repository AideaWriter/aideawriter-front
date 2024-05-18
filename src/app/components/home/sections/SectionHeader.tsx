import Image from 'next/image';
import SiteSectionHeaderImage from '../../../images/Screenshot_app.webp';
import Link from 'next/link';

const SectionHeader= () => {
    return <section className={'site-section-header'}>
        <div className={'site-container site-section-header-row'}>
            <div className={`site-section-header-text-block`}>
                <h3 className={'site-section-header-text'}>WELCOME TO AIDEAWRITER.AI</h3>
                <h1 className={'site-section-header-text'}>Create amazing <span>web content</span> posts10X faster with AI.</h1>
                <p className={'site-section-header-text'}>Elegantly structured content with references in just a few clicks.</p>
                <div className={`site-section-header-button`}>
                    <Link href={`#`} className={'site-section-header-text'}>Get Started Free</Link>
                </div>
                <span className={'site-section-header-text-span'}> <strong>*100% free</strong> to get started. No credit card required.</span>
            </div>
            <div className={`site-section-header-image`}>
                <Image src={SiteSectionHeaderImage} alt={'image'} />
            </div>
        </div>
    </section>
}

export default SectionHeader
