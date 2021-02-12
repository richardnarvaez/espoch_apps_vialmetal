import { getAllUsers } from '../../controllers/users'

export default async (req, res) => {
   try {
     const result = await getAllUsers()
      res.status(200).json(result)
   } catch (err) {
      console.log(err)
      res.status(500).json({ success: false })
   }
}
