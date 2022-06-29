/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_PRODUTO').del()

  //INSETRS
  await knex('TB_PRODUTO').insert([
    {codigo: 75, descricao: "Suco de Melao - Pandora 200ml", valor: 2.50},
    {codigo: 98, descricao: "Barra Chocolate Kirchoff 200g", valor: 9.0}
  ]);

  //read
  function leitura() {
    var resultado = knex.column('codigo', 'descricao').select().from('TB_PRODUTO')
    return resultado.then(function(rows){
       return rows;
   })
  }
  
  const knexRetorno = await leitura();
  console.log(knexRetorno)

  //UPDATE
  await knex('TB_PRODUTO').where('codigo', '=', '75')
  .update({
  valor: 3.75
})

//delete
await knex('TB_PRODUTO').where('codigo' = '98').del()
};
