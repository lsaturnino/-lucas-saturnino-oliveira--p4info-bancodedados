/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PRODUTO', table => {
        table.increments('id').primary()
        table.integer('codigo').notNull().unique()
        table.string('descricao').notNull()
        table.float('valor').notNull()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PRODUTO')
};