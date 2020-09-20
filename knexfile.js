// Update with your config settings.

module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'ab9903',
      database : 'banco_quiz'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database`
    }
  }

};
