import Knex from 'knex';

export async function up(knex:Knex) {
  return knex.schema.alterTable('users', function(table) {
    table.timestamp('deleted_at')
  })
}
export async function down(knex:Knex) {
  knex.schema.alterTable('users', function(table) {
    table.dropColumn('deleted_at')
  })
}
