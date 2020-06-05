import Knex from 'knex';

const { onUpdateTrigger } = require('../../../knexfile');

export async function up(knex:Knex) {
  return knex.schema.createTable('projects', function(table) {
    table.increments('id')
    table.text('title').notNullable()
    table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE')
    table.timestamps(true, true)
  }).then(() => knex.raw(onUpdateTrigger('projects')))
}
export async function down(knex:Knex) {knex.schema.dropTable('projects')}

