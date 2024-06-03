import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';


export async function POST(request: Request){

    interface JwtPayload {
        uid: string;
        name?: string;
        email: string;
    }
    const cookieStore = cookies();
    const secret = process.env.AUTH_SECRET || "";
    const token = cookieStore.get(`${process.env.COOKIE_NAME}`);
    const body = await request.json();
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

        const {
            cancel_at_period_end
        } = body


        const result = await axios.post(`${process.env.API_URL}/api/stripe/${decoded.uid}/cancel-at-period-end`,
            {
                cancel_at_period_end
            },
            {
                headers: {
                    'Authorization': `Bearer ${token.value}`
                },
            }
        )
        const { data } = await result
        return new Response(JSON.stringify(data), {
            status: 200,
        });


    }catch (e){
        return NextResponse.json(
            {
                message: 'Auto Renewal Failed',
            },
            {
                status: 400,
            }
        );
    }

}
