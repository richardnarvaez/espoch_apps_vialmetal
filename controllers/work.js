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
    const result = await db.query(`INSERT INTO users (id_responsable, id_agreement, description, creadted_at, finished_at, update_at, price_work, status)
    VALUES( ${dataWork.id_responsable},	${dataWork.id_agreement} , ${dataWork.image})`) //ME QUEDO AQUI
    return result.recordsets
 }
 export async function updateWork(id, dataUser){
    const db = await connect()
    const result = await db.query(`UPDATE users SET name = ${dataUser.name}, email = ${dataUser.email}, image = ${dataUser.image} WHERE id = ${id}`)
    return result.recordsets
 }
 export async function deleteWork(id){
    const db = await connect()
    const result = await db.query(`DELETE FROM users WHERE id = ${id}`)
    return result.recordsets
 }