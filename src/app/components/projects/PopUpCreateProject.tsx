'use client';

import OutsideClickHandler from 'react-outside-click-handler';
import {useState} from 'react';

const PopUpCreateProject = ({ closePopUp}) =>{


    const [isPopUpCreateClose, setIsPopUpCreateClose] = useState(true)
    const [nameForm, setNameForm] = useState("");

    const nameHandleChange = (e) => {
        setNameForm(e.target.value);
    };




    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const res  = await fetch(`/api/project/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('name')
            })
        }).then(response => {
            return response.json().then(data =>{
                setIsPopUpCreateClose(false)

                closePopUp({close: isPopUpCreateClose, reload: true})
            })
        })
        // console.log(res);
        // if (res) {
        //
        // } else {
        //     console.log();
        // }
    };

    if (isPopUpCreateClose === false){
        closePopUp({close: isPopUpCreateClose, reload: true})
    }




    return (
        isPopUpCreateClose && <div className={'setting-profile-background pop-up-project-create'}>
            <OutsideClickHandler onOutsideClick={() => {setIsPopUpCreateClose(false)}}>
                <form  className={'settings-form'} onSubmit={handleSubmit} >
                <div className={'setting-profile-pop-up '}>
                    <h2>Create Project</h2>
                    <div>
                        <label className={'libel-signin'}>
                            <span>Name</span>
                            <input
                                className={'sign-up-input'}
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={nameForm}
                                onChange={nameHandleChange}
                            />
                        </label>
                    </div>
                    {/*<SettingsForm name={user.name} email={user.email} />*/}
                    {/*<OtherSettings status={user.billing_status} />*/}
                    <button className={"create-project-button"} type={'submit'}>Create</button>
                </div>
                </form>
            </OutsideClickHandler>
        </div>

    )
}

export default PopUpCreateProject
