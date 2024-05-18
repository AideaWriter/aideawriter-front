'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import {FormEventHandler, useState} from 'react';
import Link from 'next/link';


interface ErrorState {
    statusCode: number | null;
    message: string;
}

const ResetPassword  = () => {


    // const [email, setEmail] = useState("");
    // const [error, setError] = useState<ErrorState>({
    //     statusCode: null,
    //     message: "",
    // });
    // const [textButton, setTextButtton] = useState('Submit')
    //
    //
    // const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    //     event.preventDefault();
    //
    //     const formData = new FormData(event.currentTarget);
    //
    //     const res  = await fetch(`/api/auth/send-email`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email: formData.get('email'),
    //         })
    //     }).then(response => {
    //         if (!response.ok) {
    //             if(response.status === 404){
    //                 return response.json().then(data => {
    //                     setError({statusCode: response.status ,message: data.message})
    //                 });
    //             }
    //         }else if(response.ok){
    //             setTextButtton("Submitted")
    //         }
    //         return response.json();
    //     })
    //     // console.log(res);
    //     // if (res) {
    //     //
    //     // } else {
    //     //     console.log();
    //     // }
    // };


    const searchParams  = useSearchParams();
    const { push } = useRouter()
    const token = searchParams.get('token');
    // const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<ErrorState>({
        statusCode: null,
        message: "",
    });
    const [textButton, setTextButtton] = useState('Change')


    // useEffect(() => {
    //     // Устанавливаем токен из query параметров, когда они станут доступны
    //     if(router.query.token) {
    //         setToken(router.query?.token);
    //     }
    // }, [router.query]);
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res  = await fetch(`/api/user/change-password`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                password: formData.get('password'),
            })
        }).then(response => {
            if (!response.ok) {
                if(response.status === 404){
                    return response.json().then(data => {
                        setError({statusCode: response.status ,message: data.message})
                    });
                }
            }else if(response.ok){
                setTextButtton("Changed")
                push("/pages/auth/signin");
            }
            return response.json();
        })
        console.log("Отправленный пароль:", password);
        console.log("Токен для сброса пароля:", token);
        // Обработка ответа от сервера...
    };

    const passwordHandleChange = (e) => {
        setPassword(e.target.value);
    };


    return <div className={'sign-in-form'}>
        <h2>Reset Your Password</h2>
        <form onSubmit={handleSubmit} className={'form-signin'}>
            {error.statusCode == 401 ? (<span style={{color: 'red', marginLeft: 10, marginBottom: 10}}>{error.message}</span>) : ""}
            <label className={'libel-signin'}>
                <span className={'icon-password'}></span>
                <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    value={password}
                    onChange={passwordHandleChange}
                />
            </label>
            {/*{console.log(error)}*/}
            <button type={'submit'} className={'log-in'}>
                {textButton}
            </button>
        </form>

        <p className={'dont-have-account'}>Don’t have an account? <Link className={'link-signup'} href={'/pages/auth/signup'}>Sign Up</Link></p>
    </div>


}

export default ResetPassword
