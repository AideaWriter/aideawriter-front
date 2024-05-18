'use client';


import {useEffect, useState} from 'react';
import axios from 'axios';
import UserPopUpMenu from '@/app/components/user/UserPopUpMenu';
import Settings from '@/app/components/settings/Settings';
import Image from 'next/image';
import UserEdit from '../../images/user-edit.svg';

const UserBar = ({trigger }) => {
    const [dataName, setDataName] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    useEffect( ()=>{
        const getUser = async () => {
            try {
                const {data} = await axios.get('/api/user/get-user');
                setDataName(data);

            }catch (e){
                console.log(e);
            }

        }
        getUser();
    },[trigger])



     const userHandlePopUpMenu = (e) =>{
         setOpenSettings(false)
         setOpenMenu(!openMenu)
    }

    const userHandlePopUpSettings = (e) =>{

        setOpenSettings(!openSettings)
        setOpenMenu(false)
    }


    return <div className={'user-bar'}>
        {openMenu && !openSettings ? <UserPopUpMenu name={dataName.name} email={dataName.email} openSettings={userHandlePopUpSettings} /> : ""}
        {/*<div className={'user-button'}>*/}
        {/*    <h3> Articles point {dataName?.articles}</h3>*/}
        {/*</div>*/}
        <button onClick={userHandlePopUpMenu} className={'user-button'}>
            <h3><Image src={UserEdit} alt={'User Edit'} /> {dataName?.name}</h3>
        </button>
        {/*<button className={'share'} style={{background: '#fff'}}>*/}
        {/*    Share*/}
        {/*</button>*/}
        {openSettings ?  <Settings /> : ""}
    </div>
}



export default UserBar
