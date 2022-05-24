/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_ITEM_NOTA_FISCAL').del()
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {sequencial: 1, quantidade: 2, produto: 1, notaFiscal: 1},
    {sequencial: 2, quantidade: 2, produto: 3, notaFiscal: 3},
    {sequencial: 3, quantidade: 2, produto: 1, notaFiscal: 1}
  ]);
};
