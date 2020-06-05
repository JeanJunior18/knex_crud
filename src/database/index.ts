import Knex from 'knex';

const knexfile = require('../../knexfile');

const knex = require('knex')(knexfile.development);

export default knex;