import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import Models from '../../../models'

const options = {
   site: process.env.NEXTAUTH_URL || 'http://localhost:3000',
   providers: [
      Providers.Google({
         clientId: '587264606471-jnho92vvdvvm62kid4fc3vlk930b337s.apps.googleusercontent.com', //process.env.NEXTAUTH_GOOGLE_ID,
         clientSecret: 'BncxEbSC_r2EboCUHphTq2JV', //process.env.NEXTAUTH_GOOGLE_SECRET,
      }),
   ],
   // database: process.env.NEXTAUTH_DATABASE_URL,
   // database: {
   //    type: 'mssql',
   //    host: 'serverandres.database.windows.net',
   //    port: 1433,
   //    username: 'andresadmin',
   //    password: 'p@ssw0rd',
   //    database: 'BddVialMetal',
   // },
   adapter: Adapters.TypeORM.Adapter(
      {
         type: 'mssql',
         host: 'serverandres.database.windows.net',
         port: 1433,
         username: 'andresadmin',
         password: 'p@ssw0rd',
         database: 'BddVialMetal',
      },
      {
         models: {
            User: Models.User,
         },
      }
   ),
   session: { jwt: true },
   pages: {
      signIn: '/auth/login',
      //signOut: '/api/auth/signout',
      //error: '/api/auth/error', // Error code passed in query string as ?error=
      //verifyRequest: '/api/auth/verify-request', // (used for check email message)
      //newUser: null // If set, new users will be directed here on first sign in
   },
   callbacks: {
      async jwt(token, user, account, profile, isNewUser) {
         if (account?.accessToken) {
            token.accessToken = account.accessToken
         }
         if (user?.roles) {
            token.roles = user.roles
         }
         return token
      },
      async session(session, token) {
         if (token?.accessToken) {
            session.accessToken = token.accessToken
         }
         if (token?.roles) {
            session.user.roles = token.roles
         }
         return session
      },
   },
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth
