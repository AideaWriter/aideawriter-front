import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

export async function POST(request: Request){

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

        const body = await request.json()
        const {email} = body



        const req = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {email})
        const { data } = await req

        // if (data.type !== "Right"){
        //     return NextResponse.json(
        //         {
        //             message: "User not found",
        //         },
        //         {
        //             status: 400,
        //         }
        //     );
        // }

        return new Response(JSON.stringify(data), {
            status: 200,
        });
    }catch (e) {
        return NextResponse.json(
            {
                message: 'Send Email Failed',
            },
            {
                status: 400,
            }
        );
    }
}
