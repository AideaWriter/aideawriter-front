'use client';

import SettingsForm from '@/app/components/settings/SettingsForm';
import OtherSettings from '@/app/components/settings/OtherSettings';
import OutsideClickHandler from 'react-outside-click-handler';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Settings = () =>{

    const [user, setUser] = useState({})
    const [isSettingClose, setIsSettingClose] = useState(true)
    // const [subscription, setSubscription] = useState()




    useEffect(() => {

        // const getSubscription = async () => {
        //     try {
        //         const {data} = await axios.get('/api/payment/get_subscription');
        //         // console.log(data.cancel_at_period_end);
        //         // setSubscription(data.cancel_at_period_end);
        //     } catch (e) {
        //         console.log(e);
        //     }
        // }


        const getUser = async () => {
            try {
                const {data} = await axios.get('/api/user/get-user');
                setUser(data);

            }catch (e){
                console.log(e);
            }

        }
        getUser();
        // getSubscription()
    }, [])


    // console.log(subscription);
    return (

        isSettingClose &&  <div className={'setting-profile-background'}>
                <OutsideClickHandler onOutsideClick={() => {setIsSettingClose(false)}}>
                <div className={'setting-profile-pop-up'}>
                    <h2>Settings</h2>
                    <SettingsForm name={user.name} email={user.email} />
                    <OtherSettings status={user.billing_status} />
                </div>
                </OutsideClickHandler>
            </div>

    )
}

export default Settings
