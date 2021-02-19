import connect from '../database/connection'

export async function getAllUsers() {
   const db = await connect()
   const result = await db.query(`select * from users`)
   return result.recordsets[0]
}
export async function getUserById(id){
   const db = await connect()
   const result = await db.query(`select * from users where id = `+ id)
   return result.recordsets[0]
}

export async function updateUserRole(id, dataUser){
   const db = await connect()
   const result = await db.query(`UPDATE users SET roles = '${dataUser.role}' WHERE id = ${id}`)
   return result.recordsets
}
