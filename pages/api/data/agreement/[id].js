import { getSession } from 'next-auth/client'
import { getAllAgreements, getAgreementById } from '../../../../controllers/agreement'


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

                    const result = await getAllAgreements()
                    res.status(200).json(result)

                } else {

                    const result = await getAgreementById(id)
                    res.status(200).json(result)
                }
            } catch (err) {
                res.status(500).json({ success: false, error: err })
            }
            break

        case 'PUT': /*Actulizar */

            break

        case 'POST': /*Insert*/  /*O CUALQUIER ACCION secreta*/

            break

        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

