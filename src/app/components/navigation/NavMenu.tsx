import Link from 'next/link';
import NavLink from '@/app/components/navigation/NavLink';
import UserBar from '@/app/components/user/user';


const NavMenu = () => {
    return <section className={"block-menu"}>
            <Link className={'logo'} href={'/dashboard'}>
                AIdea Write
            </Link>
        <NavLink />

        <UserBar />
    </section>
}


export default NavMenu
