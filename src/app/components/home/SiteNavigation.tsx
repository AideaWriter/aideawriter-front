import Link from 'next/link';

const SiteNavigation = () => {
    return <nav className={`site-nav`}>
        <ul className={'site-nav-list'}>
            <li className={'item-nav-list-item'}>
                <Link className={'item-nav-link'} href={`/features`}>Features</Link>
            </li>
            {/*<li className={'item-nav-list-item'}>*/}
            {/*    <Link className={'item-nav-link'} href={`#`}>About</Link>*/}
            {/*</li>*/}
            <li className={'item-nav-list-item'}>
                <Link className={'item-nav-link'} href={`/pricing`}>Pricing</Link>
            </li>
            <li className={'item-nav-list-item'}>
                <Link className={'item-nav-link'} href={`/question`}>F.A.Q</Link>
            </li>
        </ul>
    </nav>
}

export default SiteNavigation
