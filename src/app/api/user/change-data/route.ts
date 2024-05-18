import {cookies} from 'next/headers';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {NextResponse} from 'next/server';


export async function PATCH(request: Request) {
    const cookieStore = cookies();
    const secret = process.env.NEXT_PUBLIC_AUTH_SECRET || "";
    const token = cookieStore.get(process.env.NEXT_PUBLIC_COOKIE_NAME);

    try {
        const {value} = token
        const decoded = jwtDecode(value);

        const body = await request.json();


        // console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${decoded.uid}`);

        const req = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${decoded.uid}`, body, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        return new Response(JSON.stringify(req.data), {
            status: 200,
        });
    }catch (e) {
        console.log();
        return NextResponse.json(
            {
                message: e.message,
            },
            {
                status: 400,
            }
        );
    }
}
