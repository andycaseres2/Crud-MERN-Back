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

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server listening on port 5000 🚀`)
})
