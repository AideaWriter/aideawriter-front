import axios from 'axios';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

export async function DELETE (request: Request){
    const apiUrl = process.env.API_URL;
    const cookieName = process.env.COOKIE_NAME;

    const cookieStore = cookies();
    const token = cookieStore.get(`${cookieName}`);
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
        const result = axios.delete(`${apiUrl}/api/projects/${uid}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${value}`
            }
        })
        const { data } = await result
        return new Response(JSON.stringify({ success: true}), {
            status: 200,
        });

    }catch (error) {
        return NextResponse.json(
            {
                message: 'Delete Project Failed',
            },
            {
                status: 400,
            }
        );
    }
}
