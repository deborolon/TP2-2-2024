import UsersService from "../services/UsersService.js";

class UsersController {
  constructor() {
    this.service = new UsersService()
  }

  getUsers = async (req, res) => {
    const usr = await this.service.getUsers()
    res.send(usr)
  }
}

export default UsersController