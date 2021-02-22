import { useState, useEffect } from 'react'
import CardW from '../components/card_work'

import AdminWorkTransport from '../layouts/adminwork_transport'
import AdminWorkTool from '../layouts/adminwork_tools'
import AdminWorkDetails from '../layouts/adminwork_details'
import AdminWorkMaterial from '../layouts/adminwork_material'


export default function Admin() {
   const [users, setUsers] = useState()
   const [list, setList] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/api/data/vehicle/all')
         const result = await res.json()
         setUsers(result)
      }
      fetchData()
   }, [])

   const setListado = (a) => {
      setList((old) => [...old, a])
   }
 
   return (
      <>
         <div className="body-adminwork">

            <h1 className="title-page">Nueva Obra</h1>

            <div className="content-newwork">
               
               <div className="new-work">
                  <h2>Material de trabajo</h2>
                  
                  <div className="work-options">
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
                              Detalles
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
                              Material
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
                              Herrameintas
                           </a>
                        </li>
                        <li className="nav-item">
                           <a
                              className="nav-link"
                              id="pills-transport-tab"
                              data-toggle="pill"
                              href="#pills-transport"
                              role="tab"
                              aria-controls="pills-transport"
                              aria-selected="false"
                           >
                              Transporte
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
                           {/*DETALLES */}
                           <AdminWorkDetails  setListado={setListado}/>
                        </div>

                        <div
                           className="tab-pane fade"
                           id="pills-profile"
                           role="tabpanel"
                           aria-labelledby="pills-profile-tab"
                        >
                           {/*MATERIAL */}
                           <AdminWorkMaterial  setListado={setListado}/> 

                        </div>

                        <div
                           className="tab-pane fade"
                           id="pills-contact"
                           role="tabpanel"
                           aria-labelledby="pills-contact-tab"
                        >
                           {/*HERRAMIENTA */}
                           <AdminWorkTool  setListado={setListado}/> 
                        </div>

                        <div
                           className="tab-pane fade"
                           id="pills-transport"
                           role="tabpanel"
                           aria-labelledby="pills-transport-tab"
                        >
                           {/*TRANSPORTE */}
                           <AdminWorkTransport  setListado={setListado}/>
                        </div>
                     </div>
                  </div>
                  
               </div>
               
               {/*LISTA DE RESUMEN*/}
               <div className="list-work">
                  <h2>Resumen</h2>
                  <div className="content-list">
                     <div className="item-list">
                        <h5>Detalles</h5>

                        {!list ? (
                           <>No hay elementos</>
                        ) : (
                           list.map((item, i) => {
                              return (
                                 <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                                    <p>
                                       <span>
                                          <strong>3</strong>
                                       </span>
                                       Texto de prueba
                                    </p>
                                    <p>12$</p>
                                 </div>
                              )
                           })
                        )}
                     </div>

                     <div className="item-list">
                        <h5>Material</h5>
                        <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                           <p>
                              <span>
                                 <strong>3</strong>
                              </span>
                              Texto de prueba
                           </p>
                           <p>12$</p>
                        </div>
                        <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                           <p>
                              <span>
                                 <strong>3</strong>
                              </span>
                              Texto de prueba
                           </p>
                           <p>12$</p>
                        </div>
                     </div>

                     <div className="item-list">
                        <h5>Herrameintas</h5>
                        <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                           <p>
                              <span>
                                 <strong>3</strong>
                              </span>
                              Texto de prueba
                           </p>
                           <p>12$</p>
                        </div>
                     </div>
                     <div className="item-list">
                        <h5>Transporte</h5>
                        <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                           <p>
                              <span>
                                 <strong>3</strong>
                              </span>
                              Texto de prueba
                           </p>
                           <p>12$</p>
                        </div>
                     </div>
                  </div>

                  <div className="btn-agregar">
                     <button className="" type="button">
                        Crear Obra
                     </button>
                  </div>
                  
               </div>
            </div>
         </div>

         <div className="newwork-footer">

         </div>
      </>
   )
}
