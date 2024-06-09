'use client';

import Image from 'next/image';
import CancelImage from '../../images/cancel.svg';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

const CancelComponent = () => {

    const {push} = useRouter()

    useEffect(() => {
        const timerId = setTimeout(() => {
            push('/dashboard')
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [])

    return <section className={'success-section'}>
        <div className={'block-success'}>
            <Image className={'image-success'} src={CancelImage} alt={'Success Image'} width={100} height={100}/>
            <h2 style={{color: "#fff"}}>Payment was Cancel !!!</h2>
        </div>
    </section>
}

export default CancelComponent
