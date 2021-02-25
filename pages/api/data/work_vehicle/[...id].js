import { getSession } from 'next-auth/client'
import { 
    getAllWork_Vehicles, 
    getWork_VehicleById, 
    insertWork_Vehicle, 
    updateWork_Vehicle, 
    deleteWork_Vehicle, 
    getVehiclesUsedWork } from '../../../../controllers/work_vehicles'


export default async (req, res) => {

    const {
        body,
        query: { id, name },
        method,
    } = req

    switch (method) {
        case 'GET': /*SELECT*/
            let result

            try {
                switch (id[0]) {
                case 'all':
                    result = await getAllWork_Vehicles()
                    res.status(200).json(result)
                    break
                case 'used':
                    result = await getVehiclesUsedWork(id[1])
                    res.status(200).json(result)
                    break
                default:
                    result = await getWork_VehicleById(id[0])
                    res.status(200).json(result)
                    break
                }
            } catch (err) {
                res.status(500).json({ success: false, error: err, llego: true })
            }
            break

        case 'PUT': /*Actulizar */
            try {
                const result = await updateWork_Vehicle(id,body)
                res.status(200).json(body)
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'POST': /*Insert*/  /*O CUALQUIER ACCION secreta*/
            try {
                const result = await insertWork_Vehicle(body)
                res.status(200).json(body)
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'DELETE':
            try{
                const result = await deleteWork_Vehicle(id)
                res.status(200).json(body)
            }catch{
                res.status(500).json({ success: false, error: err })
            }
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}