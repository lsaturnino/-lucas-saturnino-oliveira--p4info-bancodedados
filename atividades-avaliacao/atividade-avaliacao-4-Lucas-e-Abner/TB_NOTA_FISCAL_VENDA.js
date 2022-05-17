exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_NOTA_FISCAL_VENDA', table => {
        table.increments('id').primary()
        table.string('codigo').notNull().unique()
        table.string('data').notNull()
        table.float('valorNota').notNull()
        table.string('cliente').references('CLIENTE.id')
        table.integer('items').references('TB_ITEM_NOTA_FISCAL.id')
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_NOTA_FISCAL_VENDA')
}


