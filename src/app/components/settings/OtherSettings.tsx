'use client';


import {useEffect, useState} from 'react';
import axios from 'axios';
import PopUpDeleteAccount from '@/app/components/user/PopUpDeleteAccount';

const OtherSettings = ({ status }) =>{

    const [checkboxBool, setCheckboxBool] = useState<boolean>()
    const [popUpDeleteUser, setPopUpDeleteUser] = useState(false)

    useEffect(() =>{
        const getSubscription = async () => {
            try {
                const {data} = await axios.get('/api/payment/get_subscription');
                setCheckboxBool(!data.cancel_at_period_end)
                // console.log(data.cancel_at_period_end);
                // setSubscription();
            } catch (e) {
                console.log(e);
            }
        }
        getSubscription()
    }, [])


    const handleCheckbox = async () => {
        setCheckboxBool(!checkboxBool)
        const res = await fetch(`/api/payment/auto_renewal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cancel_at_period_end: checkboxBool
            })
        })
    }

    const handlePopUpDeleteUser = async () => {
        setPopUpDeleteUser(true)
    }

    const handleCansel = async (data) => {
        setPopUpDeleteUser(data)
    }

    return <>
        <div className={'other-settings-container'}>
            <ul>
                {/*<li><span>Status:</span> <span style={{color: "green"}}>{status}</span></li>*/}
                <li className={'auto-renew'}>
                    <span className={'title-auto-renew'}>Subscription Auto-Renew</span>
                    <label className="switch">
                        <input onClick={handleCheckbox} type="checkbox" checked={checkboxBool} />
                        <span className="slider round"></span>
                    </label>
                </li>
                <li>
                    <button onClick={handlePopUpDeleteUser} className={'delete-account'}>Delete Account</button>

                </li>
            </ul>
        </div>
        {popUpDeleteUser && <PopUpDeleteAccount eventCansel={handleCansel}/>}
    </>


}

export default OtherSettings
