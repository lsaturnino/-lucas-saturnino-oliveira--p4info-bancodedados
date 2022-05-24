/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_NOTA_FISCAL_VENDA').del()
  await knex('TB_NOTA_FISCAL_VENDA').insert([
    {codigo: 551, data:"20/05/2022", valorNota: 5, cliente: 1, items: 1},
    {codigo: 552, data:"20/05/2022", valorNota: 16, cliente: 2, items: 2},
    {codigo: 553, data:"20/05/2022", valorNota: 18, cliente: 3, items: 3},
  ]);
};
