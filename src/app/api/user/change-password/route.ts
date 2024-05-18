import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {NextResponse} from 'next/server';


export async function PATCH(request: Request) {
    const body = await request.json();
    try {
        const {token, password} = body
        const decoded = jwtDecode(token);




        // console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${decoded.uid}`);

        const req = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${decoded.uid}`, {password}, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
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
