'use client';

import {FormEventHandler, useEffect, useState} from 'react';

const UpdateProjectName = ({name, uid, childData}:{name: string, uid: string, childData: any}) =>{
    const [nameForm, setNameForm] = useState("");


    const nameHandleChange = (e) => {
        setNameForm(e.target.value);
    };

    const changeDataHandler: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        let changes = {};
        if (nameForm !== name) changes = {...changes, name: nameForm, uid};


        console.log(changes);

        if (Object.keys(changes).length > 0){
            await fetch('/api/project/update',{
                method: 'PATCH',
                body: JSON.stringify(changes),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                childData(changes)
            })
        }else{
            console.log("No changes to submit");
        }

    }

    useEffect(() => {
        setNameForm(name);
    }, [name]);


    return <form onSubmit={changeDataHandler} className={'settings-form form-update-project-name'} >
        <div className={'settings-form-container'}>
            <label className={'libel-signin'}>
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

        <div className={'settings-form-button-flex'}>
            <button className={'settings-form-button update-project-name-button'}  type={'submit'}>
                Update
            </button>
        </div>

    </form>
}

export default UpdateProjectName
