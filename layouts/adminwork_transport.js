import { useState, useEffect } from 'react'
import CardW from '../components/card_work'

export default function AdminWorkTransport({ setListado }) {
   const [transport, settransport] = useState()

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/api/data/vehicle/all')
         const result = await res.json()
         settransport(result)
      }
      fetchData()
   }, [])

   const insertarTransport = (id_mat) => {
      const material = {
         id_work: id,
         id_material: id_mat,
         material_begin: 1,
         material_end: 0,
      }

      console.log(material)

      fetch('/api/data/work_vehiclel/null', {
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
               updateMaterials()
            }
         })
         .catch(function (error) {
            console.log('Request failed', error)
         })
   }

   return (
      <div className="row" style={{ height: '57vh', overflowY: 'scroll', minHeight: 0 }}>
         {' '}
         {/*TRANSPORTE*/}
         {!transport ? (
            <>
               <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
               </div>
            </>
         ) : (
            transport.map((item, i) => {
               return (
                  <>
                     <CardW data={item} onClick={() => insertarTransport(item.id_vehicle)} />
                  </>
               )
            })
         )}
      </div>
   )
}
