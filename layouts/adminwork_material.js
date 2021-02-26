import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import CardW from '../components/card_work'

export default function AdminWorkMaterial({ updateMaterials }) {
   // RUTAS
   const { query } = useRouter()
   const id = query.id

   // VARIABLES "ESTADO"
   const [material, setMaterial] = useState()
   const [error, setError] = useState(false)

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      fetch('/api/data/material/all')
         .then((res) => res.json())
         .then((result) => {
            setMaterial(result)
         })
         .catch((e) => {
            console.log('ERRPR: >>>>', e)
         })
   }, [])

   const insertarMaterial = (id_mat) => {
      const material = {
         id_work: id,
         id_material: id_mat,
         material_begin: 1,
         material_end: 0,
      }

      console.log(material)

      fetch('/api/data/work_material/null', {
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
         {/*HERRAMIENTAS*/}
         {!material ? (
            <>
               <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
               </div>
            </>
         ) : (
            material.map((item, i) => {
               return (
                  <>
                     <CardW data={item} onClick={() => insertarMaterial(item.id_material)} />
                  </>
               )
            })
         )}
      </div>
   )
}
