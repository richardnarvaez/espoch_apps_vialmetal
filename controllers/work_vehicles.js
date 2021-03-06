import connect from '../database/connection'

export async function getAllWork_Vehicles() {
   const db = await connect()
   const result = await db.query(`select * from work_vehicles`)
   return result.recordsets[0]
}
export async function getWork_VehicleById(id) {
   const db = await connect()
   const result = await db.query(`SELECT w.id_work_vehicle, w.id_work, v.id_vehicle, v.name, v.mileage, v.price_km, w.km_begin
   FROM work_vehicles w INNER JOIN vehicles v
   ON w.id_vehicle = v.id_vehicle
   WHERE w.id_work = ${id}`)
   return result.recordsets[0]
}
export async function insertWork_Vehicle(dataWorkV) {
   const db = await connect()
   try {
      const query1 = `INSERT INTO work_vehicles (id_work, id_vehicle, km_begin, km_end)
            VALUES( ${dataWorkV.id_work}, ${dataWorkV.id_vehicle} , ${dataWorkV.km_begin}, ${dataWorkV.km_end})`
      const query2 = `UPDATE vehicles SET status= 'O' WHERE id_vehicle = ${dataWorkV.id_vehicle}`

      const result1 = await db.query(query1)
      const result2 = await db.query(query2)

      return { success: true }
   } catch (e) {
      return { success: false, error: e }
   }
}
export async function updateWork_Vehicle(id, dataWorkV) {
   const db = await connect()
   const result = await db.query(
      `UPDATE work_vehicles SET km_begin = ${dataWorkV.km_begin}, km_end = ${dataWorkV.km_end}, date = ${dataWorkV.date} WHERE id_work_vehicle = ${id}`
   )
   return result.recordsets[0]
}
export async function deleteWork_Vehicle(id, { id_vehicle }) {
   const db = await connect()
   const query1 = `DELETE FROM work_vehicles WHERE id_work_vehicle = ${id}`
   const query2 = `UPDATE vehicles SET status = 'T' WHERE id_vehicle = ${id_vehicle}`

   try {
      const result = await db.query(query1)
      const result2 = await db.query(query2)
      return { success: true }
   } catch (e) {
      return { success: false, error: e }
   }
}

//aditional: Vehículos usadas en la obra
export async function getVehiclesUsedWork(id) {
   const db = await connect()
   const result = await db.query(`SELECT w.id_work_vehicle, w.id_work, v.id_vehicle, v.name, v.mileage, v.price_km, w.km_begin
   FROM work_vehicles w INNER JOIN vehicles v
   ON w.id_vehicle = v.id_vehicle
   WHERE w.id_work = ${id}`)
   return result.recordsets[0]
}
