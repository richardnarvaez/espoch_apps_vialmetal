import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Nav from '../components/nav'

export default function Admin() {
   const [session, loading] = useSession()
   const [content, setContent] = useState()

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/api/secret')
         const json = await res.json()

         if (json.content) {
            setContent(json.content)
         }
      }
      fetchData()
   }, [session])

   if (typeof window !== 'undefined' && loading) return null

   if (!session) {
      return (
         <main>
            <Nav />
            <div>
               <h1>Necesitas iniciar sesion para aceder a esta pagina</h1>
            </div>
         </main>
      )
   }
   return (
      <main>
         <Nav />
         <div>
            <h1> Pagina protegida con LOGIN</h1>
            <p>{content}</p>
         </div>
      </main>
   )
}
