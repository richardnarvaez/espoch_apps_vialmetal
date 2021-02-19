import connect from '../database/connection'

export async function getAllAgreements() {
   const db = await connect()
   const result = await db.query(`select * from agreements`)
   return result.recordsets[0]
}
export async function getAgreementById(id){
   const db = await connect()
   const result = await db.query(`select * from agreements where id_agreement =`+ id)
   return result.recordsets[0]
}
export async function insertAgreement(dataAgreement){
   const db = await connect()
   const result = await db.query(`INSERT INTO agreements (id_contractor, location, location_reference, description, date_begin, date_end)
   VALUES( ${dataAgreement.id_contractor},	${dataAgreement.location} , ${dataAgreement.location_reference}, ${dataAgreement.description}, ${dataAgreement.date_begin}, ${dataAgreement.date_end})`)
   return result.recordsets
}
export async function updateAgreement(id, dataAgreement){
   const db = await connect()
   const result = await db.query(`UPDATE agreements SET location = ${dataAgreement.location}, location_reference = ${dataAgreement.location_reference}, description = ${dataAgreement.description} date_begin = ${dataAgreement.date_begin} date_end = ${dataAgreement.date_end} WHERE id_agreement = ${id}`)
   return result.recordsets
}
export async function deleteAgreement(id){
   const db = await connect()
   const result = await db.query(`DELETE FROM agreements WHERE id_agreement = ${id}`)
   return result.recordsets
}