import express from "express"
import Router from "./routes/users.route.js"

const app = express()
const PORT = 8080

//Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Declaración de endpoint de prueba
// app.get("/", (req, res) => {
//     res.send("Ok!!!")
// })

app.use("/", new Router().start())
//Ejemplo de cómo importar diferentes rutas
// app.use("/products", new RouterProducts().start())
// app.use("/api", new RouterGeneral().start())

//Doy de alta de mi servidor
app.listen(PORT, () => console.log("Server running..."))
app.on("Error", (err) => console.log(err))