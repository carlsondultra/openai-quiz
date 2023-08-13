import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    session : {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    
}