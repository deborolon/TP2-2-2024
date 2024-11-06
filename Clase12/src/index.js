import express from "express"
import ProdRoutes from "./routes/ProductsRoutes.js"
import MongoConnection from "./models/MongoConnection.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", new ProdRoutes().start())

await MongoConnection.connection()
app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))