import express from "express"
import cors from "cors"
import db from "./database/db.js"
import personsRoutes from "./routes/routes.js"
//import mysql from "mysql2"

const app = express()
const PORT = process.env.PORT || 5000
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// })
app.use(cors())
app.use(express.json())
app.use("/persons", personsRoutes)
;async () => {
  try {
    await db.authenticate()
    console.log("Connection DB successfully")
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}
// pool.getConnection((err, coon) => {
//   if (err) console.log(err)
//   console.log("Connection successfully")
// })
app.get("/ping", (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT} 🚀`)
})
