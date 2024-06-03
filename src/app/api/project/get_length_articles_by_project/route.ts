import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

export async function GET(request: Request){
    interface JwtPayload {
        uid: string;
        name?: string;
        email: string;
    }
    const cookieStore = cookies();
    const secret = process.env.AUTH_SECRET || "";
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
        const decoded = jwtDecode<JwtPayload>(value, secret as any);


        const req = await axios.get(`${process.env.API_URL}/api/articles/project?uid=${uid}`, {
            headers: {
                'Authorization': `Bearer ${token.value}`
            }
        });

        const { data } = await req;

        if (data.type !== "Right"){
            return NextResponse.json(
                {
                    message: "Articles not found",
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
                message: "Articles not found",
            },
            {
                status: 400,
            }
        );
    }

}
