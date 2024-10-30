import ProdController from "../controllers/ProductsController.js"
import express from "express"

class ProdRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new ProdController()
    }

    start(){
        this.router.get("/prod", this.controller.getProd)
        this.router.post("/prod", this.controller.postProd)
        this.router.patch("/prod/update/:id", this.controller.patchProd)
        this.router.put("/prod/update/all/:id", this.controller.putProd)
        this.router.delete("/prod/:id", this.controller.deleteProd)

        return this.router
    }
}

export default ProdRoutes