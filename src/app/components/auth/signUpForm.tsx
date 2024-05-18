'use client';

import {FormEventHandler, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

interface ErrorState {
    statusCode: number | null;
    message: string;
}

const SignInForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState({});

    const { push } = useRouter()
    // const [errorEmail, setErrorEmail] = useState<ErrorState>({
    //     statusCode: null,
    //     message: "",
    // });
    // const [errorPassword, setErrorPassword] = useState<ErrorState>({
    //     statusCode: null,
    //     message: "",
    // });
    // const {data: session} = useSession()



    const handleSubmit: FormEventHandler<HTMLFormElement>  = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const res  = await fetch(`/api/auth/register`, {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password'),
            })
        }).then(response => {
            if (!response.ok) {
                if(response.status === 400){
                    return response.json().then(data => {
                        const errors = data.message.reduce((acc, currentError) => {
                            // Используем property как ключ, для сохранения сообщения об ошибке
                            acc[currentError.property] = currentError.constraints;
                            return acc;
                        }, {});

                        setError(errors);
                    });
                }
            }
            return response.json();
        })
        if (res) {
            push("/pages/auth/signin");
        } else {
            console.log(res);
        }
    };
    const nameHandleChange = (e) => {
        setName(e.target.value);
    };

    const emailHandleChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordHandleChange = (e) => {
        setPassword(e.target.value);
    };

    console.log(
        error,
    );

    return <div className={'sign-in-form'}>
        <h2>Let's get <span>creative!</span></h2>
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
            <label className={'libel-signin'}>
                <span>Name</span>
                <input
                    className={'sign-up-input'}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
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
                    value={email}
                    onChange={emailHandleChange}
                />
            </label>
            {error.email && (
                <span style={{color: 'red', marginLeft: 10, marginBottom: 10}}>{error.email.isEmail}</span>
            )}
            <label className={'libel-signin'}>
                <span>Password</span>
                <input
                    className={'sign-up-input'}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={passwordHandleChange}
                />
            </label>


            <p className={'text-warning-password'} style={{color: error.password ? "red" : "#9b9c9e"}}>Must be at least 8 characters long
            · Use at least one digit (0-9)
            · Use at least one special characters like (!@#$%^&*)
            · Must be at least 8 characters long
            · Use lowercase and uppercase letters (a-Z)</p>


            {/*<div className={'reset-password-send-email'}>*/}
            {/*    <Link href={'#'}>*/}
            {/*        Forgot Password?*/}
            {/*    </Link>*/}
            {/*</div>*/}
            <button className={'log-in'} type={"submit"}>
                Sign up
            </button>
        </form>

        <p className={'dont-have-account'}>If have an account <Link href={'/pages/auth/signin'}>Sign In</Link></p>
    </div>


}

export default SignInForm
