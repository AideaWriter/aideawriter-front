import {cookies} from 'next/headers';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {NextResponse} from 'next/server';

export async function GET(){
    const cookieStore = cookies();
    const secret = process.env.NEXT_PUBLIC_AUTH_SECRET || "";
    const token = cookieStore.get(process.env.NEXT_PUBLIC_COOKIE_NAME);
    // const url = new URL(request.url);
    // const page = url.searchParams.get('page');
    // const take = url.searchParams.get('take');
    console.log('hello');
    try {
        const {value} = token
        const decoded = jwtDecode(value, secret as any);

        const req = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/stripe/${decoded.uid}/get-subscription`, {
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
                message: e.message,
            },
            {
                status: 400,
            }
        );
    }
}
