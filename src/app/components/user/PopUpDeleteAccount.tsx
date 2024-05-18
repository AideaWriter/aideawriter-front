'use client';

import {useRouter} from 'next/navigation';

const PopUpDeleteAccount = ({ eventCansel } ) => {
    const { push } = useRouter()

    const handleEventCansel = () => {
        eventCansel(false)
    }

    const handleDeleteUser = async () => {
        const res = await fetch(`/api/user/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            push('/pages/auth/signup')
        })
        console.log(res);
    }

    return <div className={'pop-up-delete-user-warning-block'}>
        <div className={'pop-up-delete-user-warning'}>
            <h3>Warning!</h3>
            <p>This account will be deleted along with current subscription records and articles created and will not be restored.</p>
            <div className={'pop-up-delete-user-buttons'}>
                <button onClick={handleDeleteUser}>Delete</button>
                <button onClick={handleEventCansel}>Cansel</button>
            </div>
        </div>
    </div>


}

export default PopUpDeleteAccount
