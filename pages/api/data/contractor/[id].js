import { getSession } from 'next-auth/client'
import { getAllContractors, getContractorById, insertContractor } from '../../../../controllers/contractor'


export default async (req, res) => {

    const {
        body,
        query: {id},
        method,
    } = req
    
    switch (method) {
        case 'GET': /*SELECT*/

            try {
                if (id == "all") {

                    const result = await getAllContractors()
                    res.status(200).json(result)

                } else {

                    const result = await getContractorById(id)
                    res.status(200).json(result)
                }
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'PUT': /*Actulizar */
            
            break

        case 'POST': /*Insert*/  /*O CUALQUIER ACCION secreta*/
            console.log(body);
            try{
                const result = await insertContractor(body)
                res.status(200).json(result)
            }catch(err){
                res.status(500).json({ success: false, error: err })
            }
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

