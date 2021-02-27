import { getSession } from 'next-auth/client'

import {
   getAllWorks,
   getWorkById,
   insertWork,
   updateWork,
   deleteWork,
   getActiveWorks,
   updateWorkEnd,
   updateWorkUpdate,
} from '../../../../controllers/work'

export default async (req, res) => {
   const {
      body,
      query: { id },
      method,
   } = req

   switch (method) {
      case 'GET' /*SELECT*/:
         let result

         try {
            switch (id[0]) {
               case 'all':
                  result = await getAllWorks()
                  res.status(200).json(result)
                  break

               case 'active':
                  result = await getActiveWorks(id[1])
                  res.status(200).json(result)
                  break
               default:
                  result = await getWorkById(id[0])
                  res.status(200).json(result)
                  break
            }
         } catch (err) {
            res.status(500).json({ success: false, error: err })
         }
         break

      case 'PUT' /*Actulizar */:
         try {
            if (id[0] == 'end') {
               console.log('mas datos', id[1], body)
               const result = await updateWorkEnd(id[1], body)
               res.status(200).json(result)
            } else if (id[0] == 'update') {
               const result = await updateWorkUpdate(id[1], body)
               res.status(200).json(result)
            } else {
               const result = await updateWork(id[0], body)
               res.status(200).json(result)
            }
         } catch (err) {
            res.status(500).json({ success: false, error: err })
         }
         break

      case 'POST' /*Insert*/ /*O CUALQUIER ACCION secreta*/:
         try {
            const result = await insertWork(body)
            res.status(200).json(result)
         } catch (err) {
            res.status(500).json({ success: false, error: err })
         }
         break

      case 'DELETE':
         try {
            const result = await deleteWork(id)
            res.status(200).json(body)
         } catch {
            res.status(500).json({ success: false, error: err })
         }
         break

      default:
         res.setHeader('Allow', ['GET', 'PUT'])
         res.status(405).end(`Method ${method} Not Allowed`)
   }
}
