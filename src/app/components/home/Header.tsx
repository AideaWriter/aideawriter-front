'use client';

import Logo from '@/app/components/home/Logo';
import SiteNavigation from '@/app/components/home/SiteNavigation';
import LinkStarted from '@/app/components/home/LinkStarted';
import {useState} from 'react';

const Header = () => {


    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () =>{
        setOpenMenu(!openMenu)
    }


    return <header className={'site-header'}>
        <div className={'site-container site-row-header'}>
            {console.log("API_URL:", process.env.API_URL)}
            <Logo />
            <button onClick={handleOpenMenu} className={'site-burger-menu'}><span></span></button>
            <div className={`site-nav-link-block ${ openMenu && `site-nav-link-block-transform`}`}>
                <SiteNavigation />
                <LinkStarted />
            </div>
        </div>
    </header>
}

export default Header
