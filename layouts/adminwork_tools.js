import { useState, useEffect } from 'react'
import CardW from '../components/card_work'

export default function AdminWorkTool({setListado }) {

    const [transport, settransport] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/data/tool/all')
            const result = await res.json()
            settransport(result)
        }
        fetchData()
    }, [])

    const insertarTool = (id_mat) => {

        const material = {
           id_work: id,
           id_tool: id_mat,
           material_begin: 1,
           material_end: 0,
        }
  
        console.log(material)
  
        fetch('/api/data/work_tool/null', {
           method: 'POST',
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
        <div className="row" style={{ height: '57vh', overflowY: 'scroll', minHeight: 0 }}> {/*HERRAMIENTAS*/}
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
                                <CardW data={item} onClick={() => insertarTool(item.id_tool)} />
                            </>
                        )
                    })
                )}
        </div>
    )
}