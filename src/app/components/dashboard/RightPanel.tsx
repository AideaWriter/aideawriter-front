'use client';

import LastArticles from '@/app/components/dashboard/LastArticles';
import {useEffect, useState} from 'react';
import axios from 'axios';

const RightPanel = () =>{

    const [dataName, setDataName] = useState(null);


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
    },[])
    return <div className={'right-panel'}>
        <div className={'user-bar'}>

            <div className={'user-button'}>
                <h3> Articles point {dataName?.articles}</h3>
            </div>

        </div>
        <LastArticles />
    </div>
}



export default RightPanel
