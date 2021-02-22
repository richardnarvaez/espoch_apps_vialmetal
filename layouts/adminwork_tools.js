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

    return (
        <div className="row"> {/*HERRAMIENTAS*/}
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
                                <CardW data={item} onClick={setListado} />
                            </>
                        )
                    })
                )}
        </div>
    )
}