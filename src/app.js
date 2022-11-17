import express from "express"
import cors from "cors"
import db from "./database/db.js"
import personsRoutes from "./routes/routes.js"

const app = express()

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

// app.get("/ping", (req, res) => {
//   res.send("Hello World!")
// })

const mysql = require("mysql")
const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
})
connection.connect()

app.listen(5000, () => {
  console.log(`🚀 Server listening on port 5000 🚀`)
})
