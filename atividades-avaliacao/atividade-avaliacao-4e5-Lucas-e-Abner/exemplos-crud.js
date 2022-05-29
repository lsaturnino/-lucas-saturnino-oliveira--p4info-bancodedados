const database = require("./config/database");
/*
                INSERTS: LINHAS 13 - 103;
                SELECT: LINHAS 114 - 139;
                UPDATE: LINHAS 149 - 175;
                DELETE: LINHAS 185 - 210;
*/

//========================================================================================

//                INSERTS

//========================================================================================
//DADOS TB_CLIENTE
var dadosTBCliente = [
    {
        codigo: 5,
        cnpjcpf: "998.065.325-89",
        nome: "Fernada Damares Silva"
    },
    {
        codigo: 6,
        cnpjcpf: "095.667.443-69",
        nome: "Marília Auxiliadora das Graças Fonseca"
    }
]

//DADOS TB_PRODUTO
var dadosTBProdutos = [
    {
        codigo: 12,
        descricao: "1L de leite Maralita - Zero Lactose",
        valor: 4.50,
    }, 
    {
        codigo: 21,
        descricao: "Caderno Carro Fusca - 12 Matérias",
        valor: 16.0
    }

]

//DADOS TB_NOTA_FISCAL_VENDA
var dadosTBNotaFiscalVenda = [
    {
        codigo: 554,
        data: 21/05/2022,
        valorNota: 20.50,
        cliente: 3,
        items: 4,
    },
    {
        codigo: 555,
        data: 21/05/2022,
        valorNota: 20.50,
        cliente: 5,
        items: 5
    }
]

//INSERIDO DADOS NA TB_ITEM_NOTA_FISCAL
var dadosTBItemNotaFiscal = [
    {
        sequencial: 4,
        quantidade: 2,
        produto: [12,21],
        notaFiscal: 554
    },
    {
        sequencial: 5,
        quantidade: 2,
        produto: 21,
        notaFiscal: 555
    }
]

//INSERIDO DADOS NA TB_CLIENTE
database.insert(dadosTBCliente).into("TB_CLIENTE").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


//INSERIDO DADOS NA TB_PRODUTO
database.insert(dadosTBProdutos).into("TB_PRODUTO").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


//INSERIDO DADOS NA TB_NOTA_FISCAL_VENDA
database.insert(dadosTBNotaFiscalVenda).into("TB_NOTA_FISCAL_VENDA").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//INSERIDO DADOS NA TB_ITEM_NOTA_FISCAL_VENDA
database.insert(dadosTBItemNotaFiscal).into("TB_ITEM_NOTA_FISCAL").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


//========================================================================================

//               SELECTS

//========================================================================================

//SELECT NA TB_CLIENTE
database.select(["codigo", "nome"]).table("TB_CLIENTE").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

//SELECT NA TB_PRODUTO
database.select(["codigo", "descricao", "valor"]).table("TB_PRODUTO").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

//SELECT NA TB_NOTA_FISCAL_VENDA
database.select(["codigo", "data", "valorNota", "cliente"]).table("TB_NOTA_FISCAL_VENDA").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

//SELECT NA TB_ITEM_NOTA_FISCAL
database.select(["sequencial", "quantidade", "produto", "notaFiscal"]).table("TB_ITEM_NOTA_FISCAL").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

//========================================================================================

//                  UPDATES

//========================================================================================

//UPDATE NA TB_CLIENTE
database.where({codigo: 2}).update({cnpjcpf: "35.125.489/10255", nome: "HONDURAS TURISMO"}).table("TB_CLIENTE").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

//UPDATE NA TB_PRODUTO
database.where({codigo: 74}).update({valor: 3.0}).table("TB_PRODUTO").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

//UPDATE NA TB_NOTA_FISCAL_VENDA
//um cliente MASTER
database.where({cliente: 1}).update({valorNota: 0}).table("TB_NOTA_FISCAL_VENDA").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

//UPDATE NA TB_ITEM_NOTA_FISCAL
database.where({notaFiscal: 555}).update({produto: 1}).table("TB_ITEM_NOTA_FISCAL").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

//========================================================================================
                
                      //DELETES

//========================================================================================    

//DELETE NA TB_CLIENTE
database.where({codigo: 5}).delete().table("TB_CLIENTE").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//DELETE NA TB_PRODUTO
database.where({codigo: 78}).delete().table("TB_PRODUTO").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//DELETE TB_NOTA_FISCAL_VENDA
database.where({cliente: 3}).delete().table("TB_NOTA_FISCAL_VENDA").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//DELETE TB_ITEM_NOTA_FISCAL
database.where({notaFiscal: 551}).delete().table("TB_ITEM_NOTA_FISCAL").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});