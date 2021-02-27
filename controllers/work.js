import connect from '../database/connection'

export async function getAllWorks() {
   const db = await connect()
   const result = await db.query(`select * from works order by created_at DESC`)
   return result.recordsets[0]
}
export async function getWorkById(id) {
   const db = await connect()
   const result = await db.query(`select * from works where  id_work =` + id)
   return result.recordsets[0]
}
export async function insertWork(dataWork) {
   const db = await connect()
   console.log(dataWork)
   const result = await db.query(`INSERT INTO works (id_contractor, responsable, description, location, finished_at, price_work, status)
    VALUES(${parseInt(dataWork.id_contractor)},'${dataWork.responsable}','${
      dataWork.description
   }','${dataWork.location}', ${dataWork.finished_at},'${dataWork.price_work}', 'P')`)
   console.log(result)
   return result.recordsets[0]
}
export async function updateWork(id, dataUser) {
   const db = await connect()
   const result = await db.query(
      `UPDATE works SET description = ${dataUser.description}, created_at = ${dataUser.created_at}, finished_at = ${dataUser.finished_at}, update_at = ${dataUser.update_at}, created_at = ${dataUser.price_work}, status = ${dataUser.status} WHERE id_work = ${id}`
   )
   return result.recordsets[0]
}
export async function deleteWork(id) {
   const db = await connect()
   const result = await db.query(`DELETE FROM works WHERE id_work = ${id}`)
   return result.recordsets[0]
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

export async function updateWorkEnd(id, body) {
   const db = await connect()
   const resultM = [],
      resultT = [],
      resulV = []
   body.sentMaterials.map(async (item, i) => {
      console.log(
         'query',
         `UPDATE work_materials SET material_end = ${item.material_end} WHERE id_work_material=${item.id_work_material}`
      )
      const M = await db.query(
         `UPDATE work_materials SET material_end = ${item.material_end} WHERE id_work_material=${item.id_work_material}`
      )
      resultM[i] = M.recordsets[0]
   })
   body.sentTools.map(async (item, i) => {
      console.log(
         'query',
         `UPDATE work_tools SET tool_end = ${item.material_end} WHERE id_work_tool=${item.id_work_tool}`
      )
      const T = await db.query(
         `UPDATE work_tools SET tool_end = ${item.material_end} WHERE id_work_tool=${item.id_work_tool}`
      )
      resultT[i] = T.recordsets[0]
   })
   body.sentVehicles.map(async (item, i) => {
      console.log(
         'query',
         `UPDATE work_vehicles SET km_end = ${item.km_end} WHERE id_work_vehicle=${item.id_work_vehicle}`
      )
      const V = await db.query(
         `UPDATE work_vehicles SET km_end = ${item.km_end} WHERE id_work_vehicle=${item.id_work_vehicle}`
      )
      resultV[i] = V.recordsets[0]
   })

   console.log('status', `UPDATE works SET status = T WHERE id_work = ${id}`)
   const resultS = await db.query(`UPDATE works SET status = 'T' WHERE id_work = ${id}`)

   //return {resultM,resultT,resultV,resultS: resultS.recordsets[0]}
   return { succes: true }
}

export async function updateWorkUpdate(id, body) {
   const db = await connect()

   console.log('ID: ', id)
   // console.log('BODY: ', body)
   body.list_materiales.map(async (item, i) => {
      let quantity = item.quantity - item.material_begin
      const query1 = `UPDATE work_materials SET material_begin = ${item.material_begin} WHERE id_work_material=${item.id_work_material}`
      const query2 = `UPDATE materials SET quantity = ${quantity} WHERE id_material=${item.id_material} `
      console.log('query MATERIALS:\n', query1, `\n`, query2)
      const M1 = await db.query(query1)
      const M2 = await db.query(query2)
      // resultM[i] = M.recordsets[0]
   })
   body.list_herramientas.map(async (item, i) => {
      let quantity = item.quantity - item.tool_begin
      const query1 = `UPDATE work_tools SET tool_begin = ${item.tool_begin} WHERE id_work_tool=${item.id_work_tool}`
      const query2 = `UPDATE tools SET quantity = ${quantity} WHERE id_tool=${item.id_tool} `
      console.log('query TOOLS:\n', query1, '\n', query2)
      const T1 = await db.query(query1)
      const T2 = await db.query(query2)
      // resultT[i] = T.recordsets[0]
   })

   return { succes: true }
}
