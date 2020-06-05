import Knex from 'knex';

const { onUpdateTrigger } = require('../../../knexfile');

export async function up(knex:Knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id')
    table.text('username').unique().notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  }).then(() => knex.raw(onUpdateTrigger('users')))
}
export async function down(knex:Knex) {knex.schema.dropTable('users')}
