import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

export async function GET(request: Request){
    const apiUrl = process.env.API_URL;
    const cookieName = process.env.COOKIE_NAME;

    interface JwtPayload {
        uid: string;
        name?: string;
        email: string;
    }
    const cookieStore = cookies();
    const secret = process.env.AUTH_SECRET || "";
    const token = cookieStore.get(`${cookieName}`);
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    const take = url.searchParams.get('take');
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

        const req = await axios.get(`${apiUrl}/api/projects?uid=${decoded.uid}&page=${page}&take=${take}`, {
            headers: {
                'Authorization': `Bearer ${token.value}`
            }
        })
        const { data } = await req
        if (data.type !== "Right"){
            return NextResponse.json(
                {
                    message: "User not found",
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
