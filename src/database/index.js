const knexfile = require('../../knexfile.js')

const knex = require('knex')(knexfile.production);

module.exports = knex