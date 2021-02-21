import { useState, useEffect } from 'react'
import CardW from '../components/card_work'


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
                     <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                           <a
                              class="nav-link active"
                              id="pills-home-tab"
                              data-toggle="pill"
                              href="#pills-home"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                           >
                              Transporte
                           </a>
                        </li>
                        <li class="nav-item">
                           <a
                              class="nav-link"
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
                        <li class="nav-item">
                           <a
                              class="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-contact"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                           >
                              Detalles
                           </a>
                        </li>
                     </ul>
                     <div class="tab-content" id="pills-tabContent">
                        <div
                           class="tab-pane fade show active"
                           id="pills-home"
                           role="tabpanel"
                           aria-labelledby="pills-home-tab"
                        >
                           <div class="row">
                              {!users ? (
                                 <>
                                    <div class="spinner-border" role="status">
                                       <span class="sr-only">Loading...</span>
                                    </div>
                                 </>
                              ) : (
                                 
                                 users.map((item, i) => {
                                    return (
                                       <>
                                          <CardW data={item} onClick={setListado} />
                                       </>
                                    )
                                 })
                              )}
                           </div>
                        </div>
                        <div
                           class="tab-pane fade"
                           id="pills-profile"
                           role="tabpanel"
                           aria-labelledby="pills-profile-tab"
                        >
                           ...
                        </div>
                        <div
                           class="tab-pane fade"
                           id="pills-contact"
                           role="tabpanel"
                           aria-labelledby="pills-contact-tab"
                        >
                           ...
                        </div>
                     </div>
                  </div>
                  
               </div>

               <div className="list-work">
                  <h2>Lista</h2>
                  <div className="content-list">
                     <div className="item-list">
                        <h5>Transporte</h5>

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
                        <h5>Pintura</h5>
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
                        <h5>Tiñer</h5>
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
                     <button class="" type="button">
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
