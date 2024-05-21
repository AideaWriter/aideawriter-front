import {serialize} from 'cookie';
import {NextResponse} from 'next/server';

const MAX_AGE = 60 * 60 * 24 * 30; // days;

export async function POST(request: Request) {
    const body = await request.json();

    const { email, password } = body;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const user = await res.json()


        if (user.statusCode === 401){
            return NextResponse.json(
                {
                    message: "Your password invalid",
                },
                {
                    status: 401,
                }
            );
        }else if(user.statusCode === 404){
            return NextResponse.json(
                {
                    message: "Your email invalid",
                },
                {
                    status: 404,
                }
            );
        }

    // console.log( user.token);

    // Always check this


    const seralized = serialize(`${process.env.NEXT_PUBLIC_COOKIE_NAME}`, user.token, {
        httpOnly: true,
        secure: "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: "/",
    });

    const response = {
        message: "Authenticated!",
    };

    return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Set-Cookie": seralized },
    });
}
