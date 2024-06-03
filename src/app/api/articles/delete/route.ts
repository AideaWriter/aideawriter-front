import axios from 'axios';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

export async function DELETE (request: Request){
    const cookieStore = cookies();
    const token = cookieStore.get(`${process.env.COOKIE_NAME}`);
    const body = await request.json();

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
        const { uid } = body
        console.log(`${process.env.API_URL}/api/articles/${uid}`);
        const result = axios.delete(`${process.env.API_URL}/api/articles/${uid}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${value}`
            }
        })
        const { data } = await result
        console.log(body);
        return new Response(JSON.stringify({ success: true}), {
            status: 200,
        });

    }catch (error) {
        return NextResponse.json(
            {
                message: 'Delete Article Failed',
            },
            {
                status: 400,
            }
        );
    }
}
