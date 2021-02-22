import { useState, useEffect } from 'react'
import Link from 'next/link'

import Card from '../components/card'

export default function AdminF1() {
   // VARIABLES "ESTADO"
   const [list_obras, setListObras] = useState([])
   const [error, setError] = useState(false)

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      fetch('/api/data/work/active')
         .then((res) => res.json())
         .then((result) => {
            setListObras(result)
         })
         .catch((e) => {
            console.log('ERRPR: >>>>', e)
            setError(true)
         })
   }, [])

   return (
      <>
         <a className="bt-new-work" href="/adminwork">
            <h5>Nueva Obra</h5>
         </a>
         {error ? (
            <>Error de conexion</>
         ) : (
            <div className="div" className="row">
               {!list_obras ? (
                  <>CARGANDO DATO...</>
               ) : (
                  list_obras.map((item, i) => {
                     return <Card key={i} data={item} href={'/details/' + item.id_work} />
                  })
               )}
            </div>
         )}
      </>
   )
}
