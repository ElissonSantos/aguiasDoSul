exports.up = function(knex) {
    return knex.schema.createTable('pontualidade', function(table) {
      table.string('id').primary();
      table.string('values').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('pontualidade');
  };
  