import 'dotenv/config';

const URL =process.env.DATABASE_CONNECT_URL

module.exports = {

  development: {
    client: 'pg',
    connection: URL,
    migrations: {
      directory: `${__dirname}/src/database/migration`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },

};
