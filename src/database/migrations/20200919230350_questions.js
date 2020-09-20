
exports.up = function(knex) {
  return knex.schema.createTable('questions', function(table) {
    table.increments('id')
    table.text('question').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('questions');
};
