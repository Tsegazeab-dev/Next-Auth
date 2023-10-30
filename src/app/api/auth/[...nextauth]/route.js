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
    ]
});

export {authHandler as GET, authHandler as POST}