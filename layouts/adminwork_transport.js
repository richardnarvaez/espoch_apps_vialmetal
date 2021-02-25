import { useState, useEffect } from 'react'
import CardW from '../components/card_work'

export default function AdminWorkTransport({setListado }) {

    const [transport, settransport] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/data/vehicle/all')
            const result = await res.json()
            settransport(result)
        }
        fetchData()
    }, [])

    return (
        <div className="row" style={{ height: ' 49vh', overflowY: 'scroll', minHeight: 0 }}> {/*TRANSPORTE*/}
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