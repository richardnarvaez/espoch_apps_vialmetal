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

   if (typeof window !== 'undefined' && sessionLoading) return <p>Cargando..</p>
   // if (!session && !sessionLoading) return <UnAuthenticated />
   return (
      <div>
         <Nav />
         {!session && !sessionLoading && (
            <h1>Acceso Denegado - No puede acceder al contendio de esta página</h1>
         )}
         {/* !session.user?.roles?.includes('Verified') */}
         {session && !sessionLoading && (
            <>
               <AdminLayout />
            </>
         )}
      </div>
   )
}

function NotLogin() {
   return (
      <div>
         <Nav />
         <div>
            <h1>Necesita iniciar sesión para acceder a esta página</h1>
         </div>
      </div>
   )
}
