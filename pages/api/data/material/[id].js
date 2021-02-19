import { getSession } from 'next-auth/client'
import { getAllMaterials, getMaterialById, insertMaterial, updateMaterial, deleteMaterial } from '../../../../controllers/material'


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

                    const result = await getAllMaterials()
                    res.status(200).json(result)

                } else {

                    const result = await getMaterialById(id)
                    res.status(200).json(result)
                }
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'PUT': /*Actulizar */
            try {
                const result = await updateMaterial(id,body)
                res.status(200).json(body)
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'POST': /*Insert*/  /*O CUALQUIER ACCION secreta*/
            try {
                const result = await insertMaterial(body)
                res.status(200).json(body)
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'DELETE':
            try{
                const result = await deleteMaterial(id)
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