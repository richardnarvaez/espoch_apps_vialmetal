import connect from '../database/connection'

export async function getAllWork_Vehicles() {
   const db = await connect()
   const result = await db.query(`select * from work_vehicles`)
   return result.recordsets[0]
}
export async function getWork_VehicleById(id){
   const db = await connect()
   const result = await db.query(`select * from work_vehicles where id_work_vehicle =`+ id)
   return result.recordsets[0]
}
export async function insertWork_Vehicle(dataWorkV){
   const db = await connect()
   const result = await db.query(`INSERT INTO work_vehicles (id_work_vehicle, id_work, id_vehicle, km_begin, km_end, date)
   VALUES(${dataWorkV.id_work_vehicle}, ${dataWorkV.id_work}, ${dataWorkV.id_vehicle} , ${dataWorkV.km_begin}, ${dataWorkV.km_end} , '${dataWorkV.date}')`)
   return result.recordsets
}
export async function updateWork_Vehicle(id, dataWorkV){
   const db = await connect()
   const result = await db.query(`UPDATE work_vehicles SET km_begin = ${dataWorkV.km_begin}, km_end = ${dataWorkV.km_end}, date = ${dataWorkV.date} WHERE id_work_vehicle = ${id}`)
   return result.recordsets
}
export async function deleteWork_Vehicle(id){
   const db = await connect()
   const result = await db.query(`DELETE FROM work_vehicles WHERE id_work_vehicle = ${id}`)
   return result.recordsets
}