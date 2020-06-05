import Knex from 'knex';

export default function(knex:Knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'admin'}
      ]);
    });
};
