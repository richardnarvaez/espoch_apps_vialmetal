import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Inicio from '../../components/Inicio'
import Nav from '../../components/nav'
import AdminDetails from '../../layouts/admin_details'
export default function EndWork() {
   const [session, sessionLoading] = useSession()

   return (
      <>
         <Nav />
         {!session && !sessionLoading && (
            <h1>Acceso Denegado - No puede acceder al contendio de esta página</h1>
         )}
         {session && !sessionLoading && (
            <>
               <AdminDetails />
            </>
         )}
      </>
   )
}
