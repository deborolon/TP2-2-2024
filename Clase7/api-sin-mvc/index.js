import express from "express"

const app = express()
const PORT = 8080

//Middlewares:
//funciones que están entre la solicitud y el objeto de respuesta
//REQ PARAMS -> encargado de recibir parámetros por url
app.use(express.urlencoded({extended: true}))
//REQ BODY - recibe el cuerpo de la solicitud
app.use(express.json())

const products = [
    {id: 1, nombre: "Celular Xiaomi", categoria: "Smartphones", precio: "989000"},
    {id: 2, nombre: "Mouse", categoria: "Inalambrico", precio: "150000"},
    {id: 3, nombre: "Teclado", categoria: "Inalambrico", precio: "80000"}
]

//Verbos/Tipos de solicitudes HTTP:
//GET (obtener), POST(añadir), PUT(cambiar todo), PATCH(cambia una parte), DELETE(borrar)
app.get("/", (request, response) => {
    response.send("Bienvenidos!")
})

app.get("/products", (request, response) => {
    response.send(products)
})

app.get("/products/:id", (request, response) => {
    const { id } = request.params
    const filteredProduct = products.filter((e) => e.id == id)
    // if(filteredProduct != null){
    //     console.log("Dentro del if!")
    // }

    if(!filteredProduct.length > 0){
        response.send({code: 404, message: "El id no se encuentra."})
    } else{
        response.send(filteredProduct)
    }
})

app.post("/products", (request, response) => {
    const data = request.body
    //products[products.length -1] -> esto solo accede a la posición en el array
    data.id = products[products.length -1].id + 1
    products.push(data)
    //siempre enviar una respuesta!!!
    response.send(data)
})

app.delete("/products/:id", (request, response) => {
    const { id } = request.params
    const index = products.findIndex((e) => e.id == id)
    if(index === -1){
        response.send("El elemento no existe.")
    }else{
        products.splice(index, 1)
        response.send("El producto fue borrado exitosamente.")
    }
})

app.listen(PORT, () => console.log("Server running..."))
app.on("Error", (error) => console.log("Error ", error))
