import connect from '../database/connection'

export async function getAllWorks() {
    const db = await connect()
    const result = await db.query(`select * from works order by created_at DESC`)
    return result.recordsets[0]
 }
 export async function getWorkById(id){
    const db = await connect()
    const result = await db.query(`select * from works where  id_work =`+ id)
    return result.recordsets[0]
 }
 export async function insertWork(dataWork){
    const db = await connect()
    console.log(dataWork)
    const result = await db.query(`INSERT INTO works (id_contractor, responsable, description, location, finished_at, price_work, status)
    VALUES(${parseInt(dataWork.id_contractor)},'${dataWork.responsable}','${dataWork.description}','${dataWork.location}', ${dataWork.finished_at},'${dataWork.price_work}', 'P')`) 
    console.log(result)
    return result.recordsets[0]
 }
 export async function updateWork(id, dataUser){
    const db = await connect()
    const result = await db.query(`UPDATE works SET description = ${dataUser.description}, created_at = ${dataUser.created_at}, finished_at = ${dataUser.finished_at}, update_at = ${dataUser.update_at}, created_at = ${dataUser.price_work}, status = ${dataUser.status} WHERE id_work = ${id}`)
    return result.recordsets
 }
 export async function deleteWork(id){
    const db = await connect()
    const result = await db.query(`DELETE FROM works WHERE id_work = ${id}`)
    return result.recordsets
 }


 /*GET LISTA DE OBRAS ACTIVAS*/
 export async function getActiveWorks(id) {
   const db = await connect()
   const result = await db.query(`SELECT w.id_work,w.responsable, c.business_name, w.description, w.location, w.created_at, w.status
   FROM works w INNER JOIN contractors c
   ON w.id_contractor = c.id_contractor
   WHERE w.status <> 'F' AND w.id_contractor = ${id}`)
   return result.recordsets[0]
}

