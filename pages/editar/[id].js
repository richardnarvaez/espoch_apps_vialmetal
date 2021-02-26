import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../../components/footer'
import Inicio from '../../components/Inicio'

export default function Editar() {
   const [data, setData] = useState({})

   const { query } = useRouter()
   const id = query.id

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      if (id) {
         fetch('/api/data/material/' + id)
            .then((res) => res.json())
            .then((result) => {
               setData(result[0])
            })
            .catch((e) => {
               console.log('ERRPR: >>>>', e)
            })
      }
   }, [id])

   if (!data) {
      return <h1>Cargando...</h1>
   }
   return (
      <div>
         <Inicio />
      <div
         className="d-flex container"
         style={{ alignItems: 'center', justifyContent: 'center', height: '100vh' }}
      >
      
         <div align="middle"
            className="row"
            style={{ border: 'solid 1px #ececec', borderRadius: 12, padding: 16 }}
         >
            <div className="col-12">
               <img src={data.image} />
            </div>
         
            <div align="middle" className="details-transport col-12"  >

               <p>Nombre</p>
               <input className="form-control" value={data.name} />
               <small id="emailHelp" class="form-text text-muted">Nombre del material</small>
               <p>Imágen</p>
               <input className="form-control" value={data.image} />
               <small id="emailHelp" class="form-text text-muted">Url de la imágen</small>
               <p>Cantidad</p>
               <input className="form-control" value={data.quantity} />
               <small id="emailHelp" class="form-text text-muted">Cantidad en litros</small>
               <p>Precio</p>
               <input className="form-control" value={data.price_liter} />
               <small id="emailHelp" class="form-text text-muted">Precio por litro</small>
                <p></p>
                <button>Editar</button>
                
            </div>
      
         </div>
      </div>
      <Footer/>
      </div>
      
   )
}
