import {cookies} from 'next/headers';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {NextResponse} from 'next/server';

export async function GET(){
    interface JwtPayload {
        uid: string;
        name?: string;
        email: string;
    }
    const cookieStore = cookies();
    const secret = process.env.AUTH_SECRET || "";
    const token = cookieStore.get(`${process.env.COOKIE_NAME}`);
    // const url = new URL(request.url);
    // const page = url.searchParams.get('page');
    // const take = url.searchParams.get('take');
    console.log('hello');
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

        const req = await axios.get(`${process.env.API_URL}/api/stripe/${decoded.uid}/get-subscription`, {
            headers: {
                'Authorization': `Bearer ${token.value}`
            }
        })

        const { data } = await req
    console.log(data);
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
                message: 'Get Subscription Failed',
            },
            {
                status: 400,
            }
        );
    }
}
