import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const authHandler = NextAuth({
    providers: [
        Credentials({
            name: "credentials",

            credentials: {
                email: {label: "Email", type : "text", placeholder: "Enter your email"},
                password: {label: "Password", type : "password", placeholder: "Enter your password"}
            }, 

            async authorize (credentials){
                try{
                    return null;
                }
                catch (e){
                    throw new Error(e)
                }
            }
        }),
    ],

    // to redirect the default route which is /api/auth/signIn to /login and add customized login page instead of using the default page by the providers.
    pages: {
        signIn: '/login'
    }
});

export {authHandler as GET, authHandler as POST}