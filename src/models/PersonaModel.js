import db from "../database/db.js"
import { DataTypes } from "sequelize"

const PersonaModel = db.define("personas", {
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE },
})

export default PersonaModel
