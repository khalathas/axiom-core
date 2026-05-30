const { executeQuery } = require('../utils/dbUtils');

async function getSpells(pool) {

    // build sql statement with variable placeholders
    const sql = 'SELECT * FROM spells s';
    const params = [];

    return executeQuery(pool,sql,params);

}

async function getSpellById(pool, id) {

    // build sql statement with variable placeholders
    const sql = 'SELECT * FROM spells s where s.id = ?';
    const params = [id];

    return executeQuery(pool,sql,params);
}   

async function getSpellsByField(pool, field, value) {

    // store parameters in variables
    const params = [field, ['%' + value + '%']];

    // build sql statement with variable placeholders
    const sql = 'SELECT * FROM spells s where ?? LIKE ?';

    return executeQuery(pool,sql,params);
}

async function getSpellsByClass(pool, className) { throw new Error('Not implemented'); }

async function getSpellsByClassAndLevel(pool, className, level) { throw new Error('Not implemented'); }

async function searchSpells(pool, filters) { throw new Error('Not implemented'); }

module.exports = {
    getSpells,
    getSpellById,
    getSpellsByField,
    getSpellsByClass,
    getSpellsByClassAndLevel,
    searchSpells
}   
