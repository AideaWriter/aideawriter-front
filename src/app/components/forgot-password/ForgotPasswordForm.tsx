'use client';

import type {FormEventHandler} from 'react';
import {useState} from 'react';
import Link from 'next/link';


interface ErrorState {
    statusCode: number | null;
    message: string;
}

const ForgotPasswordFormSendEmail  = () => {


    const [email, setEmail] = useState("");
    const [error, setError] = useState<ErrorState>({
        statusCode: null,
        message: "",
    });
    const [textButton, setTextButtton] = useState('Submit')


    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res  = await fetch(`/api/auth/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formData.get('email'),
            })
        }).then(response => {
            if (!response.ok) {
                if(response.status === 404){
                    return response.json().then(data => {
                        setError({statusCode: response.status ,message: data.message})
                    });
                }
            }else if(response.ok){
                setTextButtton("Submitted")
            }
            return response.json();
        })
        // console.log(res);
        // if (res) {
        //
        // } else {
        //     console.log();
        // }
    };


    const emailHandleChange = (e) => {
        setEmail(e.target.value);
    };


    return <div className={'sign-in-form'}>
        <h2>Reset Your Password</h2>
        <p>We'll send you an email to reset your password.</p>
        <form onSubmit={handleSubmit} className={'form-signin'}>
            {error.statusCode == 404 ? (<span style={{color: 'red', marginLeft: 10, marginBottom: 10}}>User not found</span>) : ""}
            <label className={'libel-signin'}>
                <span className={'icon-email'}></span>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={emailHandleChange}
                />
            </label>
            {/*{console.log(error)}*/}
            <button type={'submit'} className={'log-in'}>
                {textButton}
            </button>
        </form>

        <p className={'dont-have-account'}>If have an account <Link href={'/pages/auth/signin'}>Sign In</Link></p>
    </div>


}

export default ForgotPasswordFormSendEmail
