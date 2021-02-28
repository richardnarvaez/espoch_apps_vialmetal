import connect from '../database/connection'

export async function getAllMaterials() {
   const db = await connect()
   const result = await db.query(`select * from materials`)
   return result.recordsets[0]
}
export async function getMaterialById(id) {
   const db = await connect()
   const result = await db.query(`select * from materials where id_material =` + id)
   return result.recordsets[0]
}
export async function insertMaterial(dataMaterial) {
   const db = await connect()
   const result = await db.query(`INSERT INTO materials (name, image, quantity, price_liter)
   VALUES('${dataMaterial.name}', '${dataMaterial.image}' , '${dataMaterial.quantity}', '${dataMaterial.price_liter}')`)
   return result.recordsets
}
export async function updateMaterial(id, dataMaterial) {
   const db = await connect()
   console.log("Material", dataMaterial)
   const result = await db.query(
      `UPDATE materials SET name = '${dataMaterial.name}', image = '${dataMaterial.image}', quantity = ${dataMaterial.quantity}, price_liter = ${dataMaterial.price_liter} WHERE id_material = ${id}`
   )
   return result.recordsets[0]
}
export async function deleteMaterial(id) {
   const db = await connect()
   const result = await db.query(`DELETE FROM materials WHERE id_material = ${id}`)
   return result.recordsets
}
