import UsersService from "../services/users.service.js";

class UsersController {
  constructor() {
    this.service = new UsersService()
  }

  getAllUsers = async (req, res) => {
    const data = await this.service.getAllUsers()
    //también funciona -> res.send(await this.service.getAllUsers())
    res.send(data)
  }
}

export default UsersController