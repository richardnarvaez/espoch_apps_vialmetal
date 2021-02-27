import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Row from '../components/rowlist_details'

export default function Admin() {
   const { query, back } = useRouter()
   const id = query.id
   console.log('ID', id)

   const [listMaterials, setMaterials] = useState()
   const [listTools, setTools] = useState()
   const [listVehicles, setVehicles] = useState()
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(false)

   let sentMaterials = [],
      sentTools = [],
      sentVehicles = []

   const endWork = (event) => {
      const algo = $('input').children()
      let faltanCampos = false
      let idPrueba

      for (let i = 0; i < algo.prevObject.length; i++) {
         const a = $(`#${algo.prevObject[i].id}`)
         if (a.val().length <= 0) {
            faltanCampos = true
            alert('Faltan campos por llenar')
            return
         }
         idPrueba = a.attr('id')
         if (idPrueba.substring(0, 1) == 'M') {
            console.log('bef materials', sentMaterials, idPrueba, a.val())
            sentMaterials = [
               ...sentMaterials,
               { id_work_material: idPrueba.substring(1), material_end: a.val() },
            ]
            console.log('aft materials', sentMaterials)
         } else if (idPrueba.substring(0, 1) == 'T') {
            sentTools = [
               ...sentTools,
               { id_work_tool: idPrueba.substring(1), tool_end: a.val() },
            ]
         } else {
            if (a.val() != '...') {
               sentVehicles = [ 
                  ...sentVehicles,
                  { id_work_vehicle: idPrueba.substring(1), km_end: a.val() },
               ]
            } else {
               alert('Ingrese valores válidos.')
            }
         }
      }
      updateFinal()
      //const idP = `{"idP":${idPrueba.substring(1)}}`
      //updateWorkStatus(idP)
   }

   const updateFinal = () => {
      setLoading(true)
      fetch('/api/data/work/end/' + id, {
         method: 'PUT',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ sentMaterials, sentTools, sentVehicles }),
      })
         .then((response) => {
            if (response) {
               console.log(response)
               //window.location.href = '/admin'
            }
         })
         .catch(function (error) {
            console.log('Request failed', error)
         })
   }

   useEffect(() => {
      if (id) {
         //workmaterial
         fetch('/api/data/work_material/used/' + id)
            .then((res) => res.json())
            .then((result) => {
               console.log('fetch ->', result)
               setMaterials(result)
            })
            .catch((e) => {
               console.log('ERROR: >>>>', e)
               setError(true)
            })

         //worktool
         fetch('/api/data/work_tool/used/' + id)
            .then((res) => res.json())
            .then((result) => {
               setTools(result)
            })
            .catch((e) => {
               console.log('ERROR: >>>>', e)
               setError(true)
            })
         //workvehicle
         fetch('/api/data/work_vehicle/used/' + id)
            .then((res) => res.json())
            .then((result) => {
               console.log('RES', result)
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
   if (loading)
      return (
         <div
            style={{
               textAlign: 'center',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               height: '95vh',
               color: '#000',
            }}
         >
            <h1>Cargando...</h1>
            <div class="spinner-border text-warning" role="status">
               <span class="sr-only"></span>
            </div>
         </div>
      )
   return (
      <>
         <div className="body-adminwork">
            <div className="btn-volver">
               <button onClick={() => back()}>
                  <button class="" type="button">
                     Volver
                  </button>
               </button>
            </div>

            <h1>FINALIZAR TRABAJO</h1>
            <div class="container-table">
               <table class="table">
                  <thead>
                     <tr>
                        <th scope="col">UTILIZADO</th>
                        <th scope="col"></th>
                        <th scope="col">REGRESA</th>
                        <th scope="col">SOBRANTE</th>
                     </tr>
                  </thead>
                  <tbody>
                     <h3>Materiales</h3>

                     {error ? (
                        <>Error de conexion</>
                     ) : (
                        <>
                           {!listMaterials ? (
                              <>
                                 CARGANDO DATO...
                                 <div class="spinner-border text-warning" role="status">
                                    <span class="sr-only">Loading...</span>
                                 </div>
                              </>
                           ) : (
                              listMaterials.map((item, i) => {
                                 return (
                                    <Row
                                       key={i}
                                       idnum={'M' + item.id_work_material}
                                       data={item}
                                       tp={'m'}
                                    />
                                 )
                              })
                           )}
                        </>
                     )}
                     <h3>Herramientas</h3>
                     {error ? (
                        <>Error de conexion</>
                     ) : (
                        <>
                           {!listTools ? (
                              <>
                                 CARGANDO DATO...
                                 <div class="spinner-border text-warning" role="status">
                                    <span class="sr-only">Loading...</span>
                                 </div>
                              </>
                           ) : (
                              listTools.map((item, i) => {
                                 return (
                                    <Row
                                       key={i}
                                       idnum={'T' + item.id_work_tool}
                                       data={item}
                                       tp={'t'}
                                    />
                                 )
                              })
                           )}
                        </>
                     )}
                     <h3>Vehículos</h3>
                     {error ? (
                        <>Error de conexion</>
                     ) : (
                        <>
                           {!listVehicles ? (
                              <>
                                 {' '}
                                 CARGANDO DATO...
                                 <div class="spinner-border text-warning" role="status">
                                    <span class="sr-only">Loading...</span>
                                 </div>
                              </>
                           ) : (
                              listVehicles.map((item, i) => {
                                 console.log('<><><<>< ID VEHICLE:', item.id_work_vehicle)
                                 return (
                                    <Row
                                       key={i}
                                       idnum={'V' + item.id_work_vehicle}
                                       data={item}
                                       tp={'v'}
                                    />
                                 )
                              })
                           )}
                        </>
                     )}
                  </tbody>
               </table>
            </div>

            <div className="button-container">
               <div className="btn btn-terminar">
                  <button className="" type="button" onClick={endWork}>
                     Finalizar Obra
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}
