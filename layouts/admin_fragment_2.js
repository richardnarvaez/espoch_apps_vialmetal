import CardInventory from '../components/card_inventory'

import GetInventoryMaterial from '../layouts/inventory_materials'
import GetInventoryTool from '../layouts/inventory_tools'
import GetInventoryVehicle from '../layouts/inventory_vehicles'

import NewMaterial from '../layouts/inventory_materials'

export default function AdminF2() {
   const setListado = (a) => {
      setList((old) => [...old, a])
   }

   return (
      <>
         <h1>Inventario</h1>

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
         <div className="tab-content" id="pills-tabContent">
            <div
               className="tab-pane fade show active"
               id="pills-home"
               role="tabpanel"
               aria-labelledby="pills-home-tab"
            >
               <a className="bt-new-work" data-toggle="modal" data-target="#exampleModal">
                  <h5>+ Material</h5>
               </a>
               {/*INICIA MODAL*/}
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
                              Modal title
                           </h5>
                           <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                           >
                              <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal">
                              Close
                           </button>
                           <button type="button" class="btn btn-primary">
                              Save changes
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               {/*TERMINA MODAL*/}

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
               <a className="bt-new-work" data-toggle="modalOne" data-target="#exampleModalOne">
                  <h5>+ Material</h5>
               </a>
               {/*INICIA MODAL*/}
               <div
                  class="modal fade"
                  id="exampleModalOne"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabelOne"
                  aria-hidden="true"
               >
                  <div class="modal-dialog">
                     <div class="modal-content">
                        <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLabelOne">
                              Modal title
                           </h5>
                           <button
                              type="button"
                              class="close"
                              data-dismiss="modalOne"
                              aria-label="Close"
                           >
                              <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modalOne">
                              Close
                           </button>
                           <button type="button" class="btn btn-primary">
                              Save changes
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               {/*TERMINA MODAL*/}
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
               <a className="bt-new-work" data-toggle="modal2" data-target="#exampleModal2">
                  <h5>+ Material</h5>
               </a>
               {/*INICIA MODAL*/}
               <div
                  class="modal fade"
                  id="exampleModal2"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel2"
                  aria-hidden="true"
               >
                  <div class="modal-dialog">
                     <div class="modal-content">
                        <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLabel2">
                              Modal title
                           </h5>
                           <button
                              type="button"
                              class="close"
                              data-dismiss="modal2"
                              aria-label="Close"
                           >
                              <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal2">
                              Close
                           </button>
                           <button type="button" class="btn btn-primary">
                              Save changes
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               {/*TERMINA MODAL*/}

               <div className="div" className="row">
                  <GetInventoryVehicle setListado={setListado} />
               </div>
            </div>
         </div>
      </>
   )
}
