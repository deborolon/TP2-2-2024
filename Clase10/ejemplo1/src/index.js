import express from "express"
import WordsRoutes from "./routes/words.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(express.static("public"))

app.use("/", new WordsRoutes().start())

// app.get("/", (req, res) => {
//     res.send("Ok")
// })

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))