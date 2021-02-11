import { providers, signIn, getSession, csrfToken } from 'next-auth/client'

export default function SignIn({ providers, csrfToken }) {
   return (
      <>
         {Object.values(providers).map((provider) => (
            <div key={provider.name}>
               <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
            </div>
         ))}
      </>
   )
}

SignIn.getInitialProps = async (context) => {
   const { req, res } = context
   const session = await getSession({ req })
   if (session && res && session.accessToken) {
      res.writeHead(302, {
         Location: '/',
      })
      res.end()
      return
   } else {
      return {
         providers: await providers(context),
         csrfToken: await csrfToken(context),
      }
   }
}
