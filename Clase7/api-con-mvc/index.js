import express from "express"
import productsRoutes from "./routes/index.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//MVC: model, view, controller / modelo, vista, controlador
//Vista: se encarga de renderizar la respuesta o mostrar las vistas (html, css, handlebars, React, Vue, etc)
//Controlador: es la encargada de gestionar las solicitudes desde las rutas y dar respuesta
//Modelo: es el encargado de trabajar en conjunto con los datos, siempre es el más cercano
//Servicios: se encarga de la lógica del negocio, capa de abstracción

app.use("/", productsRoutes)

app.listen(PORT, () => console.log("Server MVC running..."))
app.on("Error", (error) => console.log("Error ", error))