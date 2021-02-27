import { Switch } from '@material-ui/core'
import { useState, useEffect } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/es'

import Card from '../components/card'

export default function AdminF1() {
   // VARIABLES "ESTADO"
   const [list_obras, setListObras] = useState()
   const [view, setView] = useState(false)

   const [error, setError] = useState(false)

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      fetch('/api/data/work/all')
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
         <h1>Lista de Obras</h1>
         <div className="noprint">
            <Switch checked={view} onChange={() => setView(!view)} />
            <p>{!view ? 'Vista Tarjetas' : 'Vista Tabla'}</p>
            {/*<a className="noprint" onClick={() => window.print()}>
               Imprimir Reporte
   </a>*/}
         </div>
         {error ? (
            <>Error de conexion</>
         ) : (
            <>
               {!view ? (
                  <div className="div" className="row">
                     {!list_obras ? (
                        <>CARGANDO DATO...</>
                     ) : (
                        list_obras.map((item, i) => {
                           return <Card key={i} data={item} href={'/details/' + item.id_work} />
                        })
                     )}
                  </div>
               ) : (
                  <table class="table">
                     <thead>
                        <tr>
                           <th scope="col">#</th>
                           <th scope="col">Responsable</th>
                           <th scope="col">Locación</th>
                           <th scope="col">Fecha</th>
                           <th scope="col">Descripción</th>
                        </tr>
                     </thead>
                     {!list_obras ? (
                        <>CARGANDO DATO...</>
                     ) : (
                        list_obras.map((item, i) => {
                           return (
                              <FilaTablaInfo
                                 key={i}
                                 data={item}
                                 href={'/details/' + item.id_work}
                              />
                           )
                        })
                     )}
                  </table>
               )}
            </>
         )}
      </>
   )
}

function FilaTablaInfo({ data, href }) {
   dayjs.locale('es')
   var date = dayjs(data.created_at).format('D MMMM, YYYY')

   return (
      <>
         <tbody>
            <tr>
               <th scope="row">{data.id_work}</th>
               <td>{data.responsable}</td>
               <td>{data.location}</td>
               <td>{date}</td>
               <td>{data.description}</td>
            </tr>
         </tbody>
      </>
   )
  
}
