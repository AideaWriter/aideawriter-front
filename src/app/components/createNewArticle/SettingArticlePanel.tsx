import SettingArticleForm from '@/app/components/createNewArticle/SettingArticleForm';
import {useEffect, useState} from 'react';
import axios from 'axios';

const SettingArticlePanel = ({ childDataText }) => {
    const [triggerArticle, setTriggerArticle] = useState(true)
    const [dataName, setDataName] = useState(null);
    const handleChildData = (data) => {
        childDataText(data)
        setTriggerArticle(!data)
    };

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
    },[triggerArticle])

    return <div className={'right-panel'}>
        {/*<UserBar trigger={triggerArticle} />*/}
        <div className={'user-bar'}>

            <div className={'user-button'}>
                <h3> Articles point {dataName?.articles}</h3>
            </div>

        </div>
        <SettingArticleForm onChildData={handleChildData} />
    </div>
}

export default SettingArticlePanel
