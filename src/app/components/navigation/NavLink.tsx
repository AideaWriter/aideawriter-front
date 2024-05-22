'use client';

import Link from 'next/link';
import Image from 'next/image';
import Projects from '../../images/projects.svg';
import Articles from '../../images/articles.svg';
import CreateArticles from '../../images/create-articles.svg';
import CreditCard from '../../images/credit-card-check.svg';
import Invoices from '../../images/Invoices.svg';
import {usePathname} from 'next/navigation';

const NavLink = () => {
    const router = usePathname();



    const href = [
        {
            link: '/projects',
            name: 'Project',
            icon: Projects
        },
        {
            link: '/articles',
            name: 'Articles',
            icon: Articles
        },
        {
            link: '/create-new-articles',
            name: 'Create New Articles',
            icon: CreateArticles
        },
        {
            link: '/manage-subscription',
            name: 'Manage Subscription',
            icon: CreditCard
        },
        {
            link: '/invoices',
            name: 'Invoices',
            icon: Invoices
        },
    ]

    return (
        <nav>
        <ul>
            {
                href.map((item, i) => {
                    const isActive = router === item.link

                    const activeStyle = {
                        background: isActive ? 'linear-gradient(45deg, #4d62e5 0%, #87ddee 45.31%, #b6f09c 100%)': 'none',
                    };
                   return <li key={i} className={"nav-li"} style={activeStyle}>
                        <Link   href={item.link}>
                            <Image src={item.icon} alt={`${item.icon}`}/>
                            {item.name}
                        </Link>
                    </li>
                })
            }
        </ul>
    </nav>

    );
};


export default NavLink
