'use client';

import PopUpCreateProject from '@/app/components/projects/PopUpCreateProject';
import {useState} from 'react';

const CreateProjectButton = ({ childData }) => {
    const [ openPopUp, setOpenPopUp ] = useState(false)
    const [openSettings, setOpenSettings] = useState(false);
    const [ returnPopUpClose, setReturnPopUpClose ] = useState()




    const projectHandlePopUp = (e) =>{
        setOpenSettings(false)
        setOpenPopUp(!openPopUp)
    }

    const handleChildData = (dataAndSettings) => {
        console.log(dataAndSettings);
        setReturnPopUpClose(dataAndSettings.close)
        childData(dataAndSettings)
        setOpenPopUp(returnPopUpClose)
    };
    console.log(openPopUp);

    return <div className="create-project">
        <button className="create-project-button_pop-up" onClick={projectHandlePopUp}>Create</button>
        {openPopUp && <PopUpCreateProject closePopUp={handleChildData}/>}
    </div>
}

export default CreateProjectButton
