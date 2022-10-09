/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  await knex('cars').insert([
    {id: 1, make: 'germany',model:'bmw',year:1965},
    {id: 2, make: 'usa',model:'lincoln',year:1970},
    {id: 3, make: 'russia',model:'vaz',year:1950},
  ]);
};
