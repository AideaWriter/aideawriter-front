// import Image from 'next/image';

import Link from 'next/link';

const Logo = () => {
    return <div className={'site-logo'}>
        {/*<Image />*/}
        <Link href={'/'}>
            <h4>AIdea Writer</h4>
        </Link>

    </div>
}

export default Logo
