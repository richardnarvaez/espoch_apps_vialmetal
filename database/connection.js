const sql = require('mssql')
import { dbConfig } from '../config/constants'

const connect = async () => {
   const pool = new sql.ConnectionPool(dbConfig)
   try {
      await pool.connect()
      console.log('Connected to database')
      return pool
   } catch (err) {
      console.log('Database connection failed!', err)

      return err
   }
}

export default connect
