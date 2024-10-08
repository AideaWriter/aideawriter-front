import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import {jwtDecode} from 'jwt-decode';


export async function GET(){

    const cookieName = process.env.COOKIE_NAME;

    interface JwtPayload {
        uid: string;
        name?: string;
        email: string;
    }
    const cookieStore = cookies();
    const secret = process.env.AUTH_SECRET || "";
    const token = cookieStore.get(`${cookieName}`);
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
        const response = {
            decoded
        };

        return new Response(JSON.stringify(response), {
            status: 200,
        });
    }catch (e){
        return NextResponse.json(
            {
                message: "Not is token",
            },
            {
                status: 400,
            }
        );
    }

}
