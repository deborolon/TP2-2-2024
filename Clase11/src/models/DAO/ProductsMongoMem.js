import MongoConnection from "../MongoConnection.js"

class ProdMongoModel{
    constructor(){ 
    }

    getProd = async () => {
        const products = await MongoConnection.db.collection("products").find({}).toArray()
        return products
    }
    
    postProd = async (data) => {
        const newProduct = await MongoConnection.db.collection("products").insertOne(data)
        return newProduct
    }

    //clase que viene...
}

export default ProdMongoModel