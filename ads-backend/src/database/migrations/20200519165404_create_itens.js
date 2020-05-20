exports.up = function(knex) {
  return knex.schema.createTable('itens', function(table) {
    table.string('id').primary();
    table.string('values').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('itens');
};
