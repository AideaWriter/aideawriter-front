import axios from 'axios';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

export async function DELETE (request: Request){
    const cookieStore = cookies();
    const token = cookieStore.get(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`);
    const body = await request.json();

    try {
        const { uid } = body
        console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${uid}`);
        const result = axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${uid}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token.value}`
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
                message: error.message,
            },
            {
                status: 400,
            }
        );
    }
}
