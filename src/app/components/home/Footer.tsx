import Logo from '@/app/components/home/Logo';
import Link from 'next/link';

const Footer = () => {
    return <footer className={'site-footer'}>
        <div className={'site-container'}>
            <div className={'site-footer-row'}>
                <div className={'site-footer-logo-and-description'}>
                    <Logo />
                    <h3>Save time. Be inspired.</h3>
                    <p>Automatically create blog articles for your business in seconds. Use the most advanced AI writer to increase your traffic and productivity.</p>
                    <p>© 2023 AIdeaWriter.app</p>
                </div>
                <div className={'site-footer-menu'}>
                    <h3>Menu</h3>
                    <ul>
                        <li><Link href={'#'}>About</Link></li>
                        <li><Link href={'#'}>Features</Link></li>
                        <li><Link href={'#'}>Pricing</Link></li>
                        <li><Link href={'#'}>F.A.Q</Link></li>
                    </ul>
                </div>
                <div className={'site-footer-contact-us'}>
                    <h2>Contact Us</h2>
                    <p>If you need help using our service, or have a question about it, please feel free to contact us.</p>
                    <Link href={'mailto:aideawriter@gmail.com'}>aideawriter@gmail.com</Link>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer
