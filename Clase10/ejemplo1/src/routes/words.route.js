import WordsController from "../controllers/words.controller.js"
import express from "express"

class WordsRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new WordsController()
    }

    start(){
        this.router.get("/words", this.controller.getWords)
        this.router.post("/words", this.controller.postWords)
        this.router.patch("/words/update/:id", this.controller.patchWords)

        return this.router
    }
}

export default WordsRoutes