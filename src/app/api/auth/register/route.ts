import {NextResponse} from 'next/server';

export async function POST(request: Request){
    try {
        const data = await request.json()
        const {name, email, password} = data
        console.log(name, email, password);

        let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,{
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const user = await res.json()
        console.log(user.message);
        if (user.statusCode === 400){

                return NextResponse.json(
                    {
                        message: user.message
                    },
                    {
                        status: 400,
                    }
                );
        }

    }catch (e){
        console.log(e);
    }

    return NextResponse.json({massage: 'success'})
}
