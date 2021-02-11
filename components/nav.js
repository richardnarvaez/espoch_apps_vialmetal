import { signin, signout, useSession } from 'next-auth/client'
const Nav = () => {
   const [session, loading] = useSession()

   return (
      <nav>
         <noscript>
            <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
         </noscript>
         <p className={`nojs-show ${!session && loading ? 'loading' : 'loaded'}`}>
            {!session && (
               <>
                  <span className="notSignedIn">Not signed in</span>
                  <a href="/auth/login">
                     <button className="signinButton">Sign in</button>
                  </a>
               </>
            )}
            {session && (
               <>
                  <span
                     style={{ backgroundImage: `url(${session.user.image})` }}
                     className="avatar"
                  />
                  <span className="signedIn">
                     Signed in as <strong>{session.user.email}</strong>
                  </span>
                  <a
                     href={`/api/auth/signout`}
                     onClick={(e) => {
                        e.preventDefault()
                        signout()
                     }}
                  >
                     <button className="signoutButton">Sign out</button>
                  </a>
               </>
            )}
         </p>
      </nav>
   )
}

export default Nav
