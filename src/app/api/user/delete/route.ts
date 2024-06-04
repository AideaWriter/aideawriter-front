import axios from 'axios';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {jwtDecode} from 'jwt-decode';

export async function DELETE (){
    const apiUrl = process.env.API_URL;
    const cookieName = process.env.COOKIE_NAME;

    interface JwtPayload {
        uid: string;
        name?: string;
        email: string;
    }
    const cookieStore = cookies();
    const secret = process.env.AUTH_SECRET || "";
    const token = cookieStore.get(`${cookieName}`);

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


        const result = axios.delete(`${apiUrl}/api/users/${decoded.uid}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token.value}`
            }
        })
        cookieStore.delete(`${process.env.COOKIE_NAME}`)
        return new Response(JSON.stringify({ success: true}), {
            status: 200,
        });

    }catch (error) {
        return NextResponse.json(
            {
                message: 'Delete User Failed',
            },
            {
                status: 400,
            }
        );
    }
}
