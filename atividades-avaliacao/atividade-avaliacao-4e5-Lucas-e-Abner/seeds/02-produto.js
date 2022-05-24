/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_PRODUTO').del()
  await knex('TB_PRODUTO').insert([
    {codigo: 74, descricao: "Suco de Morango - Pandora 200ml", valor: 2.50},
    {codigo: 78, descricao: "1kg Arroz Dom Quitim", valor: 8.0},
    {codigo: 95, descricao: "Barra Chocolate Denden 200g", valor: 9.0}
  ]);
};
