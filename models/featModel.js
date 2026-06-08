const { executeQuery } = require('../utils/dbUtils');
const PATCHABLE = ['name', 'feat_type', 'prerequisites', 'benefit', 'normal', 'special', 'description'];


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

async function getFeatsByType(pool, type) {
    const sql = 'SELECT * FROM feats f where f.feat_type = ?';
    const params = [type];
    return executeQuery(pool,sql,params);
}

async function createFeat(pool, data) {

    return executeQuery(pool,sql,params);
}

async function updateFeat(pool, id, data) {

    return executeQuery(pool,sql,params);
}

async function deleteFeat(pool, id) {

    return executeQuery(pool,sql,params);
}



module.exports = { 
    getFeats,
    getFeatById,
    getFeatsByType,
    createFeat,
    updateFeat,
    deleteFeat
}
