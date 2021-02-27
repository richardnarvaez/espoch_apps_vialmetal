import { getSession } from 'next-auth/client'
import { 
    getAllWork_Tools, 
    getWork_ToolById, 
    insertWork_Tool, 
    updateWork_Tool, 
    deleteWork_Tool, 
    getToolUsedWork } from '../../../../controllers/work_tools'


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
                    result = await getAllWork_Tools()
                    res.status(200).json(result)
                    break
                case 'used':
                    result = await getToolUsedWork(id[1])
                    res.status(200).json(result)
                    break
                default:
                    result = await getWork_ToolById(id[0])
                    res.status(200).json(result)
                    break
                }
            } catch (err) {
                res.status(500).json({ success: false, error: err, llego: true })
            }
            break


        case 'PUT': /*Actulizar */
            try {
                const result = await updateWork_Tool(id,body)
                res.status(200).json(result)
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'POST': /*Insert*/  /*O CUALQUIER ACCION secreta*/
            try {
                const result = await insertWork_Tool(body)
                res.status(200).json(result)
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'DELETE':
            try{
                const result = await deleteWork_Tool(id)
                res.status(200).json(result)
            }catch{
                res.status(500).json({ success: false, error: err })
            }
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}