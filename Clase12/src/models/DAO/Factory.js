import ProdMongoModel from "./ProductsModelsMongo.js"

class Factory{
    static get(persistencia){
        switch (persistencia) {
            case "MONGO":
                console.warn("Persistencia en MongoDB.")
                return new ProdMongoModel()
            default:
                console.warn("Persistencia en default.")
                return new ProdMongoModel()
        }
    }
}

export default Factory