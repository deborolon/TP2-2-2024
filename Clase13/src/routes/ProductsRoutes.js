import ProdController from "../controllers/ProductsControllers.js"
import { roleAuth } from "../middleware/roleAuth.js" 
import express from "express"

class ProdRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new ProdController()
    }

    start(){
        this.router.get("/prod", this.controller.getProd)
        this.router.get("/prod/:id", roleAuth, this.controller.getProdById)
        this.router.get("/prod/color/:color", roleAuth, this.controller.getProdByColor)
        this.router.post("/prod", roleAuth, this.controller.postProd)
        this.router.patch("/prod/update/:id", roleAuth, this.controller.patchProd)
        this.router.put("/prod/update/all/:id", roleAuth, this.controller.putProd)
        this.router.delete("/prod/:id", roleAuth, this.controller.deleteProd)

        return this.router
    }
}

export default ProdRoutes