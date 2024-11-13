import MongoConnection from "../MongoConnection.js"

class UsersModelsMongo{
    constructor(){ 
    }

    getUsers = async () => {
        const data = await MongoConnection.db.collection("users").find({}).toArray()
        return data
    }

}

export default UsersModelsMongo