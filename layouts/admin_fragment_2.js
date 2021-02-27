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
                  Vehículos
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
                  <h5> + Material </h5>
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
                  <h5>+ Herramienta</h5>
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
                  <h5>+ Vehiculo</h5>
               </button>

               <div className="div" className="row">
                  <GetInventoryVehicle setListado={setListado} />
               </div>
            </div>
         </div>
      </>
   )
}

function validarHerramienta(name, img, cant, pr){
   if(cant< 0 || pr<0){
      return false;
   }

   if(name=="" || img=="" || cant=="" || pr==""){
      return false;
   }else{
      return true;
   }

   
}

const ModalHeramientas = () => {

   {/*INSERTAR HERRAMIENTA*/ }
   const insertarHerramienta = () => {
      const herramienta = {
         name: document.getElementById('hNombre').value,
         image: document.getElementById('hImagen').value,
         quantity: document.getElementById('hCantidad').value,
         price_use: document.getElementById('hPrecioUso').value,
         status: "T",
      }

      console.log(herramienta)
      if(validarHerramienta(herramienta.name, herramienta.image, herramienta.quantity, herramienta.price_use)){
         fetch('/api/data/tool/null', {
            method: 'post',
            headers: {
               Accept: 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(herramienta),
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
         alert("Verifique que los campos estén correctos y completos")
      }
      
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
                        Nueva Herramienta
                     </h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>

                  <div class="modal-body">
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Nombre
                        </label>
                        <input className="form-control" id="hNombre" />
                        <small id="emailHelp" className="form-text text-muted">
                           Nombre de la herramienta
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Imágen
                        </label>
                        <input className="form-control" id="hImagen" />
                        <small id="emailHelp" className="form-text text-muted">
                           Url de la imágen
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Cantidad
                        </label>
                        <input
                           type="number"
                           class="form-control"
                           id="hCantidad"
                           aria-describedby="emailHelp"
                           min="0"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                           Cantidad
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Precio
                        </label>
                        <input type="number" className="form-control" id="hPrecioUso" />
                        <small id="emailHelp" className="form-text text-muted">
                           Precio por uso
                        </small>
                     </div>
                  </div>

                  <div class="modal-footer">
                     <button onClick={insertarHerramienta} type="button" class="btn btn-primary">
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

function validarMaterial(name, img, cant, pr){

   if(cant<0 || pr<0){
      return false;
   }

   if(name=="" || img=="" || cant=="" || pr==""){
      return false;
   }else{
      return true;
   }
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

      if(validarMaterial(material.name, material.image, material.quantity, material.price_liter)){
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
      }else{
         alert("Verifique que los campos estén correctos y completos")
      }

      

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
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Nombre
                        </label>
                        <input className="form-control" id="mNombre" />
                        <small id="emailHelp" className="form-text text-muted">
                           Nombre del material
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Imágen
                        </label>
                        <input className="form-control" id="mImagen" />
                        <small id="emailHelp" className="form-text text-muted">
                           Url de la imágen
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Cantidad
                        </label>
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
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Precio
                        </label>
                        <input type="number" className="form-control" id="mPrecioLitro" />
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

function validarVehiculo(placa,name, img, km, pr){
   if(km<0 || pr <0){
      return false;
   }

   if(placa=="" || name=="" || img=="" || km=="" || pr==""){
      return false;
   }else{
      return true;
   }

   
}

const ModalVehiculo = () => {

      {/*INSERTAR VEHICULO*/ }
      const insertarVehiculo = () => {
         const vehiculo = {
            license: document.getElementById('vPlaca').value,
            name: document.getElementById('vNombre').value,
            image: document.getElementById('vImagen').value,
            mileage: document.getElementById('vKm').value,
            price_km: document.getElementById('vPrecioUso').value,
            status: "T",
         }
   
         

         if(validarVehiculo(vehiculo.license, vehiculo.name, vehiculo.image, vehiculo.mileage, vehiculo.price_km)){
            fetch('/api/data/vehicle/null', {
               method: 'post',
               headers: {
                  Accept: 'application/json, text/plain, */*',
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(vehiculo),
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
            alert("Verifique que los campos estén correctos y completos")
         }

         
      }

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
                        Nuevo Vehículo
                     </h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Placa
                        </label>
                        <input className="form-control" id="vPlaca" />
                        <small id="emailHelp" className="form-text text-muted">
                           Placa del Vehículo
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Nombre
                        </label>
                        <input className="form-control" id="vNombre" />
                        <small id="emailHelp" className="form-text text-muted">
                           Nombre del Vehículo
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Imágen
                        </label>
                        <input className="form-control" id="vImagen" />
                        <small id="emailHelp" className="form-text text-muted">
                           Url de la imágen
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Kilometraje
                        </label>
                        <input
                           type="number"
                           class="form-control"
                           id="vKm"
                           aria-describedby="emailHelp"
                           min="0"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                           Cantidad de km recorridos
                        </small>
                     </div>
                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>Precio
                        </label>
                        <input type="number" className="form-control" id="vPrecioUso" />
                        <small id="emailHelp" className="form-text text-muted">
                           Precio por km
                        </small>
                     </div>
                  </div>

                  <div class="modal-footer">
                     <button onClick={insertarVehiculo} type="button" class="btn btn-primary">
                        Guardar Vehículo
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/*TERMINA MODAL*/}
      </>
   )
}
