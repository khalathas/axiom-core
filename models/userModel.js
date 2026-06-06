const { executeQuery } = require('../utils/dbUtils');

async function getUserById(pool, id) { throw new Error('Not implemented'); }

async function createUser(pool, data) { throw new Error('Not implemented'); }

async function updateUser(pool, id, data) { throw new Error('Not implemented'); }

async function deleteUser(pool, id) { throw new Error('Not implemented'); }

module.exports = {
    getUserById,
    createUser,
    updateUser,
    deleteUser
}   
