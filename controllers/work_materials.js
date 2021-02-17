import connect from '../database/connection'

export async function getAllWork_Materials() {
   const db = await connect()
   const result = await db.query(`select * from work_materials`)
   return result.recordsets[0]
}
export async function getWork_MaterialId(id){
   const db = await connect()
   const result = await db.query(`select * from work_materials where id_work_materials =`+ id)
   return result.recordsets
}
export async function insertWork_Material(dataWorkM){
   const db = await connect()
   const result = await db.query(`INSERT INTO work_materials (id_work, id_material, material_begin, material_end, date)
   VALUES( ${dataWorkM.id_work}, ${dataWorkM.material} , ${dataWorkM.material_begin},	${dataWorkM.material_end} , ${dataWorkM.date})`)
   return result.recordsets
}
export async function updateWork_Material(id, dataWorkM){
   const db = await connect()
   const result = await db.query(`UPDATE work_materials SET material_begin = ${dataWorkM.material_begin}, material_end = ${dataWorkM.material_end}, date = ${dataWorkM.date} WHERE id_work_materials = ${id}`)
   return result.recordsets
}
export async function deleteWork_Material(id){
   const db = await connect()
   const result = await db.query(`DELETE FROM work_materials WHERE id_work_materials = ${id}`)
   return result.recordsets
}