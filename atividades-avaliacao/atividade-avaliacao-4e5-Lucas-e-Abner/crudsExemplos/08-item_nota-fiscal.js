/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_ITEM_NOTA_FISCAL').del()

  //insert
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {sequencial: 9, quantidade: 2, produto: 1, notaFiscal: 551},
    {sequencial: 10, quantidade: 2, produto: 3, notaFiscal: 552},
    {sequencial: 11, quantidade: 2, produto: 1, notaFiscal: 553}
  ]);

  //leitura
  function leitura() {
    var resultado = knex.column('produto', 'notaFiscal').select().from('TB_ITEM_NOTA_FISCAL')
    return resultado.then(function(rows){
       return rows;
   })
  }
  
  const knexRetorno = await leitura();
  console.log(knexRetorno)

  //update
  await knex('TB_ITEM_NOTA_FISCAL').where('sequencial', '=', '9')
  .update({
  quantidade: 3
  })

  //delete
  await knex('TB_ITEM_NOTA_FISCAL').where('sequencial' = '11').del()
};
