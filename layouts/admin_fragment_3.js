import { useState, useEffect } from 'react'

import CardW from '../components/card_c'

export default function AdminF3() {
   // VARIABLES "ESTADO"
   const [list_obras, setListObras] = useState()
   const [error, setError] = useState(false)

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      fetch('/api/data/contractor/all')
         .then((res) => res.json())
         .then((result) => {
            setListObras(result)
         })
         .catch((e) => {
            console.log('ERRPR: >>>>', e)
         })
   }, [])

   return (
      <>
         <a className="bt-new-work" href="/adminwork">
            <h5>Nuevo Contratista</h5>
         </a>

         {error ? (
            <>Error de conexion</>
         ) : (
            <div className="div" className="row">
               {!list_obras ? (
                  <>CARGANDO CONTRATISTAS...</>
               ) : (
                  list_obras.map((item, i) => {
                     return <CardW key={i} data={item} href={'/contractor/' + item.id_contractor} />
                  })
               )}
            </div>
         )}
      </>
   )
}
