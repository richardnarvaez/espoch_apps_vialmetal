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

   const insertarContratista = () => {
      const contratista = {
         ruc: document.getElementById('ruc').value,
         description: document.getElementById('descripcion').value,
         business_name: document.getElementById('nombre').value,
      }

      fetch('/api/data/contractor/null', {
         method: 'post',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(contratista),
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
      <>
         <button className="bt-new-work" data-toggle="modal" data-target="#exampleModal4">
            <h5>+Contratista</h5>
         </button>

         <h1>Lista de Contratistas</h1>
         {/*INICIA MODAL --CONTRATISTA--*/}
         <div
            class="modal fade"
            id="exampleModal4"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">
                        Nuevo Contratista
                     </h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <div class="form-group">
                        <label for="">Nombre</label>
                        <input className="form-control" id="nombre" />
                        <small id="emailHelp" className="form-text text-muted">
                           Nombre del contratista
                        </small>
                     </div>

                     <div class="form-group">
                        <label for="">RUC</label>
                        <input className="form-control" id="ruc" />
                        <small id="emailHelp" className="form-text text-muted">
                           Ruc del contratista
                        </small>
                     </div>

                     <div class="form-group">
                        <label for="">Descripcion</label>
                        <input className="form-control" id="descripcion" />
                        <small id="emailHelp" className="form-text text-muted">
                           Descripcion de contratista
                        </small>
                     </div>
                  </div>

                  <div class="modal-footer">
                     <button onClick={insertarContratista} type="button" class="btn btn-primary">
                        Guardar Contratista
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/*TERMINA MODAL*/}
         
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
