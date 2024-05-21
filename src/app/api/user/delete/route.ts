import axios from 'axios';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {jwtDecode} from 'jwt-decode';

export async function DELETE (){
    interface JwtPayload {
        uid: string;
        name?: string;
        email: string;
    }
    const cookieStore = cookies();
    const secret = process.env.NEXT_PUBLIC_AUTH_SECRET || "";
    const token = cookieStore.get(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`);

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


        const result = axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${decoded.uid}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token.value}`
            }
        })
        cookieStore.delete(process.env.NEXT_PUBLIC_COOKIE_NAME)
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
