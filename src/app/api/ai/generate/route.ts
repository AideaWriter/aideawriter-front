import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

// @route-config {
//   "api": {
//     "bodyParser": false
//   }
// }


export async function POST(request: Request){
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

        if (value !== undefined) {
            console.log(value);
        } else {
            console.log("Cookie is undefined or has no value");
        }

        const decoded = jwtDecode<JwtPayload>(value, secret as any);

        const {
            model,
            prompt,
            messages,
            language,
            textFor,
            theme,
            keyWords,
            temperature,
            titles,
        } = body


        let temperatureNum = parseFloat(temperature)
        const aiResult = await axios.post(`${apiUrl}/api/ai/${decoded?.uid}`,
            {
                model,
                prompt: theme,
                messages: [{
                    ai: false
                }],
                textFor,
                language,
                theme,
                keyWords,
                temperature: temperatureNum,
                titles,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token.value}`
                },
                timeout: 100000,
            }
        )
        const { data } = await aiResult
        return new Response(JSON.stringify(data.value), {
            status: 200,
        });


    }catch (e){
        return NextResponse.json(
            {
                message: 'Generate failed',
            },
            {
                status: 400,
            }
        );
    }

}
