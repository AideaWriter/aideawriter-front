import {cookies} from 'next/headers';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {NextResponse} from 'next/server';


export async function PATCH(request: Request) {

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
        const decoded = jwtDecode<JwtPayload>(value);

        const body = await request.json();


        // console.log(`${process.env.API_URL}/api/users/${decoded.uid}`);

        const req = await axios.patch(`${apiUrl}/api/users/${decoded.uid}`, body, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        return new Response(JSON.stringify(req.data), {
            status: 200,
        });
    }catch (e) {
        return NextResponse.json(
            {
                message: 'Change Data Failed',
            },
            {
                status: 400,
            }
        );
    }
}
