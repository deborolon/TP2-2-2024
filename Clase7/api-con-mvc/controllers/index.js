import productsServices from "../services/index.js"

//El controlador TIENE que llamar al objeto de requerimiento y respuesta!
const getAllProducts = async (req, res) => {
    const data = await productsServices.getAllProducts()
    res.send(data)
}

export default {
    getAllProducts
}