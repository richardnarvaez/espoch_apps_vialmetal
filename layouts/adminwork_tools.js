import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import CardW from '../components/card_work'

export default function AdminWorkTool({ updateTools }) {
   const { query } = useRouter()
   const id = query.id

   const [transport, settransport] = useState()

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/api/data/tool/all')
         const result = await res.json()
         settransport(result)
      }
      fetchData()
   }, [])

   const insertarTool = (id_tool) => {
      const tool = {
         id_work: id,
         id_tool: id_tool,
         tool_begin: 1,
         tool_end: 0,
      }

      console.log(tool)

      fetch('/api/data/work_tool/null', {
         method: 'POST',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(tool),
      })
         .then((response) => {
            if (response) {
               console.log(response)
               updateTools()
            }
         })
         .catch(function (error) {
            console.log('Request failed', error)
         })
   }

   return (
      <div className="row p-4" style={{ height: '57vh', overflowY: 'scroll', minHeight: 0 }}>
         {' '}
         {/*HERRAMIENTAS*/}
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
