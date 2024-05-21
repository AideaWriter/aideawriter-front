import {cookies} from 'next/headers';
import axios from 'axios';
import {NextResponse} from 'next/server';


export async function PATCH(request: Request) {
    const cookieStore = cookies();
    const token = cookieStore.get(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`);
    const body = await request.json();

    try {
       const { uid, name } = body
        const req = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${uid}`, {
            name,
        }, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token.value}`
            }
        })

        return new Response(JSON.stringify(req.data), {
            status: 200,
        });
    }catch (e) {
        console.log();
        return NextResponse.json(
            {
                message: 'Update Project Failed',
            },
            {
                status: 400,
            }
        );
    }
}
