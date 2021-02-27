import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import H1 from '../../components/Inicio'
import { useSession } from 'next-auth/client'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

export default function Reportes() {
   dayjs.locale('es')
   const [session, sessionLoading] = useSession()
   const { query } = useRouter()
   const id = query.id

   const [work, setWork] = useState()
   const [tool, setTool] = useState()
   const [vehicle, setVehicle] = useState()
   const [lista_materiales, setMateriales] = useState()

   useEffect(() => {
      if (id) {
         console.log('ID: ', id)
         obtenerReportesPorId()
      }
   }, [id])

   const obtenerReportesPorId = () => {
      fetch('/api/data/work/' + id)
         .then((res) => res.json())
         .then((result) => {
            setWork(result[0])
         })
         .catch((e) => {
            console.log('ERROR: >>>>', e)
         })

      fetch('/api/data/work_material/' + id)
         .then((res) => res.json())
         .then((result) => {
            console.log('DATOS:', result)
            setMateriales(result)
         })
         .catch((e) => {
            console.log('ERROR: >>>>', e)
         })

      fetch('/api/data/work_tool/' + id)
         .then((res) => res.json())
         .then((result) => {
            console.log('DATOS:', result)
            setTool(result)
         })
         .catch((e) => {
            console.log('ERROR: >>>>', e)
         })
      fetch('/api/data/work_vehicle/' + id)
         .then((res) => res.json())
         .then((result) => {
            console.log('DATOS:', result)
            setVehicle(result)
         })
         .catch((e) => {
            console.log('ERROR: >>>>', e)
         })
   }

   return (
      <>
         {!session && !sessionLoading && (
            <h1>Acceso Denegado - No puede acceder al contendio de esta página</h1>
         )}
         {session && !sessionLoading && (
            <>
               <div className="container">
                  <H1></H1>
                  <br />
                  <table border="1" className="w-100">
                     <tbody>
                        <tr>
                           <th>Responsable</th>
                           <th>Descripción</th>
                           <th>Sector</th>
                        </tr>
                        <tr>
                           <td>{work && work.responsable}</td>
                           <td>{work && work.description}</td>
                           <td>{work && work.location}</td>
                        </tr>
                     </tbody>
                  </table>
                  <table border="1" className="w-100">
                     <tbody>
                        <tr>
                           <th>Fecha</th>
                           <th>ID obra</th>
                        </tr>
                        <tr>
                           <td>{work && dayjs(work.created_at).format('D MMMM, YYYY')}</td>
                           <td>{work && work.id_work}</td>
                        </tr>
                     </tbody>
                  </table>

                  <h1>Despacho</h1>
                  <table border="1" className="w-100">
                     <tbody>
                        <tr>
                           <th>CANTIDAD</th>
                           <th>DETALLE</th>
                           <th>TOTAL</th>
                        </tr>
                        {lista_materiales &&
                           lista_materiales.map((item, i) => {
                              return (
                                 <tr>
                                    <td>{item.material_begin}</td>
                                    <td>{item.name}</td>
                                    <td>${(item.material_begin * item.price_liter).toFixed(2)}</td>
                                 </tr>
                              )
                           })}
                        {tool &&
                           tool.map((item, i) => {
                              return (
                                 <tr>
                                    <td>{item.tool_begin}</td>
                                    <td>{item.name}</td>
                                    <td>${(item.tool_begin * item.price_use).toFixed(2)}</td>
                                 </tr>
                              )
                           })}
                        {tool &&
                           tool.map((item, i) => {
                              return (
                                 <tr style={{ background: '#ececec' }}>
                                    <td>{item.tool_begin}</td>
                                    <td>{item.name}</td>
                                    <td>${(item.tool_begin * item.price_use).toFixed(2)}</td>
                                 </tr>
                              )
                           })}
                        {vehicle &&
                           vehicle.map((item, i) => {
                              return (
                                 <tr>
                                    <td>{item.km_begin}km</td>
                                    <td>{item.name}</td>
                                    <td>${(item.km_begin * item.price_km).toFixed(2)}</td>
                                 </tr>
                              )
                           })}
                     </tbody>
                  </table>

                  <h1>Sobrante</h1>
                  <table border="1" className="w-100">
                     <tbody>
                        <tr>
                           <th>CANTIDAD</th>
                           <th>DETALLE</th>
                           <th>TOTAL</th>
                        </tr>
                        {lista_materiales &&
                           lista_materiales.map((item, i) => {
                              if (!item.material_end || item.material_end == 0) return null
                              return (
                                 <tr>
                                    <td>{item.material_end}</td>
                                    <td>{item.name}</td>
                                    <td>${(item.material_end * item.price_liter).toFixed(2)}</td>
                                 </tr>
                              )
                           })}
                        {tool &&
                           tool.map((item, i) => {
                              if (!item.tool_end || item.tool_end == 0) return null
                              return (
                                 <tr style={{ background: '#ececec' }}>
                                    <td>{item.tool_end}</td>
                                    <td>{item.name}</td>
                                    <td>${(item.tool_end * item.price_use).toFixed(2)}</td>
                                 </tr>
                              )
                           })}
                        {vehicle &&
                           vehicle.map((item, i) => {
                              if (!item.km_end || item.km_end == 0) return null
                              return (
                                 <tr>
                                    <td>{item.km_end}km</td>
                                    <td>{item.name}</td>
                                    <td>${(item.km_end * item.price_km).toFixed(2)}</td>
                                 </tr>
                              )
                           })}
                     </tbody>
                  </table>
                  <br></br>
                  <button className="noprint" onClick={() => window.print()}>
                     Imprimir
                  </button>
                  <br />
                  <br />
               </div>
            </>
         )}
      </>
   )
}
