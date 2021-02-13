import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Nav from '../components/nav'

export default function Admin() {
   const [session, loading] = useSession()
   const [users, setUsers] = useState()

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/api/data/users')
         const result = await res.json()
         setUsers(result)
      }
      fetchData()
   }, [])

   if (typeof window !== 'undefined' && loading) return null

   if (!session) {
      return <NotLogin />
   } else {
      return (
         <div>
            <Nav />
            <div>
               <h1> Pagina protegida con LOGIN</h1>
               {/* PODEMOS RENDERIZAR UNA LISTA */}
               <ul>
                  {users &&
                     users.map((item, i) => {
                        return (
                           <li key={i}>
                              <p>Hola: {item.name}</p>
                           </li>
                        )
                     })}
               </ul>
            </div>
         </div>
      )

      // {
      //    !session && sessionLoading && <p>Loading...</p>
      // }
      // {
      //    !session && !sessionLoading && <p>Access Denied - Not logged in</p>
      // }
      // {
      //    session && !sessionLoading && !session.user?.roles?.includes('Verified') && (
      //       <p>Access Denied - Unverified</p>
      //    )
      // }
      // {
      //    session && !sessionLoading && session.user?.roles?.includes('Verified') && (
      //       <>
      //          <p>Stuff for verified users</p>
      //          {session.user.roles && session.user.roles.includes('Admin') && (
      //             <>
      //                <button id="doSomething">Admin Only</button>
      //             </>
      //          )}
      //          <p>More stuff for verified users</p>
      //       </>
      //    )
      // }
   }

   function NotLogin() {
      return (
         <div>
            <Nav />
            <div>
               <h1>Necesitas iniciar sesion para aceder a esta pagina</h1>
            </div>
         </div>
      )
   }
}
