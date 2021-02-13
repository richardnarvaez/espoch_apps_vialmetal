import { getUserById } from '../../../../controllers/users'

export default async (req, res) => {
   const {
      query: { id, name },
      method,
   } = req

   switch (method) {
      case 'GET':
         res.status(200).json({ id, name: `User ${id}` })
         break
      case 'PUT':
         res.status(200).json({ id, name: name || `User ${id}` })
         break
      default:
         res.setHeader('Allow', ['GET', 'PUT'])
         res.status(405).end(`Method ${method} Not Allowed`)
   }
}

const buscarUsuario = async (req, res) => {
   try {
      const { id } = req.params
      const result = await getUserById(id)
      res.status(200).json(result)
   } catch (err) {
      console.log(err)
      res.status(500).json({ success: false })
   }
}
