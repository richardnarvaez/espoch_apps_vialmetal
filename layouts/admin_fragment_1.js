import { useState, useEffect } from 'react'
import Link from 'next/link'

import Card from '../components/card'

export default function AdminF1() {

   // VARIABLES "ESTADO"
   const [list_obras, setListObras] = useState()

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      fetch('/api/data/work/all')
         .then(res => res.json())
         .then(result => setListObras(result))
   }, [])

   return (
      <>
         <a className="bt-new-work" href="/adminwork">
            <h5>Nueva Obra</h5>
         </a>

         <div className="list-combo">
            <div className="dropdown show combobox">
               <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
               >
                  Ordenar
               </a>

               <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">
                     A-Z
                  </a>
                  <a className="dropdown-item" href="#">
                     Z-A
                  </a>
                  <a className="dropdown-item" href="#">
                     Actual-Antiguo
                  </a>
                  <a className="dropdown-item" href="#">
                     Antiguo-Actual
                  </a>
               </div>
            </div>
            <div className="combobox">
               <a
                  className="btn btn-secondary"
               >
                  Activo
               </a>
            </div>
         </div>

         <div className="div" className="row">
            {
               !list_obras ? (<>CARGANDO DATO...</>) :
                  list_obras.map((item, i) => {
                     return (
                        <Card key={i} data={item} href={"/details/" + item.id_work} />
                     )
                  })
            }
         </div>

      </>
   )
}
