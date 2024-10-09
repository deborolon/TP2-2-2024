import fs from "fs"

class UserFsModel {
    constructor(){
        this.users = "users.json"
    }

    getAllUsers = async () => {
        return await fs.promises.readFile(this.users, "utf-8")
    }
}

export default UserFsModel