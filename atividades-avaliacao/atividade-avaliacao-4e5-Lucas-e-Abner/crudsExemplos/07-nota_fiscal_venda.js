/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_NOTA_FISCAL_VENDA').del()

  //insert
  await knex('TB_NOTA_FISCAL_VENDA').insert([
    {codigo: 551, data:"20/05/2022", valorNota: 5, cliente: 1, items: 1},
    {codigo: 552, data:"20/05/2022", valorNota: 16, cliente: 2, items: 2},
    {codigo: 553, data:"20/05/2022", valorNota: 18, cliente: 3, items: 3},
  ]);

  //read
  function leitura() {
    var resultado = knex.column('valorNota', 'cliente').select().from('TB_NOTA_FISCAL_VENDA')
    return resultado.then(function(rows){
       return rows;
   })
  }
  
  const knexRetorno = await leitura();
  console.log(knexRetorno)


  //UPDATE
  await knex('TB_NOTA_FISCAL_VENDA').where('codigo', '=', '551')
  .update({
  cliente: 2
})

//delete
await knex('TB_NOTA_FISCAL_VENDA').where('codigo' = '552').del()

};
