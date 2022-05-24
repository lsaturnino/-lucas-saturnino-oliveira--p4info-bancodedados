/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_CLIENTE').del()
  await knex('TB_CLIENTE').insert([
    {codigo: 1, cnpjcpf: "102.239.403-12", nome: "João Vasconcelos de Lima"},
    {codigo: 2, cnpjcpf: "182.239.453-12", nome: "Amanda de Menezes"},
    {codigo: 3, cnpjcpf: "192.279.903-41", nome: "Isadora Oliveira Souza"},
    {codigo: 4, cnpjcpf: "15.475.475/00139", nome: "SATURNINO LTDA"}
  ]);
};