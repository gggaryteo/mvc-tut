const BaseController = require('./baseController')

class UsersController extends BaseController {
  constructor(model) {
    super(model)

  }

  signUp (req, res) {
    const { name , email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json( { success: false, msg: 'You have some missing information'})
    }
  }

}

module.exports = UsersController