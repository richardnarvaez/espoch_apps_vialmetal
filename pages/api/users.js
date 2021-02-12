import connect from '../../database/connection'

export default async (req, res) => {
   try {
      const db = await connect()
      const result = await db.query`select * from users`
      console.table(result.recordset)
      res.status(200).json(result.recordset)
   } catch (err) {
      console.log(err)
      res.status(500).json({ success: false })
   }
}
