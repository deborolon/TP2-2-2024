import productsModel from "../models/index.js"

const getAllProducts = async () => {
    //Fix: la función se ejecuta!
    return await productsModel.getAllProducts()
}

export default {
    getAllProducts
}