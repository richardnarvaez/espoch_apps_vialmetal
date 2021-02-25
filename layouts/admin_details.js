import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Row from '../components/rowlist_details'

export default function Admin() {
   const { query } = useRouter()
   const id = query.id
   console.log('ID', id)

   const [listMaterials, setMaterials] = useState([])
   const [listTools, setTools] = useState([])
   const [listVehicles, setVehicles] = useState([])
   const [error, setError] = useState(false)

   useEffect(() => {
      if (id) {
         fetch('/api/data/work_material/used/' + id)
            .then((res) => res.json())
            .then((result) => {
               setMaterials(result)
            })
            .catch((e) => {
               console.log('ERROR: >>>>', e)
               setError(true)
            })
         
         
         fetch('/api/data/work_tool/used/' + id)
         .then((res) => res.json())
         .then((result) => {
            setTools(result)
         })
         .catch((e) => {
            console.log('ERROR: >>>>', e)
            setError(true)
         })
         
         fetch('/api/data/work_vehicle/used/' + id)
         .then((res) => res.json())
         .then((result) => {
            setVehicles(result)
         })
         .catch((e) => {
            console.log('ERROR: >>>>', e)
            setError(true)
         })
      }
   }, [id])

   /*
    const setListado = (a) => {
        setList((old) => [...old, a])
    }*/

   return (
      <>
         <div className="body-adminwork">
            <div className="btn-volver">
               <a href="../admin">
                  <button class="" type="button">
                     Volver
                  </button>
               </a>
            </div>

            <h1>FINALIZAR TRABAJO</h1>

            <div className="table-section">
               <div className="titles-table">
                  <div className="first-column">
                     {' '}
                     <strong>UTILIZADO</strong>{' '}
                  </div>
                  <div className="second-column">
                     {' '}
                     <strong>SOBRANTE</strong>{' '}
                  </div>
                  <div className="third-column">
                     {' '}
                     <strong>RESTANTE</strong>{' '}
                  </div>
               </div>
               <div className="table-area">
                  <h3>MATERIALES</h3>
                  {error ? (
                     <>Error de conexion</>
                  ) : (
                     <div className="row-materials">
                        {!listMaterials ? (
                           <>CARGANDO DATO...</>
                        ) : (
                           listMaterials.map((item, i) => {
                              return <Row key={i} data={item} />
                           })
                        )}
                     </div>
                  )}
                  <h3>HERRAMIENTAS</h3>
                  {error ? (
                     <>Error de conexion</>
                  ) : (
                     <div className="row-materials">
                        {!listTools ? (
                           <>CARGANDO DATO...</>
                        ) : (
                           listTools.map((item, i) => {
                              return <Row key={i} data={item} />
                           })
                        )}
                     </div>
                  )}
                  <h3>VEHÍCULOS</h3>
                  {error ? (
                     <>Error de conexion</>
                  ) : (
                     <div className="row-materials">
                        {!listVehicles ? (
                           <>CARGANDO DATO...</>
                        ) : (
                           listVehicles.map((item, i) => {
                              return <Row key={i} data={item} />
                           })
                        )}
                     </div>
                  )}
               </div>
            </div>

            <div className="button-container">
               <div className="btn btn-editar">
                  <button className="" type="button">
                     Editar Obra
                  </button>
               </div>
               <div className="btn btn-terminar">
                  <button className="" type="button">
                     Finalizar Obra
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}
