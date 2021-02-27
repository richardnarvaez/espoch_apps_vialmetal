import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import CardW from '../components/card_work'

export default function AdminWorkTransport({ updateTransport }) {
   const { query } = useRouter()
   const id = query.id
   const [transport, settransport] = useState()

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/api/data/vehicle/all')
         const result = await res.json()
         settransport(result)
      }
      fetchData()
   }, [])

   const insertarTransport = (id_veh) => {
      const vehicle = {
         id_work: id,
         id_vehicle: id_veh,
         km_begin: 1,
         km_end: 0,
      }

      console.log(vehicle)

      fetch('/api/data/work_vehicle/null', {
         method: 'post',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(vehicle),
      })
         .then((response) => {
            if (response) {
               console.log(response)
               updateTransport()
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
