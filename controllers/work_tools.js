import connect from '../database/connection'

export async function getAllWork_Tools() {
   const db = await connect()
   const result = await db.query(`select * from work_tools`)
   return result.recordsets[0]
}
export async function getWork_ToolById(id) {
   const db = await connect()
   const result = await db.query(`SELECT w.id_work_tool, w.id_work, t.id_tool, t.name, t.quantity, t.price_use, w.tool_begin
   FROM work_tools w INNER JOIN tools t
   ON w.id_tool = t.id_tool
   WHERE w.id_work = ${id}`)
   return result.recordsets[0]
}
export async function insertWork_Tool(dataUser) {
   const db = await connect()
   console.log('DATOS WORK_TOOL: ', dataUser)
   const result = await db.query(`INSERT INTO work_tools (id_work, id_tool, tool_begin, tool_end)
   VALUES(${dataUser.id_work}, ${dataUser.id_tool} , ${dataUser.tool_begin},	${dataUser.tool_end} )`)
   return result.recordsets[0]
}
export async function updateWork_Tool(id, dataUser) {
   const db = await connect()
   const result = await db.query(
      `UPDATE work_tools SET tool_begin = ${dataUser.tool_begin}, tool_end = ${dataUser.tool_end}, date = ${dataUser.date} WHERE id_work_tool = ${id}`
   )
   return result.recordsets[0]
}
export async function deleteWork_Tool(id) {
   const db = await connect()
   const result = await db.query(`DELETE FROM work_tools WHERE id_work_tool = ${id}`)
   return result.recordsets[0]
}
//aditional: Herramientas usadas en la obra
export async function getToolUsedWork(id) {
   const db = await connect()
   const result = await db.query(
      `select wt.id_work_tool, t.id_tool, t.name, t.quantity, wt.tool_begin from work_tools wt inner join tools t on wt.id_tool = t.id_tool WHERE id_work=${id}`
   )
   return result.recordsets[0]
}
