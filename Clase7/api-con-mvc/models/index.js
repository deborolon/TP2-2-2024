const products = [
    {id: 1, nombre: "Celular Xiaomi", categoria: "Smartphones", precio: "989000"},
    {id: 2, nombre: "Mouse", categoria: "Inalambrico", precio: "150000"},
    {id: 3, nombre: "Teclado", categoria: "Inalambrico", precio: "80000"}
]

const getAllProducts = async () => {
    return await products
}

export default {
    getAllProducts
}