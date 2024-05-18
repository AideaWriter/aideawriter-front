import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

export async function POST(){
    try {
        const cookieStore = cookies();
        cookieStore.delete(process.env.NEXT_PUBLIC_COOKIE_NAME)
        return new Response(JSON.stringify({message: 'User Log Out'}), {
            status: 200,
        });

    }catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 400,
            }
        );
    }
}
