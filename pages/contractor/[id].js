import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Card from '../../components/card'
import Footer from '../../components/footer'
import Inicio from '../../components/Inicio'

import dayjs from 'dayjs'
import 'dayjs/locale/es'

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

      if(ValidarDatos(obra.responsable, obra.location, obra.finished_at)){
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
      }else{
         alert("DATOS OBLIGATORIOS POR LLENAR")
      }
      
   }
   return (
      <div className="container">
         <Inicio />
         <h1>Lista de obras de {contractor ? contractor.business_name : 'Cargando..'} </h1>
         {contractor && (
            <>
               <div>
                  {' '}
                  {/*BOTON EDITAR CONTRATISTA */}
                  <button
                     type="button"
                     class="btn"
                     data-toggle="modal"
                     data-target="#exampleModal6"
                     style={{ zIndex: 99 }}
                  >
                     Editar Contratista
                     <svg style={{ marginLeft: 10, width: 24, height: 24 }} viewBox="0 0 24 24">
                        <path
                           fill="currentColor"
                           d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                        />
                     </svg>
                  </button>
               </div>
               <ModalEditarContratista contractor={contractor} />
            </>
         )}

         <button
            type="button"
            class="btn bt-new-work"
            data-toggle="modal"
            data-target="#exampleModal2"
            style={{ zIndex: 99 }}
         >
            Nueva Obra
         </button>

         <ModalNuevaObra contractor={contractor} createObra={createObra} />

         {error ? (
            <>Error de conexión</>
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

function ModalNuevaObra({ contractor, createObra }) {
   return (
      <div
         class="modal fade"
         id="exampleModal2"
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
                        <label for="exampleInputEmail1">
                           <span style={{ color: 'red' }}>*</span>Responsable
                        </label>
                        <input className="form-control" id="responsable" />
                        <small id="emailHelp" className="form-text text-muted">
                           Introducir el nombre del responsable
                        </small>
                     </div>

                     <div className="form-group">
                        <label for="exampleInputEmail1">Descripción</label>
                        <input className="form-control" id="descripcion" />
                        <small id="emailHelp" className="form-text text-muted">
                           Ej. Asfaltado 10km via GUANO
                        </small>
                     </div>
                     <div className="form-group">
                        <label for="exampleInputEmail1"><span style={{ color: 'red' }}>*</span>Ubicacion</label>
                        <input className="form-control" id="location" />
                        <small id="emailHelp" className="form-text text-muted">
                           Lugar donde se realizará la obra
                        </small>
                     </div>

                     <div className="form-group">
                        <label for="exampleInputEmail1"><span style={{ color: 'red' }}>*</span>Fecha fin</label>
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
   )
}

function ValidarDatos(contra, ubi, fecha){

   if(validarFecha(fecha) && contra!="" && ubi!=""){
      return true;
   }else{
      return false;
   }

}

function validarFecha(fecha){
   var cfecha = dayjs(new Date()).format('YYYY-MM-DD')
   var vfecha = dayjs(fecha).format('YYYY-MM-DD')
   var longi = vfecha.length
   
   if(vfecha >= cfecha && longi!=12){
      return true;
   }else{
      alert("Fecha Inválida")
      return false;
   }
}

function ModalEditarContratista({ contractor }) {
   const [c, setC] = useState()

   useEffect(() => {
      console.log('CA', contractor)
      setC(contractor)
   }, [])

   function cambiarvalor(e) {
      console.log('HOLA', e.target.id)
      setC({ ...contractor, [e.target.id]: e.target.value })
   }

   const actualizarContratista = () => {
      fetch('/api/data/contractor/' + contractor.id_contractor, {
         method: 'PUT',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(c),
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
         {/*INICIA MODAL EDITAR CONTRATISTA*/}
         <div
            class="modal fade"
            id="exampleModal6"
            tabindex="-1"
            aria-labelledby="exampleModalLabelOne"
            aria-hidden="true"
         >
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">
                        Editar Contrista
                     </h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>

                  <div class="modal-body">
                     <div class="form-group">
                        <label for="">Nombre</label>
                        <input
                           className="form-control"
                           id="business_name"
                           value={c && c.business_name}
                           onChange={cambiarvalor}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                           Nombre del contratista
                        </small>
                     </div>

                     <div class="form-group">
                        <label for="">RUC</label>
                        <input className="form-control" id="ruc" disabled value={c && c.ruc} />
                        <small id="emailHelp" className="form-text text-muted">
                           RUC
                        </small>
                     </div>

                     <div class="form-group">
                        <label for="">Descripción</label>
                        <input
                           className="form-control"
                           id="description"
                           value={c && c.description}
                           onChange={cambiarvalor}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                           Descripción
                        </small>
                     </div>
                  </div>

                  <div class="modal-footer">
                     <button onClick={actualizarContratista} type="button" class="btn btn-primary">
                        Actualizar
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/*TERMINA MODAL*/}
      </>
   )
}
