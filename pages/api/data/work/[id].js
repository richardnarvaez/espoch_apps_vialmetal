import { getSession } from 'next-auth/client'
import { getAllWorks, getWorkById, insertWork, updateWork, deleteWork } from '../../../../controllers/work'


export default async (req, res) => {

    const {
        body,
        query: { id, name },
        method,
    } = req

    switch (method) {
        case 'GET': /*SELECT*/

            try {
                if (id == "all") {

                    const result = await getAllWorks()
                    res.status(200).json(result)

                } else {

                    const result = await getWorkById(id)
                    res.status(200).json(result)
                }
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'PUT': /*Actulizar */
            try {
                const result = await updateWork(id,body)
                res.status(200).json(body)
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'POST': /*Insert*/  /*O CUALQUIER ACCION secreta*/
            try {
                const result = await insertWork(body)
                res.status(200).json(body)
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'DELETE':
            try{
                const result = await deleteWork(id)
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