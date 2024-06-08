'use client';

import Image from 'next/image';
import CheckCircle from '../../images/check-circle-solid.svg';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';

interface User {
    billing_status: string;
    // добавьте другие свойства, если они существуют
}

const ListTariff = () => {


    const [pricePro, setPricePro] = useState(process.env.PRICE_ID_PRO)
    const [priceProPlus, setPriceProPlus] = useState(process.env.PRICE_ID_PRO_PLUS)
    const [ textButtonPro, setTextButtonPro ] = useState("Upgrade")
    const [ textButtonProPlus, setTextButtonProPlus ] = useState("Upgrade")
    const [user, setUser] = useState<User>()
    const { push } = useRouter()


    useEffect(() => {
        const getUser = async () => {
            try {
                const {data} = await axios.get('/api/user/get-user');
                setUser(data);

            }catch (e){
                console.log(e);
            }
        }
        getUser();
    }, [])

    const handlerCreateSubSessionPro = async () => {
                const req = await fetch('/api/payment/session',{
                    method: 'POST',
                    body: JSON.stringify({
                        price_id: `${pricePro}`,
                        success_url: "http://localhost:3000/pages/success",
                        cancel_url: "http://localhost:3000/pages/cancel"
                    })
                }).then(response => {
                    return response.json().then(data => {
                        if (data.url){
                            push(data.url)
                        }
                        console.log(data);

                    })
                })
    }

    const handlerCreateSubSessionProPlus = async () => {
        const req = await fetch('/api/payment/session',{
            method: 'POST',
            body: JSON.stringify({
                price_id: `${priceProPlus}`,
                success_url: "http://localhost:3000/pages/success",
                cancel_url: "http://localhost:3000/pages/cancel"
            })
        }).then(response => {
            return response.json().then(data => {
                push(data.url)
                console.log(data);
            })
        })
    }


    return <div className={'cards-tariff'}>
        <div className={'tariff-card'}>
            <h3>Free</h3>
            <h4>Basic chat functionality</h4>
            <h2> <span>$0</span>/mo</h2>
            <span>Free forever</span>
            <div className={'line-decoration'}></div>
            <ul>
                <li><Image src={CheckCircle} alt={'CheckCircle'} /> 30 days history</li>
                <li><Image src={CheckCircle} alt={'CheckCircle'} /> Up to 1000 messages/mo</li>
                <li><Image src={CheckCircle} alt={'CheckCircle'} /> Limited AI capabilities</li>
            </ul>
            {
                user?.billing_status === "trialing"  ?  <button>Current plan</button> : ""
            }

        </div>
        <div className={'tariff-card'}>
            <h3>Pro</h3>
            <h4>Basic chat functionality</h4>
            <h2><span>$15</span>/mo</h2>
            <span>Free forever</span>
            <div className={'line-decoration'}></div>
            <ul>
                <li><Image src={CheckCircle} alt={'CheckCircle'} /> 30 days history</li>
                <li><Image src={CheckCircle} alt={'CheckCircle'} /> Up to 1000 messages/mo</li>
                <li><Image src={CheckCircle} alt={'CheckCircle'} /> Limited AI capabilities</li>
            </ul>
            <button onClick={handlerCreateSubSessionPro}>{ user?.billing_status !== "Pro +" && user?.billing_status === "Pro" ? "Current plan" : "Upgrade"}</button>
        </div>
        <div className={'tariff-card'}>
            <h3>Pro +</h3>
            <h4>Basic chat functionality</h4>
            <h2><span>$20</span>/mo</h2>
            <span>Free forever</span>
            <div className={'line-decoration'}></div>
            <ul>
                <li><Image src={CheckCircle} alt={'CheckCircle'} /> 30 days history</li>
                <li><Image src={CheckCircle} alt={'CheckCircle'} /> Up to 1000 messages/mo</li>
                <li><Image src={CheckCircle} alt={'CheckCircle'} /> Limited AI capabilities</li>
            </ul>
            <button onClick={handlerCreateSubSessionProPlus}>{user?.billing_status === "Pro +" ? "Current plan" : "Upgrade"}</button>
        </div>
    </div>
}

export default ListTariff
