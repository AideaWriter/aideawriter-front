import Image from 'next/image';
import LogoImage from '../../images/aideawriterLogoTest.png';

import Link from 'next/link';

const Logo = () => {
    return <div className={'site-logo'}>
        <Link className={'logo-link'} href={'/'}>
            <Image className={'logo-image'} src={LogoImage} alt={'Logo'} />
            <h4>AIdea Writer</h4>
        </Link>

    </div>
}

export default Logo
