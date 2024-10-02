import animalsService from "../services/animals.service.js";

const getAllAnimals = async (req, res) => {
    const animals = await animalsService.getAllAnimals()
    res.status(200).send(animals)
    // res.send({
    //     message: animals,
    //     statusCode: 200
    // })
}

const postAnimals = async (req, res) => {
    //esta info viene del cuerpo del mensaje
    const animal = req.body
    // console.log("REQ-BODY: ", typeof(req.body))
    // console.log("REQ-BODY: ", typeof(JSON.stringify(req.body)))
    if(JSON.stringify(req.body)== "{}"){
        console.log("Esto es solo un log: objeto vacio")
        console.warn("Esto es una advertencia")
        console.error("Esto es un error")
        throw new Error("El objeto no tiene los parámetros válidos")
    }
    const newAnimal = await animalsService.postAnimals(animal)
    res.send(newAnimal)
}

const putAnimals = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const putAnimal = await animalsService.putAnimals(id, data)
    res.send(putAnimal)
}

const patchAnimals = async (req, res) => {
    const { id } = req.params
    const data = req.body 
    const patchAnimal = await animalsService.patchAnimals(id, data)
    res.send(patchAnimal)
}

const deleteAnimals = async (req, res) => {
    //req.params tiene muchos parámetros
    const { id } = req.params 
    const deletedAnimal = await animalsService.deleteAnimals(id)
    res.send(deletedAnimal)
}

export default {
    getAllAnimals,
    postAnimals,
    deleteAnimals,
    putAnimals,
    patchAnimals
}