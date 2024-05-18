declare module "next-auth"{
    interface Session {
        user: {
            uid: string,
            email: string,
            name: string,
            billing_status: string,
            billing_subscription_id: string | null,
            billing_customer_id: string | null,
            role: string,
            is_email_confirmed: boolean,
            created_at: string,
        },
        token: string,
    }
}

declare module "next-auth/jwt"{
    interface JWT{
        user: {
            uid: string,
            email: string,
            name: string,
            billing_status: string,
            billing_subscription_id: string | null,
            billing_customer_id: string | null,
            role: string,
            is_email_confirmed: boolean,
            created_at: string,
        },
        token: string
    }
}
