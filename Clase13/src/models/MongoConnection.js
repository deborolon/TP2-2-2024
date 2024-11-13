import { MongoClient } from "mongodb"
import config from "../config.js"

class MongoConnection{

    static client = new MongoClient(config.STRC)
    static db = this.client.db(config.NAMEBASE)

    static connection = async () => {
        await this.client.connect()
    }

}

export default MongoConnection