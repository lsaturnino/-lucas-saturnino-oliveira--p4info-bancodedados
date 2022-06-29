/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_CLIENTE').del()

  //insert
  await knex('TB_CLIENTE').insert([
    {codigo: 5, cnpjcpf: "102.239.403-12", nome: "João Vasconcelos de Lima"},
    {codigo: 6, cnpjcpf: "182.239.453-12", nome: "Amanda de Menezes"}
  ]);


//read
function leitura() {
  var resultado = knex.column('codigo', 'cnpjcpf').select().from('TB_CLIENTE')
  return resultado.then(function(rows){
     return rows;
 })
}

const knexRetorno = await leitura();
console.log(knexRetorno)

//UPDATE
await knex('TB_CLIENTE').where('cnpjcpf', '=', '182.239.453-12')
.update(
  {
  cnpjcpf: "20434.345/35",
  nome: "AMERICANAS SOELK DOMESTICOS"
})

//DELETE 
await knex('TB_CLIENTE').where('cnpjcpf' = '102.239.403-12').del()
};