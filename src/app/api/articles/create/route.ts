import axios from 'axios';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {jwtDecode} from 'jwt-decode';

export async function POST (request: Request){
    interface JwtPayload {
        uid: string;
        name?: string;
        email: string;
    }

    const cookieStore = cookies();
    const secret = process.env.NEXT_PUBLIC_AUTH_SECRET || "";
    const token = cookieStore.get(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`);
    const body = await request.json()
    try {
        if (!token) {
            return NextResponse.json(
                {
                    message: "Cookie is undefined or has no value",
                },
                {
                    status: 400,
                }
            );
        }

        const {value} = token
        const decoded = jwtDecode<JwtPayload>(value, secret as any);
        const {
            model,
            words,
            textFor,
            theme,
            keyWords,
            titles,
            temperature,
            projects,
            text,
            language,
        } = body

        let wordsNum = parseInt(words);
        let temperatureNum = parseFloat(temperature)
        console.log(temperatureNum);

        const result = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, {
            model,
            words: wordsNum,
            textFor,
            theme,
            keyWords,
            titles,
            temperature: temperatureNum,
            projects,
            user_id: decoded.uid,
            text,
            language,
        }, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token.value}`
            }
        })
        const { data } = await result
        console.log(data);
        return new Response(JSON.stringify(data.value), {
            status: 200,
        });

    }catch (error) {
        return NextResponse.json(
            {
                message: 'Create Article Failed',
            },
            {
                status: 400,
            }
        );
    }
}
