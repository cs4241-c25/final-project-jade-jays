import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      // @ts-ignore
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],

  secret: process.env.SECRET,

  session: {
    strategy: 'jwt', //change to use mongo later
    //maxAge: 15 * 24 * 60 * 60,
    //updateAge: 24 * 60 * 60, //add when switch from jwt

    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  },

  jwt: {
    maxAge: 15 * 24 * 60 * 60
    secret: process.env.SECRET,
    async encode() {},
    async decode() {},
  }
}

import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

export default async function handler(req, res) {
  const token = await getToken({ req })
  console.log("JSON Web Token", token)
  res.end()
}
