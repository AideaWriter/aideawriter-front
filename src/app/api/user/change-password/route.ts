import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {NextResponse} from 'next/server';


export async function PATCH(request: Request) {

    const apiUrl = process.env.API_URL;

    interface JwtPayload {
        uid: string;
        name?: string;
        email: string;
    }
    const body = await request.json();
    try {
        const {token, password} = body
        const decoded = jwtDecode<JwtPayload>(token);




        // console.log(`${process.env.API_URL}/api/users/${decoded.uid}`);

        const req = await axios.patch(`${apiUrl}/api/users/${decoded.uid}`, {password}, {
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
                message: 'Change Password Failed',
            },
            {
                status: 400,
            }
        );
    }
}
