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
    const cookieStore = cookies();
    const secret = process.env.NEXT_PUBLIC_AUTH_SECRET || "";
    const token = cookieStore.get(process.env.NEXT_PUBLIC_COOKIE_NAME);
    const body = await request.json();
    try {

        const {value} = token
        const decoded = jwtDecode(value, secret as any);

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
        const aiResult = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/ai/${decoded.uid}`,
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
                message: e.message,
            },
            {
                status: 400,
            }
        );
    }

}
