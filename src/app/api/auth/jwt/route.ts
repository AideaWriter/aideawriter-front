import {NextResponse} from 'next/server';
import Cookies from 'js-cookie';

const MAX_AGE = 60 * 60 * 24 * 30;

export async function POST(request: Request){

        const body = await request.json();

        const { token } = body;


   const cookie =  Cookies.set('token', token, { expires: 7, secure: true });

    console.log(cookie);


    return NextResponse.json({massage: cookie})
}
