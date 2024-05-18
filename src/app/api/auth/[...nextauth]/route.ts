import {NextAuthOptions} from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import Cookies from 'js-cookie';

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                },
                password: {label: 'password',type: 'password'},
            },
            async authorize(credentials, req){

                if(!credentials?.email || !credentials?.password) return null;
                const {email, password} = credentials;
                const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/login', {
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if(res.status == 401){
                    console.log(res.statusText)
                    return null;
                }
                const user = res.json()
                return await user
            }
        })
    ],

    callbacks: {
        async jwt({token, user}){
            if (user) return {...token}
            return token
        },
        async session({token, session }){
            session.token = token.token
            Cookies.set('token', session.token, { expires: 7, secure: true });
            return session;
        }
    }

}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
