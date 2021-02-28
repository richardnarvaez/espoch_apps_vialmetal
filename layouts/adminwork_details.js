import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Input } from '@material-ui/core'

export default function AdminWorkDetails() {
   // VARIABLES "ESTADO"
   const [contractor, setContractor] = useState()
   const [details, setDetails] = useState()
   const [error, setError] = useState(false)

   const { query } = useRouter()
   const id = query.id

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      fetch('/api/data/work/' + id)
         .then((res) => res.json())
         .then((result) => {
            setDetails(result[0])
            console.log(result)
            fetch('/api/data/contractor/' + result[0].id_contractor)
               .then((res) => res.json())
               .then((result) => {
                  setContractor(result[0])
               })
               .catch((e) => {
                  console.log('ERRPR: >>>>', e)
               })
         })
         .catch((e) => {
            console.log('ERRPR: >>>>', e)
         })
   }, [id])

   function cambiarvalor(e) {
      setDetails({ ...details, [e.target.id]: e.target.value })
   }

   function getDetails(e) {
      e.preventDefault()
      console.log(details)
      fetch('/api/data/work/' + id, {
         method: 'PUT',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(details),
      })
         .then((response) => {
            if (response) {
               console.log(response)
               alert('Se actualizó correctamente')
            }
         })
         .catch(function (error) {
            console.log('Request failed', error)
         })
   }

   if (!contractor) return <h1>Cargando..</h1>

   return (
      <form
         id="form-details"
         className="p-4"
         onSubmit={(event) => getDetails(event)}
         style={{ height: '57vh', overflowY: 'scroll', minHeight: 0 }}
      >
         <div className="form-group">
            <label for="exampleInputEmail1">
               Contratista: <strong>{contractor ? contractor.business_name : 'Cargando...'}</strong>{' '}
            </label>
         </div>

         <div className="form-group">
            <label for="exampleInputEmail1">Responsable</label>
            <input
               className="form-control"
               id="responsable"
               onChange={cambiarvalor}
               value={details && details.responsable}
            />
            <small id="emailHelp" className="form-text text-muted">
               Introducir el nombre del responsable
            </small>
         </div>

         <div className="form-group">
            <label for="exampleInputEmail1">Descripción</label>
            <input
               className="form-control"
               id="description"
               onChange={cambiarvalor}
               value={details && details.description}
            />
            <small id="emailHelp" className="form-text text-muted">
               Ej. Asfaltado 10km via GUANO
            </small>
         </div>
         <div className="form-group">
            <label for="exampleInputEmail1">Ubicación</label>
            <input
               onChange={cambiarvalor}
               className="form-control"
               id="location"
               value={details && details.location}
            />
            <small id="emailHelp" className="form-text text-muted">
               Lugar donde se realizará la obra
            </small>
         </div>
         <button>Actualizar</button>
      </form>
   )
}
