const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : '',
      password : '',
      database : 'sistema_faturamento'
    },
    migrations: {
      tableName: 'migrations'
    }
  });