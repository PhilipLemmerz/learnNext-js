import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../dummy-user';
import { compare as bycryptCompare } from "bcryptjs";

// Kern Login Mechnaismus auf ServerSeite -> das File muss [...nextauth].js heißen. 

export default NextAuth({
    providers: [
        // Providers ist ein Array: Wir können hier viele Provider (Apple, Google, Facebook Login einfügen)
        CredentialsProvider({
            async authorize(credentials) {
                // Hier kommt unsere individuelle autorisierungs code -> hier dummy code -> normalerweise arbeiten wir hier mit der DB etc wie in node.js
                // Errors werden automatisch als login rejected gewertet 
                const userArray = User.filter(u => u.email === credentials.email);
                if (userArray.length === 0) {
                    throw new Error('No User Found')
                }
                const user = userArray[0];
                const pswValid = await bycryptCompare(credentials.password, user.password);
                console.log(credentials.password, user.password)
                if (!pswValid) {
                    throw new Error('Password not correct')
                }
                return user
            }
        })
    ],
    // secret muss gesetzt werden !!
    secret: process.env.NEXTAUTH_SECRET,
    
})