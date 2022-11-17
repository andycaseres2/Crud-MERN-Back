import { Sequelize } from "sequelize"

const db = new Sequelize("crud-mern", "root", "", {
  host: process.env.URL,
  dialect: "mysql",
})

export default db
