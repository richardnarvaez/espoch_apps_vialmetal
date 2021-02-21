import connect from '../database/connection'

export async function getAllContractors() {
   const db = await connect()
   const result = await db.query(`select * from contractors`)
   return result.recordsets[0]
}
export async function getContractorById(id) {
   const db = await connect()
   const result = await db.query(`select * from contractors where id_contractor =` + id)
   return result.recordsets[0]
}
export async function insertContractor({ ruc, business_name, description }) { /*MANERA PRO*/
   const db = await connect()
   const result = await db.query(`INSERT INTO contractors (ruc, business_name, description)
   VALUES('${ruc}', '${business_name}', '${description}')`)
   return { success: true }
}
export async function updateContractor(id, dataContractor) {
   const db = await connect()
   const result = await db.query(`UPDATE contractors SET ruc = '${dataContractor.ruc}', business_name = '${dataContractor.business_name}', description = '${dataContractor.description}' WHERE id_contractor = '${id}'`)
   return result.recordsets
}
export async function deleteContractor(id) {
   const db = await connect()
   const result = await db.query(`DELETE FROM contractors WHERE id_contractor = ${id}`)
   return result.recordsets
}