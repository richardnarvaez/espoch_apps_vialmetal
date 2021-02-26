import connect from '../database/connection'

export async function getAllWork_Materials() {
   const db = await connect()
   const result = await db.query(`select * from work_materials`)
   return result.recordsets[0]
}
export async function getWork_MaterialId(id) {
   const db = await connect()
   const result = await db.query(`SELECT w.id_work_material, w.id_work, m.id_material, m.name, m.quantity, m.price_liter, w.material_begin
   FROM work_materials w INNER JOIN materials m
   ON w.id_material = m.id_material
   WHERE w.id_work = ${id}`)
   return result.recordsets[0]
}

export async function insertWork_Material(dataWorkM) {
   const db = await connect()
   const result = await db.query(`INSERT INTO work_materials (id_work, id_material, material_begin, material_end)
   VALUES( ${dataWorkM.id_work}, ${dataWorkM.id_material} , ${dataWorkM.material_begin},	${dataWorkM.material_end} )`)
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
      `select id_work_material, name, quantity, material_begin from work_materials inner join materials on work_materials.id_material = materials.id_material WHERE id_work=${id}`
   )
   return result.recordsets[0]
}
//aditional: Actualizar cantidad
export async function updateWork_Material_quantity(dataWorkM) {
   console.log("La data: ",dataWorkM)
   const db = await connect()
   const result = await db.query(
      `UPDATE work_materials SET material_end = ${dataWorkM.material_end} WHERE id_work_material=${dataWorkM.id_work_material}`
   )
   return result.recordsets[0]
}
