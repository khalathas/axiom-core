const { executeQuery } = require('../utils/dbUtils');

async function getFeats(pool) {

    // build sql statement with variable placeholders
    const sql = 'SELECT * FROM feats f';
    const params = [];

    return executeQuery(pool,sql,params);

}

async function getFeatById(pool, id) {

    // build sql statement with variable placeholders
    const sql = 'SELECT * FROM feats f where f.id = ?';
    const params = [id];

    return executeQuery(pool,sql,params);
}   


module.exports = { 
    getFeats,
    getFeatById 
}