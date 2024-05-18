'use client';

import Image from 'next/image';
import Setting from '../../images/settings.svg';
import LogOut from '../../images/logout-svgrepo-com.svg';
import {useRouter} from 'next/navigation';

const UserPopUpMenu = (
    { name, email, openSettings }:{name: string, email: string, openSettings: any}
) => {

    const { push } = useRouter()

    const handleLogOut = async () => {
            const res  = await fetch(`/api/auth/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                push('/pages/auth/signin')
            })
            // console.log(res);
            // if (res) {
            //
            // } else {
            //     console.log();
            // }

    }

    return (
        <>
            <div className={'pop-up-user-menu-block'}>
                <div>
                    <h3>{name}</h3>
                    <h4>{email}</h4>
                </div>
                <ul className={'pop-up-user-menu'}>
                    <li className={'list-item-pop-up-user-menu'}>
                        <button onClick={openSettings} type={'button'}>
                            <Image src={Setting} alt="Settings" width={24} height={24} />
                            Settings
                        </button>
                    </li>
                    <li className={'list-item-pop-up-user-menu'}>
                        <button onClick={handleLogOut} type={'button'}>
                            <Image src={LogOut} alt="Log Out" width={24} height={24} />
                            Log Out
                        </button>
                    </li>
                </ul>

            </div>
        </>
    )
}


export default UserPopUpMenu
