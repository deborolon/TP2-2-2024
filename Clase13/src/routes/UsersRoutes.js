import UsersController from "../controllers/UsersController.js"
import express from "express"

class UsersRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new UsersController()
    }

    start(){
        this.router.get("/users", this.controller.getUsers)
        return this.router
    }
}

export default UsersRoutes