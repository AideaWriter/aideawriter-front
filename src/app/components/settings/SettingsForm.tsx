'use client';

import {FormEventHandler, useEffect, useState} from 'react';

const SettingsForm = ({name, email}:{name: string, email: string}) => {

    const [nameForm, setNameForm] = useState("");
    const [emailForm, setEmailForm] = useState("");
    const [answerServer, setAnswerServer] = useState({})

    const nameHandleChange = (e) => {
        setNameForm(e.target.value);
    };

    const emailHandleChange = (e) => {
        setEmailForm(e.target.value);
    };

    const changeDataHandler: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        let changes = {};
        if (nameForm !== name) changes = {...changes, name: nameForm};
        if (emailForm !== email) changes = {...changes, email: emailForm};

        console.log(changes);

        if (Object.keys(changes).length > 0){
            await fetch('/api/user/change-data',{
                method: 'PATCH',
                body: JSON.stringify(changes),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }else{
            console.log("No changes to submit");
        }

    }

    useEffect(() => {
        setNameForm(name);
        setEmailForm(email);
    }, [name, email]);

    console.log(answerServer);

    return <form onSubmit={changeDataHandler} className={'settings-form'} >
        <div className={'settings-form-container'}>
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
            <label className={'libel-signin'}>
                <span>Email</span>

                <input
                    className={'sign-up-input'}
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={emailForm}
                    onChange={emailHandleChange}
                />
            </label>
        </div>

        <div className={'settings-form-button-flex'}>
            <button className={'settings-form-button'}  type={'submit'}>
                Save changes
            </button>
            <button className={'settings-form-button'} type={'button'}>
                Change password
            </button>
        </div>

    </form>
}


export default SettingsForm
