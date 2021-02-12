import connect from '../database/connection'

export async function getAllUsers() {
   const db = await connect()
   const result = await db.query(`select * from users`)
   return result.recordsets
}
