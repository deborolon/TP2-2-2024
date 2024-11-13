import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"

class ProdMongoModel{
    constructor(){ 
    }

    getProd = async () => {
        const data = await MongoConnection.db.collection("products").find({}).toArray()
        return data
    }

    getProdById = async (id) => {
        const data = await MongoConnection.db.collection("products").findOne({ _id: ObjectId.createFromHexString(id) })
        return data
    }

    getProdByColor = async (color) => {
        const data = await MongoConnection.db.collection("products").find({ color: color }).toArray()
        return data
    }
    
    postProd = async (data) => {
        const prod = await MongoConnection.db.collection("products").insertOne(data)
        return prod
    }

    patchProd = async (id, data) => {
        const prod = await MongoConnection.db.collection("products").updateOne(
            {_id: ObjectId.createFromHexString(id)},
            {$set: data}
        )
        return prod
    }

    putProd = async (id, data) => {
        const prod = await MongoConnection.db.collection("products").replaceOne(
            {_id: ObjectId.createFromHexString(id)},
            data
        )
        return prod
    }

    deleteProd = async (id) => {
        const prod = await MongoConnection.db.collection("products").deleteOne(
            {_id: ObjectId.createFromHexString(id)}
        )
        return prod
    }

}

export default ProdMongoModel