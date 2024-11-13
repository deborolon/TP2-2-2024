import Factory from "../models/DAO/Factory.js"
import config from "../config.js"

class UsersService{

    constructor(){
        this.model = Factory.get(config.PERSISTENCE).users
    }

    getUsers = async () => {
        const prod = await this.model.getUsers()
        return prod
    }
}

export default UsersService