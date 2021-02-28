import { useState, useEffect } from 'react'
import CardInventory from '../components/card_inventory'

export default function GetInventoryVehicle({ setListado }) {
   const [inventary, setInventary] = useState()

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/api/data/vehicle/all')
         const result = await res.json()
         setInventary(result)
      }
      fetchData()
   }, [])

   return (
      <div className="row">
         {' '}
         {/*VEHICULOS*/}
         {!inventary ? (
            <>
               <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
               </div>
            </>
         ) : (
            inventary.map((item, i) => {
               return (
                  <>
                     <CardInventory data={item} href={'/editar/' + item.id_vehicle + '/V'} />
                  </>
               )
            })
         )}
      </div>
   )
}
