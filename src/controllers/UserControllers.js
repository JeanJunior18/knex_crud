const knex = require('../database');

module.exports = {
  async users(req, res){
    const users = await knex('users');

    return res.json(users)
  }
}