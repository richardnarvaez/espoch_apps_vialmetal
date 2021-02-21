import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import dynamic from 'next/dynamic'

import Nav from '../components/nav'
import AdminLayout from '../layouts/admin'



const UnAuthenticated = dynamic(() => import('../layouts/unauthenticated'), {
   loading: () => <p>Cargando mensaje...</p>,
})

export default function Admin() {
   const [session, sessionLoading] = useSession()
   const [users, setUsers] = useState()

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/api/data/users')
         const result = await res.json()
         setUsers(result)
      }
      fetchData()
   }, [])

   if (typeof window !== 'undefined' && sessionLoading) return <p>Loading...</p>
   // if (!session && !sessionLoading) return <UnAuthenticated />
   return (
      <div>
         <Nav />
         {/* {session && !sessionLoading && !session.user?.roles?.includes('Verified') && (
            <p>Access Denied - Unverified ESTAS LOGUEADO PERO NO TIENES PERMISO PARA VER ESTO</p>
         )} */}
         {/* {session && !sessionLoading && session.user?.roles?.includes('Verified') && (
            <>
               <p>Stuff for verified users</p>
               {session.user.roles && session.user.roles.includes('Admin') && (
                  <>
                     <button id="doSomething">Admin Only</button>
                  </>
               )}
               <p>More stuff for verified users</p>
            </>
         )} */}
         <AdminLayout />
         {/* PUS ESTE BOTON PARA CREAR LA NUEVA OBRA VA A LA OTRA VISTA */}

       
      </div>
   )
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

function Login() {
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
}
