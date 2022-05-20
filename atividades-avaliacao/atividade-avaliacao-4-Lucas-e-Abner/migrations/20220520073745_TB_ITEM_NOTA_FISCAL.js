/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ITEM_NOTA_FISCAL', table => {
        table.increments('id').primary()
        table.integer('sequencial').notNull().unique()
        table.integer('quantidade').notNull()
        table.string('produto').references('TB_PRODUTO.id')
        table.string('notaFiscal').references('TB_NOTA_FISCAL_VENDA.id')
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ITEM_NOTA_FISCAL')
}

