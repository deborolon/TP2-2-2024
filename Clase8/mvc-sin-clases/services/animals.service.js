import animalsModel from "../models/animals.model.js";

//Desestructuring object para importar todos los métodos
//Otra forma de importar
// const { getAllAnimals, postAnimals, putAnimals, patchAnimals, deleteAnimals } = animalsModel

// const getAllAnimalsHandler = async () => {
//     return getAllAnimals()
// }

const getAllAnimals = async () => {
    return animalsModel.getAllAnimals()
}

const postAnimals = async (animal) => {
    return animalsModel.postAnimals(animal)
}

const putAnimals = async (id, data) => {
    return animalsModel.putAnimals(id, data)
}

const patchAnimals = async (id, data) => {
    return animalsModel.patchAnimals(id, data)
}

const deleteAnimals = async (id) => {
    return animalsModel.deleteAnimals(id)
}

export default {
    getAllAnimals,
    postAnimals,
    deleteAnimals,
    putAnimals,
    patchAnimals
}