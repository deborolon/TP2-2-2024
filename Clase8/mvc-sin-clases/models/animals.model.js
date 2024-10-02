//nombres de los archivos:
//entidad + nombre de la capa + extensión -> EJ: users.model.js

const animals = [
    {id: 1, nombre: "Ballena", caracteristica: "Azul"},
    {id: 2, nombre: "Mapache", caracteristica: "Rabioso"},
    {id: 3, nombre: "Perro", caracteristica: "Amigo"},
    {id: 4, nombre: "Gato", caracteristica: "Independiente"},
    {id: 5, nombre: "León", caracteristica: "El rey de la selva"}
]

const getAllAnimals = async () => {
    // const data = await miBaseDeDatos()
    return animals
}

const postAnimals = async (animal) => {
    //animals.length - 1 -> esto me da la posición del último elemento del array
    // const findId = [animals.length - 1].id
    // console.log(findId)
    animal.id = animals[animals.length - 1].id + 1
    animals.push(animal)
    return animal
}

const putAnimals = async (id, data) => {
    //Lo que viene por parámetros siempre es un string!!!
    //console.log("ID: ", typeof(id))
    data.id = parseInt(id)
    //console.log("DATA ID: ", data.id)
    //La comparación es solo de valor, no considera el tipo de dato!!!
    const index = animals.findIndex((e) => e.id == id)
    animals.splice(index, 1, data)
    return "Actualización exitosa."
}

//Actualización parcial
const patchAnimals = async (id, data) => {
    const index = animals.findIndex((e) => e.id == id)
    //Spread operator "..."
    const newAnimal = {...animals[index], ...data}
    animals.splice(index, 1, newAnimal)
    return "Actualización parcial completa."
}

const deleteAnimals = async (id) => {
    const index = animals.findIndex((e) => e.id == id)
    if(index == -1) throw new Error("El id del elemento no existe.")
    animals.splice(index, 1)
    return "El animal fue borrado"
}

export default {
    getAllAnimals,
    postAnimals,
    deleteAnimals,
    putAnimals,
    patchAnimals
}

//Opcional trabajar con funciones clásicas
// async function name(params) {
    
// }