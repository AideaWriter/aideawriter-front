'use client';

import type {FormEventHandler} from 'react';
import {useState} from 'react';
import {useSession} from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '../../images/loading_animation.gif';
import {useRouter} from 'next/navigation';


interface ErrorState {
    statusCode: number | null;
    message: string;
}

const SignInForm  = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [textTrigger, setTextTrigger] = useState(false)
    const [error, setError] = useState<ErrorState>({
        statusCode: null,
        message: "",
    });
    const { push } = useRouter()
    const {data: session} = useSession()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        setTextTrigger(true);
        const res  = await fetch(`/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            })
        }).then(response => {
            if (!response.ok) {
                if (response.status === 401) {
                    setTextTrigger(false)
                    // Так как вы ожидаете JSON, вы можете сначала попытаться прочитать тело как JSON
                    return response.json().then(data => {
                        setError({statusCode: response.status ,message: data.message})
                    });
                }
                if(response.status === 404){
                    setTextTrigger(false)
                    return response.json().then(data => {
                        setError({statusCode: response.status ,message: data.message})
                    });
                }
                // Для других ошибок также можно прочитать ответ и выбросить ошибку
                // throw new Error('Произошла ошибка с запросом');
            }

                setTextTrigger(false)

            push("/dashboard");
            return response.json();
        })
        // console.log(res);
        // if (res) {
        //
        // } else {
        //     console.log();
        // }
    };
    console.log(error);

    const emailHandleChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordHandleChange = (e) => {
        setPassword(e.target.value);
    };

    return <div className={'sign-in-form'}>
        <h2>Let&apos;s get <span>creative!</span></h2>
        <p>Log in to Artificium to start creating magic.</p>
        {/*<div className="links-logon-block">*/}
        {/*    <Link href={'#'}>*/}
        {/*        <span>*/}
        {/*            <Image*/}
        {/*                src={GoogleImage}*/}
        {/*            />*/}
        {/*        </span>*/}
        {/*        Sign In with Google*/}
        {/*    </Link>*/}

        {/*    <Link href={'#'}>*/}
        {/*        <span>*/}
        {/*            <Image*/}
        {/*                src={AppleImage}*/}
        {/*            />*/}
        {/*        </span>*/}
        {/*        Sign In with Apple*/}
        {/*    </Link>*/}
        {/*</div>*/}
        {/*<div className={'transition-block'}>*/}
        {/*    <p className={'transition'}>or continue with e-mail</p>*/}
        {/*</div>*/}

        <form onSubmit={handleSubmit} className={'form-signin'}>
            {error.statusCode == 404 ? (<span style={{color: 'red', marginLeft: 10, marginBottom: 10}}>{error.message}</span>) : ""}
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
            {error.statusCode == 401 ? (<span style={{color: 'red', marginLeft: 10, marginBottom: 10}}>{error.message}</span>) : ""}
            <label className={'libel-signin'}>
                <span className={'icon-password'}></span>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={passwordHandleChange}
                />
            </label>
            <div className={'forgot-password'}>
                <Link href={'/pages/auth/reset-password-send-email'}>
                    Forgot Password?
                </Link>
            </div>
            <button type={'submit'} className={'log-in'}>
                {textTrigger ? <Image className={'loading-login'} src={Loading} alt={'loading-login'} /> : 'Log in'}
            </button >
        </form>

        <p className={'dont-have-account'}>Don’t have an account? <Link className={'link-signup'} href={'/pages/auth/signup'}>Sign Up</Link></p>
    </div>


}

export default SignInForm
