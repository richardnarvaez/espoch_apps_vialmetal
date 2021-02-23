import { useState, useEffect } from 'react'
import CardInventory from '../components/card_inventory'

export default function GetInventoryTool({setListado }) {

    const [inventary, setInventary] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/data/tool/all')
            const result = await res.json()
            setInventary(result)
        }
        fetchData()
    }, [])

    return (
        <div className="row"> {/*MATERIALES*/}
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
                                <CardInventory data={item} onClick={setListado} />
                            </>
                        )
                    })
                )}
        </div>
    )
}