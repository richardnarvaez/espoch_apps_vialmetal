import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import Footer from '../../components/footer'
import Inicio from '../../components/Inicio'

export default function Editar() {
   const [session, sessionLoading] = useSession()
   
   const [data, setData] = useState({})
   const [data_final, setDataF] = useState({})

   const { query } = useRouter()
   const id = query.id

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      if (id) {
         if (id[1] == 'M') {
            fetch('/api/data/material/' + id[0])
               .then((res) => res.json())
               .then((result) => {
                  setData(result[0])
                  setDataF(result[0])
               })
               .catch((e) => {
                  console.log('ERRPR: >>>>', e)
               })
         } else if (id[1] == 'V') {
            fetch('/api/data/vehicle/' + id[0])
               .then((res) => res.json())
               .then((result) => {
                  setData(result[0])
                  setDataF(result[0])
               })
               .catch((e) => {
                  console.log('ERRPR: >>>>', e)
               })
         } else if (id[1] == 'T') {
            fetch('/api/data/tool/' + id[0])
               .then((res) => res.json())
               .then((result) => {
                  setData(result[0])
                  setDataF(result[0])
               })
               .catch((e) => {
                  console.log('ERRPR: >>>>', e)
               })
         }
      }
   }, [id])

   function cambiarvalor(e) {
      setDataF({ ...data_final, [e.target.id]: e.target.value })
   }

   const igual = JSON.stringify(data) == JSON.stringify(data_final)

   const actualizarInventario = () => {
      if (id[1] == 'M') {
         updatePUT('material')
      } else if (id[1] == 'V') {
         updatePUT('vehicle')
      } else if (id[1] == 'T') {
         updatePUT('tool')
      }
   }

   const updatePUT = (type) => {
      fetch('/api/data/' + type + '/' + id[0], {
         method: 'PUT',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data_final),
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
   if (!data) {
      return <h1>Cargando...</h1>
   }
   return (
      <>
         {!session && !sessionLoading && (
            <h1>Acceso Denegado - No puede acceder al contendio de esta página</h1>
         )}
         {/* !session.user?.roles?.includes('Verified') */}
         {session && !sessionLoading && (
            <>
               <div>
                  <Inicio />
                  <div
                     className="d-flex container"
                     style={{ alignItems: 'center', justifyContent: 'center', height: '100vh' }}
                  >
                     <div
                        align="middle"
                        className="row"
                        style={{
                           border: 'solid 1px #ececec',
                           borderRadius: 12,
                           padding: 16,
                           width: '100%',
                           justifyItems: 'center',
                        }}
                     >
                        {id &&
                           (id[1] == 'M' ? (
                              <TarjetaMaterial data={data_final} cambiarvalor={cambiarvalor} />
                           ) : id[1] == 'V' ? (
                              <Tarjetavehicle data={data_final} cambiarvalor={cambiarvalor} />
                           ) : id[1] == 'T' ? (
                              <TarjetaTool data={data_final} cambiarvalor={cambiarvalor} />
                           ) : null)}
                        <br />
                        {!igual ? <button onClick={actualizarInventario}>Guardar</button> : null}
                     </div>
                  </div>
                  <Footer />
               </div>
            </>
         )}
      </>
   )
}

function TarjetaMaterial({ data, cambiarvalor }) {
   return (
      <>
         <div className="col-12 col-sm-5 col-md-4">
            <img src={data.image} style={{ width: 150, objectFit: 'cover' }} />
         </div>

         <div align="middle" className="details-transport col-12 col-sm-7 col-md-8">
            <p>Nombre</p>
            <input id="name" className="form-control" value={data.name} onChange={cambiarvalor}  />
            <small id="emailHelp" class="form-text text-muted">
               Nombre del material
            </small>
            <p>Imágen</p>
            <input id="image" className="form-control" value={data.image} onChange={cambiarvalor} />
            <small id="emailHelp" class="form-text text-muted">
               Url de la imágen
            </small>
            <p>Cantidad</p>
            <input
               id="quantity"
               className="form-control"
               value={data.quantity}
               onChange={cambiarvalor}
               required pattern="[0-9]"
            />
            <small id="emailHelp" class="form-text text-muted">
               Cantidad en litros
            </small>
            <p>Precio </p>
            <input
               id="price_liter"
               className="form-control"
               value={data.price_liter}
               onChange={cambiarvalor}
               required pattern="[0-9]"
            />
            <small id="emailHelp" class="form-text text-muted">
               Precio por litro
            </small>
            <p></p>
         </div>
      </>
   )
}

function TarjetaTool({ data, cambiarvalor }) {
   return (
      <>
         <div className="col-12 col-sm-5 col-md-4">
            <img src={data.image} style={{ width: 150, objectFit: 'cover' }} />
         </div>

         <div align="middle" className="details-transport col-12 col-sm-7 col-md-8">
            <p>Nombre</p>
            <input id="name" className="form-control" value={data.name} onChange={cambiarvalor} />
            <small id="emailHelp" class="form-text text-muted">
               Nombre de Herramienta
            </small>
            <p>Imágen</p>
            <input id="image" className="form-control" value={data.image} onChange={cambiarvalor} />
            <small id="emailHelp" class="form-text text-muted">
               Url de la imágen
            </small>
            <p>Cantidad</p>
            <input
               id="quantity"
               className="form-control"
               value={data.quantity}
               onChange={cambiarvalor}
               required pattern="[0-9]"
            />
            <small id="emailHelp" class="form-text text-muted">
               Cantidad de Herramientas
            </small>
            <p>Precio</p>
            <input
               id="price_use"
               className="form-control"
               value={data.price_use}
               onChange={cambiarvalor}
               required pattern="[0-9]"
            />
            <small id="emailHelp" class="form-text text-muted">
               Precio por desgaste
            </small>
            <p></p>
         </div>
      </>
   )
}

function Tarjetavehicle({ data, cambiarvalor }) {
   return (
      <>
         <div className="col-12 col-sm-5 col-md-4">
            <img src={data.image} style={{ width: 150, objectFit: 'cover' }} />
         </div>

         <div align="middle" className="details-transport col-12 col-sm-7 col-md-8">
            <p>Nombre</p>
            <input id="name" className="form-control" value={data.name} onChange={cambiarvalor} />
            <small id="emailHelp" class="form-text text-muted">
               Nombre del Vehículo
            </small>
            <p>Imágen</p>
            <input id="image" className="form-control" value={data.image} onChange={cambiarvalor} />
            <small id="emailHelp" class="form-text text-muted">
               Url de la imágen
            </small>
            <p>Placa</p>
            <input
               id="license"
               className="form-control"
               value={data.license}
               onChange={cambiarvalor}
            />
            <small id="emailHelp" class="form-text text-muted">
               Nombre de la placa
            </small>
            <p>Kilometraje</p>
            <input
               id="mileage"
               className="form-control"
               value={data.mileage}
               onChange={cambiarvalor}
            />
            <small id="emailHelp" class="form-text text-muted">
               Cantidad de Kilometros recorridos
            </small>
            <p>Precio por kilometro</p>
            <input
               id="price_km"
               className="form-control"
               value={data.price_km}
               onChange={cambiarvalor}
            />
            <small id="emailHelp" class="form-text text-muted">
               Precio por litro
            </small>
            <p></p>
         </div>
      </>
   )
}
