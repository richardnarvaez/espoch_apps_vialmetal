import { signin, signout, useSession } from 'next-auth/client'
import Link from 'next/link'
const Nav = () => {
   const [session, loading] = useSession()

   return (
      <>
         <noscript>
            <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
         </noscript>

         <nav className="toolbar">
            <Link href="/">
               <a>
                  <p>VIALMETAL</p>
               </a>
            </Link>

            <div className={`loading-view nojs-show ${!session && loading ? 'loading' : 'loaded'}`}>
               {!session ? (
                  <>
                     <a href="/auth/login">
                        <button className="signinButton">Sign in</button>
                     </a>
                  </>
               ) : (
                  <>
                     <span
                        style={{ backgroundImage: `url(${session.user.image})` }}
                        className="avatar"
                     />
                     <span className="signedIn">
                        <p>
                           <strong>{session.user.name}</strong>
                        </p>
                        <small>{session.user.email}</small>
                     </span>
                     <a
                        href={`/api/auth/signout`}
                        style={{ marginLeft: 16 }}
                        onClick={(e) => {
                           e.preventDefault()
                           signout()
                        }}
                     >
                        <button className="signoutButton">Sign out</button>
                     </a>
                  </>
               )}
            </div>
         </nav>
      </>
   )
}

export default Nav
