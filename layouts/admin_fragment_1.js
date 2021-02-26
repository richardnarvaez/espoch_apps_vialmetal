import { Switch } from '@material-ui/core'
import { useState, useEffect } from 'react'

import Card from '../components/card'

export default function AdminF1() {
   // VARIABLES "ESTADO"
   const [list_obras, setListObras] = useState()
   const [view, setView] = useState(true)

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
            <a className="noprint" onClick={() => window.print()}>
               Imprimir Reporte
            </a>
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
                        <th scope="col">Contratista</th>
                        <th scope="col">Responsable</th>
                        <th scope="col">Locación</th>
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
   return <>
  <tbody>
    <tr>
      <th scope="row">{data.id_work}</th>
      <td>{data.business_name}</td>
      <td>{data.responsable}</td>
      <td>{data.location}</td>
      <td>{data.description}</td>
    </tr>
  </tbody>
   </>
   // Genial parece que funciona veamos ya en el localhost
}
