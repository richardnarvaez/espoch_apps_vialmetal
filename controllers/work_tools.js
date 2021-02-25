import connect from '../database/connection'

export async function getAllWork_Tools() {
   const db = await connect()
   const result = await db.query(`select * from work_tools`)
   return result.recordsets[0]
}
export async function getWork_ToolById(id){
   const db = await connect()
   const result = await db.query(`select * from work_tools where id_work_tool =`+ id)
   return result.recordsets
}
export async function insertWork_Tool(dataUser){
   const db = await connect()
   const result = await db.query(`INSERT INTO work_tools (id_work_tool, id_work, id_tool, tool_begin, tool_end, date)
   VALUES(${dataUser.id_work_tool}, ${dataUser.id_work}, ${dataUser.id_tool} , ${dataUser.tool_begin},	${dataUser.tool_end} , '${dataUser.date}')`)
   return result.recordsets
}
export async function updateWork_Tool(id, dataUser){
   const db = await connect()
   const result = await db.query(`UPDATE work_tools SET tool_begin = ${dataUser.tool_begin}, tool_end = ${dataUser.tool_end}, date = ${dataUser.date} WHERE id_work_tool = ${id}`)
   return result.recordsets
}
export async function deleteWork_Tool(id){
   const db = await connect()
   const result = await db.query(`DELETE FROM work_tools WHERE id_work_tool = ${id}`)
   return result.recordsets[0]
}
//aditional: Herramientas usadas en la obra
export async function getToolUsedWork(id) {
   const db = await connect()
   const result = await db.query(
      `select name, quantity from work_tools inner join tools on work_tools.id_work_tool = tools.id_tool WHERE id_work=${id}`
   )
   return result.recordsets[0]
}