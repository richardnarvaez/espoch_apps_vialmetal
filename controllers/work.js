import connect from '../database/connection'

export async function getAllWorks() {
    const db = await connect()
    const result = await db.query(`select * from work`)
    return result.recordsets[0]
 }
 export async function getWorkById(id){
    const db = await connect()
    const result = await db.query(`select * from work where =`+ id_work)
    return result.recordsets
 }
 export async function insertWork(dataWork){
    const db = await connect()
    const result = await db.query(`INSERT INTO users (id_responsable, id_agreement, description, created_at, finished_at, update_at, price_work, status)
    VALUES( ${dataWork.id_responsable},	${dataWork.id_agreement} , ${dataWork.description}, ${dataWork.created_at}, ${dataWork.finished_at}, ${dataWork.update_at}, ${dataWork.price_work}, ${dataWork.status})`) 
    return result.recordsets
 }
 export async function updateWork(id, dataUser){
    const db = await connect()
    const result = await db.query(`UPDATE users SET description = ${dataUser.description}, created_at = ${dataUser.created_at}, finished_at = ${dataUser.finished_at}, update_at = ${dataUser.update_at}, created_at = ${dataUser.price_work}, status = ${dataUser.status} WHERE id_work = ${id}`)
    return result.recordsets
 }
 export async function deleteWork(id){
    const db = await connect()
    const result = await db.query(`DELETE FROM work WHERE id_work = ${id}`)
    return result.recordsets
 }