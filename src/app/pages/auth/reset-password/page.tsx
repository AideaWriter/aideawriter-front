// 'use client';
//
// import {useState} from 'react';
// import {useSearchParams} from 'next/navigation';

import RootLayout from '@/app/layout';
import ImageSign from '@/app/components/auth/ImageSign';
import ResetPassword from '@/app/components/reset-passwoed/ResetPasswordForm';

export default function ResetPasswordPage() {
    //
    //
    // // useEffect(() => {
    // //     // Устанавливаем токен из query параметров, когда они станут доступны
    // //     if(router.query.token) {
    // //         setToken(router.query?.token);
    // //     }
    // // }, [router.query]);
    //
    // console.log(search);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // Отправка нового пароля на сервер вместе с токеном для верификации
    //     // Здесь должен быть ваш API запрос к серверу для сброса пароля
    //     console.log("Отправленный пароль:", password);
    //     console.log("Токен для сброса пароля:");
    //     // Обработка ответа от сервера...
    // };
    //
    // return (
    //     <form onSubmit={handleSubmit}>
    //         <label>
    //             New Password:
    //             <input
    //                 type="password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 required
    //             />
    //         </label>
    //         <button type="submit">Сбросить пароль</button>
    //     </form>
    // );

    return<RootLayout>
        <section className="section-signeIn">
            <div className="container">
                <div className="block-sign">
                    <ResetPassword/>
                    <ImageSign
                        className={"image-signin"}
                        width={612}
                        height={870}
                    />
                </div>
            </div>
        </section>
    </RootLayout>
}
