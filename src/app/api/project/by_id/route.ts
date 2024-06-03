import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import axios from 'axios';

export async function GET(request: Request){
    const cookieStore = cookies();
    const token = cookieStore.get(`${process.env.COOKIE_NAME}`);
    const url = new URL(request.url);
    const uid = url.searchParams.get('uid');
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
        const req = await axios.get(`${process.env.API_URL}/api/projects/${uid}`, {
            headers: {
                'Authorization': `Bearer ${value}`
            }
        })
        const { data } = await req
        if (data.type !== "Right"){
            return NextResponse.json(
                {
                    message: "Project not found",
                },
                {
                    status: 400,
                }
            );
        }

        return new Response(JSON.stringify(data.value), {
            status: 200,
        });
    }catch (e) {
        return NextResponse.json(
            {
                message: "Project not found",
            },
            {
                status: 400,
            }
        );
    }
}
