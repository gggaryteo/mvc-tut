class BaseController {
  constructor (model) {
    this.model = model
  }

  testRoute(_req, res) {
    return res.send('omg, you got me')
  }

}

module.exports = BaseController