//Se puede ver en knexjs.org las distintas formas de crear las migrations
exports.up = function (knex) {
  return knex.schema.createTable("country", function (table) {
    table.string("id").primary(); //Uso string porque vamos a usar UUID sino podria ser-> table.increments('id');
    table.string("name", 255);
    table.string("code", 255);
    table.string("iso2", 2);
    table.boolean("deleted");
    table.timestamp("createdAt");
    table.timestamp("updatedAt");
    table.timeStamp("deletedAt");
    table.integer("__v");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("country");
};
