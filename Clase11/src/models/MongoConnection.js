import { MongoClient } from "mongodb"
import config from "../config.js"

class MongoConnection{
    // static client = null
    // static db = null

    // static connect = async () => {
    //     this.client = new MongoClient(config.STRC)
    //     await this.client.connect()
    //     this.db = this.client.db(config.NAMEBASE)
    // }

    static client = new MongoClient(config.STRC)
    static db = this.client.db(config.NAMEBASE)

    static connect = async () => {
        await this.client.connect()
    }

}

export default MongoConnection