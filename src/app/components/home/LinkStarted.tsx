import Link from 'next/link';

const LinkStarted = () => {
    return <ul className={'site-list-link-started'}>
        <li className={'site-list-link-started-item'}><Link className={'site-list-link-started-login'} href={'/pages/auth/signin'}>Login</Link></li>
        <li className={'site-list-link-started-item'}><Link className={'site-list-link-started-start-writing'} href={'/pages/auth/signup'}>Start Writing</Link></li>
    </ul>
}

export default LinkStarted
