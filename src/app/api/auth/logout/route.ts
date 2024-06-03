import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

export async function POST(){
    try {
        const cookieStore = cookies();
        cookieStore.delete(`${process.env.COOKIE_NAME}`)
        return new Response(JSON.stringify({message: 'User Log Out'}), {
            status: 200,
        });

    }catch (error) {
        return NextResponse.json(
            {
                message: 'Log Out Failed',
            },
            {
                status: 400,
            }
        );
    }
}
