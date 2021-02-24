import { getSession } from 'next-auth/client'
import {
   getAllWork_Materials,
   getWork_MaterialId,
   insertWork_Material,
   updateWork_Material,
   deleteWork_Material,
   getMaterialUsedWork,
} from '../../../../controllers/work_materials'

export default async (req, res) => {
   const {
      body,
      query: { id, name },
      method,
   } = req

   switch (method) {
      case 'GET' /*SELECT*/:
         let result

         try {
            switch (id[0]) {
               case 'all':
                  result = await getAllWork_Materials()
                  res.status(200).json(result)
                  break
               case 'used':
                  result = await getMaterialUsedWork(id[1])
                  res.status(200).json(result)
                  break
               default:
                  result = await getWork_MaterialId(id[0])
                  res.status(200).json(result)
                  break
            }
         } catch (err) {
            res.status(500).json({ success: false, error: err, llego: true })
         }
         break

      case 'PUT' /*Actulizar */:
         try {
            const result = await updateWork_Material(id, body)
            res.status(200).json(body)
         } catch (err) {
            res.status(500).json({ success: false, error: err })
         }
         break

      case 'POST' /*Insert*/ /*O CUALQUIER ACCION secreta*/:
         try {
            const result = await insertWork_Material(body)
            res.status(200).json(body)
         } catch (err) {
            res.status(500).json({ success: false, error: err })
         }
         break

      case 'DELETE':
         try {
            const result = await deleteWork_Material(id)
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
