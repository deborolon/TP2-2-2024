import animalsController from "../controllers/animals.controller.js";
import express from "express"

const router = express.Router()

//verbo + ruta + controlador
router.get("/animals", animalsController.getAllAnimals)
router.post("/animals", animalsController.postAnimals)
//Actualización de todo el contenido
router.put("/animals/update/all/:id", animalsController.putAnimals)
//Actualización de una parte
router.patch("/animals/update/:id", animalsController.patchAnimals)
router.delete("/animals/delete/:id", animalsController.deleteAnimals)

export default router