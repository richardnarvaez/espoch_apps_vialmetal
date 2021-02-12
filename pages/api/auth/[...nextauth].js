import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
   providers: [
      Providers.Google({
         clientId: '587264606471-jnho92vvdvvm62kid4fc3vlk930b337s.apps.googleusercontent.com', //process.env.NEXTAUTH_GOOGLE_ID,
         clientSecret: 'BncxEbSC_r2EboCUHphTq2JV', //process.env.NEXTAUTH_GOOGLE_SECRET,
      }),
   ],
   // database: process.env.NEXTAUTH_DATABASE_URL,
   database: {
      type: 'mssql',
      host: 'serverandres.database.windows.net',
      port: 1433,
      username: 'andresadmin',
      password: 'p@ssw0rd',
      database: 'BddVialMetal',
   },
   pages: {
      signIn: '/auth/login',
      //signOut: '/api/auth/signout',
      //error: '/api/auth/error', // Error code passed in query string as ?error=
      //verifyRequest: '/api/auth/verify-request', // (used for check email message)
      //newUser: null // If set, new users will be directed here on first sign in
   },
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth
