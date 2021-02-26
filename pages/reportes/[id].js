import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import H1 from '../../components/Inicio'

export default function Reportes() {
   const { query } = useRouter()
   const id = query.id

   const [lista_materiales, setMateriales] = useState()

   useEffect(() => {
      if (id) {
         console.log('ID: ', id)
         obtenerReportesPorId()
      }
   }, [id])

   const obtenerReportesPorId = () => {
      fetch('/api/data/work_material/' + id)
         .then((res) => res.json())
         .then((result) => {
            console.log('DATOS:', result)
            setMateriales(result)
         })
         .catch((e) => {
            console.log('ERROR: >>>>', e)
         })
   }

   return (
      <>
         <div className="container">
            <H1></H1>
            <br />
            <table border="1" className="w-100">
               <tbody>
                  <tr>
                     <th>Responsable</th>
                     <th>Obra</th>
                     <th>Sector</th>
                  </tr>
                  <tr>
                     <td>Nombre</td>
                     <td>A1</td>
                     <td>B1</td>
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
                     <td>2/12/2000</td>
                     <td>A1324fdsad</td>
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
                              <td>2/12/2000</td>
                              <td>A1324fdsad</td>
                              <td>Riobamba</td>
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
                  <tr>
                     <td>Nombre</td>
                     <td>A1</td>
                     <td>B1</td>
                  </tr>
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
   )
}
