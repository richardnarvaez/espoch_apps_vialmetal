import { getSession } from 'next-auth/client'
import { getAllUsers, getUserById, updateUserRole } from '../../../../controllers/users'

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

               const result = await getAllUsers()
               res.status(200).json(result)

            } else {

               const result = await getUserById(id)
               res.status(200).json(result)
            }
         } catch (err) {
            res.status(500).json({ success: false, error: err })
         }

         break

      case 'PUT': /*Actualizar */
         
         try {
            const result = await updateUserRole(id,body)
            res.status(200).json(body)
         } catch (err) {
            res.status(500).json({ success: false, error: err })
         }

         break

      default:
         res.setHeader('Allow', ['GET', 'PUT'])
         res.status(405).end(`Method ${method} Not Allowed`)
   }
}


