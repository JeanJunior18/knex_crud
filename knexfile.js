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
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
  onUpdateTrigger: table  => `
  CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  `

};
