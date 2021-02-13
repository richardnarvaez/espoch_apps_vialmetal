import connect from '../database/connection'

export async function getAllUsers() {
   const db = await connect()
   const result = await db.query(`select * from users`)
   return result.recordsets[0]
}
export async function getUserById(id){
   const db = await connect()
   const result = await db.query(`select * from users where =`+ id)
   return result.recordsets
}
export async function insertUser(dataUser){
   const db = await connect()
   const result = await db.query(`INSERT INTO users (name, email, image)
   VALUES( ${dataUser.name},	${dataUser.email} , ${dataUser.image})`)
   return result.recordsets
}
export async function updateUser(id, dataUser){
   const db = await connect()
   const result = await db.query(`UPDATE users SET name = ${dataUser.name}, email = ${dataUser.email}, image = ${dataUser.image} WHERE id = ${id}`)
   return result.recordsets
}
export async function deleteUser(id){
   const db = await connect()
   const result = await db.query(`DELETE FROM users WHERE id = ${id}`)
   return result.recordsets
}