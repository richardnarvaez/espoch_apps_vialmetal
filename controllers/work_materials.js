import connect from '../database/connection'

export async function getAllWork_Materials() {
   const db = await connect()
   const result = await db.query(`select * from work_materials`)
   return result.recordsets[0]
}
export async function getWork_MaterialId(id) {
   const db = await connect()
   const result = await db.query(`select * from work_materials where id_work_material =` + id)
   return result.recordsets[0]
}

export async function insertWork_Material(dataWorkM) {
   const db = await connect()
   const result = await db.query(`INSERT INTO work_materials (id_work_material, id_work, id_material, material_begin, material_end, date)
   VALUES(${dataWorkM.id_work_material}, ${dataWorkM.id_work}, ${dataWorkM.id_material} , ${dataWorkM.material_begin},	${dataWorkM.material_end} , '${dataWorkM.date}')`)
   return result.recordsets[0]
}
export async function updateWork_Material(id, dataWorkM) {
   const db = await connect()
   const result = await db.query(
      `UPDATE work_materials SET material_begin = ${dataWorkM.material_begin}, material_end = ${dataWorkM.material_end}, date = ${dataWorkM.date} WHERE id_work_material = ${id}`
   )
   return result.recordsets[0]
}
export async function deleteWork_Material(id) {
   const db = await connect()
   const result = await db.query(`DELETE FROM work_materials WHERE id_work_material = ${id}`)
   return result.recordsets[0]
}
//aditional: Materiales usados en la obra
export async function getMaterialUsedWork(id) {
   const db = await connect()
   const result = await db.query(
      `select name, quantity from work_materials inner join materials on work_materials.id_work_material = materials.id_material WHERE id_work=${id}`
   )
   return result.recordsets[0]
}
