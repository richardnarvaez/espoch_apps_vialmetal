import CardInventory from '../components/card_inventory'

import GetInventoryMaterial from '../layouts/inventory_materials'
import GetInventoryTool from '../layouts/inventory_tools'
import GetInventoryVehicle from '../layouts/inventory_vehicles'

export default function AdminF2() {
   const setListado = (a) => {
      setList((old) => [...old, a])
   }

   return (
      <>
         <h1>Inventario</h1>

         <ModalHeramientas />
         <ModalMaterial />
         <ModalVehiculo />

         <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
               <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
               >
                  Materiales
               </a>
            </li>
            <li className="nav-item">
               <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
               >
                  Herramientas
               </a>
            </li>
            <li className="nav-item">
               <a
                  className="nav-link"
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
               >
                  Vehiculos
               </a>
            </li>
         </ul>

         {/*CONTENIDO*/}
         <div className="tab-content" id="pills-tabContent">
            <div
               className="tab-pane fade show active"
               id="pills-home"
               role="tabpanel"
               aria-labelledby="pills-home-tab"
            >
               <button className="bt-new-work" data-toggle="modal" data-target="#exampleModal">
                  {' '}
                  <h5> +Material </h5>
               </button>

               <div className="div" className="row">
                  <GetInventoryMaterial setListado={setListado} />
               </div>
            </div>

            <div
               className="tab-pane fade"
               id="pills-profile"
               role="tabpanel"
               aria-labelledby="pills-profile-tab"
            >
               <button className="bt-new-work" data-toggle="modal" data-target="#exampleModal2">
                  {' '}
                  <h5>+Tool</h5>
               </button>

               <div className="div" className="row">
                  <GetInventoryTool setListado={setListado} />
               </div>
            </div>
            <div
               className="tab-pane fade"
               id="pills-contact"
               role="tabpanel"
               aria-labelledby="pills-contact-tab"
            >
               <button className="bt-new-work" data-toggle="modal" data-target="#exampleModal3">
                  {' '}
                  <h5>+Coche</h5>
               </button>

               <div className="div" className="row">
                  <GetInventoryVehicle setListado={setListado} />
               </div>
            </div>
         </div>
      </>
   )
}

const ModalHeramientas = () => {

   {/*INSERTAR HERRAMIENTA*/ }
   const insertarHerramienta = () => {
      const material = {
         name: document.getElementById('mNombre').value,
         image: document.getElementById('mImagen').value,
         quantity: document.getElementById('mCantidad').value,
         price_liter: document.getElementById('mPrecioLitro').value,
      }

      fetch('/api/data/tool/null', {
         method: 'post',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(material),
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
         {/*INICIA MODAL HERRAMIENTA*/}
         <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabelOne"
            aria-hidden="true"
         >
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">
                        Nueva Herrameinta
                     </h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>

                  <div class="modal-body">
                     <div class="form-group">
                        <label for="">Nombre</label>
                        <input className="form-control" id="location" />
                        <small id="emailHelp" className="form-text text-muted">
                           Nombre de la herramienta
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Imagen</label>
                        <input className="form-control" id="location" />
                        <small id="emailHelp" className="form-text text-muted">
                           Url de la imagen
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Cantidad</label>
                        <input
                           type="number"
                           class="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           min="0"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                           Cantidad
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Precio</label>
                        <input className="form-control" id="location" />
                        <small id="emailHelp" className="form-text text-muted">
                           Precio por uso
                        </small>
                     </div>
                  </div>

                  <div class="modal-footer">
                     <button type="button" class="btn btn-primary">
                        Guardar Herramienta
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/*TERMINA MODAL*/}
      </>
   )
}

const ModalMaterial = () => {

   {/*INSERTAR MATERIAL*/ }
   const insertarMaterial = () => {
      const material = {
         name: document.getElementById('mNombre').value,
         image: document.getElementById('mImagen').value,
         quantity: document.getElementById('mCantidad').value,
         price_liter: document.getElementById('mPrecioLitro').value,
      }

      fetch('/api/data/material/null', {
         method: 'post',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(material),
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
         {' '}
         {/*INICIA MODAL --MATERIALES--*/}
         <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">
                        Nuevo Material
                     </h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <div class="form-group">
                        <label for="">Nombre</label>
                        <input className="form-control" id="mNombre" />
                        <small id="emailHelp" className="form-text text-muted">
                           Nombre del material
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Imagen</label>
                        <input className="form-control" id="mImagen" />
                        <small id="emailHelp" className="form-text text-muted">
                           Url de la imagen
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Cantidad</label>
                        <input
                           type="number"
                           class="form-control"
                           id="mCantidad"
                           aria-describedby="emailHelp"
                           min="0"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                           Cantidad en litros
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Precio</label>
                        <input className="form-control" id="mPrecioLitro" />
                        <small id="emailHelp" className="form-text text-muted">
                           Precio por litro
                        </small>
                     </div>
                  </div>

                  <div class="modal-footer">
                     <button onClick={insertarMaterial} type="button" class="btn btn-primary">
                        Guardar Material
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/*TERMINA MODAL*/}
      </>
   )
}
const ModalVehiculo = () => {
   return (
      <>
         {' '}
         {/*INICIA MODAL --VEHICULO--*/}
         <div
            class="modal fade"
            id="exampleModal3"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">
                        Nuevo Vehiculo
                     </h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <div class="form-group">
                        <label for="">Placa</label>
                        <input className="form-control" id="location" />
                        <small id="emailHelp" className="form-text text-muted">
                           Placa del Vehiculo
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Nombre</label>
                        <input className="form-control" id="location" />
                        <small id="emailHelp" className="form-text text-muted">
                           Nombre del Vehiculo
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Imagen</label>
                        <input className="form-control" id="location" />
                        <small id="emailHelp" className="form-text text-muted">
                           Url de la imagen
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Kilometraje</label>
                        <input
                           type="number"
                           class="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           min="0"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                           Cantidad de km recorridos
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">Precio</label>
                        <input className="form-control" id="location" />
                        <small id="emailHelp" className="form-text text-muted">
                           Precio por km
                        </small>
                     </div>
                  </div>

                  <div class="modal-footer">
                     <button type="button" class="btn btn-primary">
                        Guardar Vehiculo
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/*TERMINA MODAL*/}
      </>
   )
}
