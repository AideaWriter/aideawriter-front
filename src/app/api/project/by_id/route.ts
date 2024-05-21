import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import axios from 'axios';

export async function GET(request: Request){
    const cookieStore = cookies();
    const token = cookieStore.get(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`);
    const url = new URL(request.url);
    const uid = url.searchParams.get('uid');
    try {

        const req = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${uid}`, {
            headers: {
                'Authorization': `Bearer ${token.value}`
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
