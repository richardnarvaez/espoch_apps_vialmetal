import { useState, useEffect } from 'react'

import CardW from '../components/card_work'

export default function AdminWorkMaterial() {


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

    return (

        <div className="row"> {/*HERRAMIENTAS*/}
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
                                <CardW data={item}  />
                            </>
                        )
                    })
                )}
        </div>

    )
}