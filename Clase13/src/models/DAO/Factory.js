import ProdMongoModel from "./ProductsModelsMongo.js"
import UsersModelsMongo from "./UsersModelsMongo.js"

class Factory{
    static get(persistencia){
        switch (persistencia) {
            case "MONGO":
                console.warn("Persistencia en MongoDB.")
                return {
                    products: new ProdMongoModel(),
                    users: new UsersModelsMongo()
                }
            // case "MEMORY":
            //     console.warn("Persistencia en memoria del servidor.")
            //     return {
            //         products: new ProdMemoryModel(),
            //         users: new UsersMemoryMongo()
            //     }
            default:
                console.warn("Persistencia en default.")
                return new ProdMongoModel()
        }
    }
}

export default Factory