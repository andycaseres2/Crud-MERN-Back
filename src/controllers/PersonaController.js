import PersonaModel from "../models/PersonaModel.js"

export const prueba = async (_, res) => {
  res.send("Hola prueba")
}

export const getPersons = async (_, res) => {
  try {
    const persons = await PersonaModel.findAll()
    res.json(persons)
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getPerson = async (req, res) => {
  try {
    const person = await PersonaModel.findAll({
      where: { id: req.params.id },
    })
    res.json(person)
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const createPerson = async (req, res) => {
  try {
    await PersonaModel.create(req.body)
    res.json({
      message: "Register created successfully!",
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const updatePerson = async (req, res) => {
  try {
    await PersonaModel.update(req.body, {
      where: { id: req.params.id },
    })
    res.json({ message: " Register updated successfully!" })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const deletePerson = async (req, res) => {
  try {
    await PersonaModel.destroy({
      where: { id: req.params.id },
    })
    res.json({ message: "Register deleted successfully!" })
  } catch (error) {
    res.json({ message: error.message })
  }
}
