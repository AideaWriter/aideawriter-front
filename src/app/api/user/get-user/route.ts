import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

export async function GET(){
    const cookieStore = cookies();
    const secret = process.env.NEXT_PUBLIC_AUTH_SECRET || "";
    const token = cookieStore.get(process.env.NEXT_PUBLIC_COOKIE_NAME);
    // console.log(token);
    try {
        const {value} = token
        const decoded = jwtDecode(value, secret as any);
        console.log(decoded.uid);
        const req = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${decoded.uid}`)
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
                message: "User not found",
            },
            {
                status: 400,
            }
        );
    }
}
