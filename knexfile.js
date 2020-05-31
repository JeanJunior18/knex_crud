// Update with your config settings.
/**
 * To create this file use:
 * yarn knex init
 * 
 * To create migrations use:
 * yarn knex migrate:make name_migration
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_test',
      user: 'postgres',
      password: 'postgres',
    },
    migrations: {
      directory: `${__dirname}/src/database/migration`
    }
  },

};
