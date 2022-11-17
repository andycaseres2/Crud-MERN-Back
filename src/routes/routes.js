import express from "express"
import {
  createPerson,
  getPerson,
  getPersons,
  updatePerson,
  deletePerson,
  prueba,
} from "../controllers/PersonaController.js"

const router = express.Router()
router.get("/prueba", prueba)
router.get("/", getPersons)
router.get("/:id", getPerson)
router.post("/", createPerson)
router.put("/:id", updatePerson)
router.delete("/:id", deletePerson)

export default router
