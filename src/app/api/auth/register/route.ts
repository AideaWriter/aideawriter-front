import {NextResponse} from 'next/server';

export async function POST(request: Request){
    const apiUrl = process.env.API_URL;
    try {
        const data = await request.json()
        const {name, email, password} = data

        let res = await fetch(`${apiUrl}/api/auth/register`,{
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
        if (user.statusCode === 400){

                return NextResponse.json(
                    {
                        message: 'Registration Failed'
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
