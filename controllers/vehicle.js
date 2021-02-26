import connect from '../database/connection'

export async function getAllVehicles() {
   const db = await connect()
   const result = await db.query(`select * from vehicles`)
   return result.recordsets[0]
}
export async function getVehicleById(id){
   const db = await connect()
   const result = await db.query(`select * from vehicles where id_vehicle =`+ id)
   return result.recordsets[0]
}
export async function insertVehicle(dataVehicle){
   const db = await connect()
   const result = await db.query(`INSERT INTO vehicles (license, name, image, mileage, price_km, status)
   VALUES('${dataVehicle.license}', '${dataVehicle.name}' , '${dataVehicle.image}', ${dataVehicle.mileage}, '${dataVehicle.price_km}', '${dataVehicle.status}')`)
   return result.recordsets[0]
}
export async function updateVehicle(id, dataVehicle){
   const db = await connect()
   const result = await db.query(`UPDATE vehicles SET placa = ${dataVehicle.placa}, name = ${dataVehicle.name}, image = ${dataVehicle.image}, kilometraje = ${dataVehicle.kilometraje}, status = ${dataVehicle.status}, price_km = ${dataVehicle.price_km} WHERE id_vehicle = ${id}`)
   return result.recordsets[0]
}
export async function deleteVehicle(id){
   const db = await connect()
   const result = await db.query(`DELETE FROM vehicles WHERE id_vehicle = ${id}`)
   return result.recordsets[0]
}