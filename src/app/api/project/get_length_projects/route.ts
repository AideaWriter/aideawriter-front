import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

export async function GET(){

    const cookieStore = cookies();
    const secret = process.env.NEXT_PUBLIC_AUTH_SECRET || "";
    const token = cookieStore.get(process.env.NEXT_PUBLIC_COOKIE_NAME);

    try {
        const {value} = token
        const decoded = jwtDecode(value, secret as any);


        const req = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?uid=${decoded.uid}`, {
            headers: {
                'Authorization': `Bearer ${token.value}`
            }
        });

        const { data } = await req;

        if (data.type !== "Right"){
            return NextResponse.json(
                {
                    message: "Projects not found",
                },
                {
                    status: 400,
                }
            );
        }

        return new Response(JSON.stringify(data.value.length), {
            status: 200,
        });
    }catch (err){
        return NextResponse.json(
            {
                message: "Projects not found",
            },
            {
                status: 400,
            }
        );
    }

}
