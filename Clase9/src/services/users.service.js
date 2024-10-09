import Factory from "../models/Factory.js"

//DATA ACCESS OBJECT
class UsersService {
    constructor() {
        //Intanciar una clase -> usar "new" + nombre de la clase
        // this.model = new UserMemModel()
        // this.model = new UserFsModel()

        //No necesito instanciar la clase Factory
        this.model = Factory.get("")
    }

    getAllUsers = async () => {
        return await this.model.getAllUsers()
    }

}

export default UsersService