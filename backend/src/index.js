const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recursos
 */

/** 
 * Méthodos HTTP: interação com info do back-end
 * GET: Buscar info
 * POST: Criar Info
 * PUT: Alterar
 * DELETE: Delatar 
 */
/** Tipos de parametros: 
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação), separados por "&"
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Buider: table('users').select('*').where()
 */


// app.get('/users?name=delmar', (request, response) => {
//     return response.json({
//         evento: 'Semana omni 11',
//         aluno: 'delmar'
//     });
// });