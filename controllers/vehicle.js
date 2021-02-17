import connect from '../database/connection'

export async function getAllVehicles() {
   const db = await connect()
   const result = await db.query(`select * from vehicle`)
   return result.recordsets[0]
}
export async function getVehicleById(id){
   const db = await connect()
   const result = await db.query(`select * from vehicle where id_vehicle =`+ id)
   return result.recordsets
}
export async function insertVehicle(dataVehicle){
   const db = await connect()
   const result = await db.query(`INSERT INTO vehicle (placa, name, image, kilometraje, status, price_km)
   VALUES( ${dataVehicle.placa}, ${dataVehicle.name} , ${dataVehicle.image}, ${dataVehicle.kilometraje}, ${dataVehicle.status} , ${dataVehicle.price_km})`)
   return result.recordsets
}
export async function updateVehicle(id, dataVehicle){
   const db = await connect()
   const result = await db.query(`UPDATE vehicle SET placa = ${dataVehicle.placa}, name = ${dataVehicle.name}, image = ${dataVehicle.image}, kilometraje = ${dataVehicle.kilometraje}, status = ${dataVehicle.status}, price_km = ${dataVehicle.price_km} WHERE id_vehicle = ${id}`)
   return result.recordsets
}
export async function deleteVehicle(id){
   const db = await connect()
   const result = await db.query(`DELETE FROM vehicle WHERE id_vehicle = ${id}`)
   return result.recordsets
}