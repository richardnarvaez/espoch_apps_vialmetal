import connect from '../database/connection'

export async function getAllContractor() {
   const db = await connect()
   const result = await db.query(`select * from contractor`)
   return result.recordsets[0]
}
export async function getContractorById(id){
   const db = await connect()
   const result = await db.query(`select * from contractor where id_contractor =`+ id)
   return result.recordsets
}
export async function insertContractor(dataContractor){
   const db = await connect()
   const result = await db.query(`INSERT INTO contractor (ruc, business_name, description)
   VALUES( ${dataContractor.ruc},	${dataContractor.business_name} , ${dataContractor.description})`)
   return result.recordsets
}
export async function updateContractor(id, dataContractor){
   const db = await connect()
   const result = await db.query(`UPDATE contractor SET ruc = ${dataContractor.ruc}, business_name = ${dataContractor.business_name}, description = ${dataContractor.description} WHERE id_contractor = ${id}`)
   return result.recordsets
}
export async function deleteContractor(id){
   const db = await connect()
   const result = await db.query(`DELETE FROM contractor WHERE id_contractor = ${id}`)
   return result.recordsets
}