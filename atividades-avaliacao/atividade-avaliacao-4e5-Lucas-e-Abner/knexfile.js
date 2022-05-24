module.exports = {
    client: "sqlite3",
    connection: {
        database: "sistema_faturamento.sqlite3",
        user: "root",
        password: "",
        filename: "./sistema_faturamento.sqlite3"
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}



