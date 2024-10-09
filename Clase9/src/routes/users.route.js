import UsersController from "../controllers/users.controller.js"
import express from "express"

//Nombres de las clases SIEMPRE mayúscula!!!
class Router {
    constructor() {
        this.router = express.Router()
        this.controller = new UsersController()
        //si quisiera manejar varios controladores desde un mismo router
        // this.controllerUSers = new UsersController()
    }

    start(){
        this.router.get("/users", this.controller.getAllUsers)
        //Resto de declaración de rutas
        // this.router.get("/users/:id")

        //Esta forma de retornar aplica en esta capa específicamente!
        return this.router
    }
}

export default Router