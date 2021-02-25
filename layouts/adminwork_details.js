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
   return (
      <form id="form-details" onSubmit={(event) => getDetails(event)}>
         <div className="form-group">
            <label for="exampleInputEmail1">
               Contratista: <strong>{contractor ? contractor.business_name : '...'}</strong>{' '}
            </label>
         </div>

         <div className="form-group">
            <label for="exampleInputEmail1">Responsable</label>
            <input className="form-control" id="descripcion" value={details&&details.responsable}/>
            <small id="emailHelp" className="form-text text-muted">
               Introducir el nombre del responsable
            </small>
         </div>

         <div className="form-group">
            <label for="exampleInputEmail1">Descripcion</label>
            <Input className="form-control" id="descripcion" />
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
   )
}
