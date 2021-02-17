import connect from '../database/connection'

export async function getAllTools() {
   const db = await connect()
   const result = await db.query(`select * from tools`)
   return result.recordsets[0]
}
export async function getToolById(id){
   const db = await connect()
   const result = await db.query(`select * from tools where = id_tool`+ id)
   return result.recordsets
}
export async function insertTool(dataTool){
   const db = await connect()
   const result = await db.query(`INSERT INTO tools (image, name, count, status, price_use)
   VALUES( ${dataTool.image},	${dataTool.name} , ${dataTool.count}, ${dataTool.status},	${dataTool.price_use})`)
   return result.recordsets
}
export async function updateTool(id, dataTool){
   const db = await connect()
   const result = await db.query(`UPDATE tools SET iamge = ${dataTool.image}, name = ${dataTool.name}, count = ${dataTool.count}, status = ${dataTool.status}, price_use = ${dataTool.price_use} WHERE id_tool = ${id}`)
   return result.recordsets
}
export async function deleteTool(id){
   const db = await connect()
   const result = await db.query(`DELETE FROM tools WHERE id_tool = ${id}`)
   return result.recordsets
}