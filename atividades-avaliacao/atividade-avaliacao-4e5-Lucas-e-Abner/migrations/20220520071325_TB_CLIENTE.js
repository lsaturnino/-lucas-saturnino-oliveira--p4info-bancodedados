/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.increments('id').primary()
        table.integer('codigo').notNull().unique()
        table.string('cnpjcpf').notNull().unique()
        table.string('nome').notNull()
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_CLIENTE')
};