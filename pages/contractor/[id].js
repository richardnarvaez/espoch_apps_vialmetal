import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Card from '../../components/card'
import Footer from '../../components/footer'
import Inicio from '../../components/Inicio'

export default function AdminF1() {
   const { query } = useRouter()
   const id = query.id

   // VARIABLES "ESTADO"
   const [list_obras, setListObras] = useState()
   const [contractor, setContractor] = useState()
   const [error, setError] = useState(false)

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      if (id) {
         fetch('/api/data/work/active/' + id)
            .then((res) => res.json())
            .then((result) => {
               setListObras(result)
            })
            .catch((e) => {
               console.log('ERRPR: >>>>', e)
               setError(true)
            })

         fetch('/api/data/contractor/' + id)
            .then((res) => res.json())
            .then((result) => {
               setContractor(result[0])
            })
            .catch((e) => {
               console.log('ERRPR: >>>>', e)
               setError(true)
            })
      }
   }, [id])

   const createObra = () => {
      const obra = {
         id_contractor: id,
         responsable: document.getElementById('responsable').value,
         description: document.getElementById('descripcion').value,
         location: document.getElementById('location').value,
         finished_at: document.getElementById('end_date').value,
         price_work: 0,
      }

      fetch('/api/data/work/null', {
         method: 'post',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(obra),
      })
         .then((response) => {
            if (response) {
               console.log(response)
               window.location.reload()
            }
         })
         .catch(function (error) {
            console.log('Request failed', error)
         })
   }
   return (
      <div className="container">
         <Inicio />
         <h1>Lista de obras de {contractor ? contractor.business_name : 'Cargando..'} </h1>
         <button
            type="button"
            class="btn bt-new-work"
            data-toggle="modal"
            data-target="#exampleModal"
            style={{ zIndex: 99 }}
         >
            Nueva Obra
         </button>

         <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">
                        Nueva Obra
                     </h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <form id="form-details" onSubmit={(event) => getDetails(event)}>
                        <div className="form-group">
                           <label for="exampleInputEmail1">
                              Contratista:{' '}
                              <strong>{contractor ? contractor.business_name : '...'}</strong>{' '}
                           </label>
                        </div>

                        <div className="form-group">
                           <label for="exampleInputEmail1">Responsable</label>
                           <input className="form-control" id="responsable" />
                           <small id="emailHelp" className="form-text text-muted">
                              Introducir el nombre del responsable
                           </small>
                        </div>

                        <div className="form-group">
                           <label for="exampleInputEmail1">Descripcion</label>
                           <input className="form-control" id="descripcion" />
                           <small id="emailHelp" className="form-text text-muted">
                              Ej. Asfaltado 10km via GUANO
                           </small>
                        </div>
                        <div className="form-group">
                           <label for="exampleInputEmail1">Ubicacion</label>
                           <input className="form-control" id="location" />
                           <small id="emailHelp" className="form-text text-muted">
                              Lugar donde se realizara la obra
                           </small>
                        </div>
                        {/* <div className="form-group">
            <label for="exampleInputEmail1">Fecha de inicio</label>
            <input
               type="date"
               className="form-control"
               id="create_date"
               aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
               We'll never share your email with anyone else.
            </small>
         </div> */}

                        <div className="form-group">
                           <label for="exampleInputEmail1">Fecha fin</label>
                           <input type="date" className="form-control" id="end_date" />
                           <small id="emailHelp" className="form-text text-muted">
                              Fecha Tentativa final de la Obra
                           </small>
                        </div>
                     </form>
                  </div>
                  <div class="modal-footer">
                     {/* <button type="button" class="btn btn-primary">
                        Crear OBRA
                     </button> */}
                     <button onClick={createObra} class="btn btn-primary">
                        Crear OBRA
                     </button>
                  </div>
               </div>
            </div>
         </div>

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
         <Footer />
      </div>
   )
}
