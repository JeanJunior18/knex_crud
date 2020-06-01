const knex = require('../database');

module.exports = {
  async index(req, res, next){
    try {
      const { user_id, page = 1 } = req.query;

      const query = knex('projects')
      .limit(5)
      .offset((page - 1)*5);

      const countQuery = knex('projects').count()

      if(user_id){
        query
        .where({ user_id })
        .join('users', 'users.id', '=', 'projects.user_id')
        .select('projects.*', 'users.username')

        countQuery.where({ user_id })
      }
      else{
        query
        .join('users', 'users.id', '=', 'projects.user_id')
        .select('projects.*', 'users.username')
      }

      const projects = await query;
      const [count] = await countQuery;

      res.header('X-Total-Count', count['count']);
      return res.json(projects)
    } catch (error) {
      next(error)
    }
  },
  async create(req, res, next){
    try {
      const { title, user_id } = req.body;

      await knex('projects')
      .insert({ user_id, title })

    return res.status(201).send();
    } catch (error) {
      next(error)
    }
  }
}