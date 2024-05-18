// import {cookies} from 'next/headers';
//
// export const getAuth = () => {
//     const cookieStore = cookies();
//     console.log(cookieStore);
//     return cookieStore ? JSON.parse(cookieStore) : undefined;
// };
//
// export const removeAuth = () => {
//     localStorage.removeItem("auth");
// };
//
// export const isAuthenticated = (): boolean => {
//     const auth = getAuth();
//     if (!auth) {
//         return false;
//     }
//     try {
//         const decoded = jwtDecode(auth.token, process.env.NEXT_PUBLIC_AUTH_SECRET as any);
//         return !!decoded;
//     } catch (error) {
//         return false;
//     }
// };

import axios from 'axios';

interface UserResponse {
    user: string | null;
    error:  null;
}

export async function getUser(): Promise<UserResponse> {
    try {
        const { data } = await axios.get("/api/auth/me");
        return {
            user: data,
            error: null,
        };
    } catch (e) {
        const error = e;

        return {
            user: null,
            error,
        };
    }
}
