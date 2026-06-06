const { log } = require('../utils/logger');
const path = require('path'); //add path module
const filename = path.basename(__filename); // for logging purposes
const systemModel = require('../models/systemModel');
const { successResponse, errorResponse } = require('../utils/dbUtils');

/* basic handler shape for all handlers - just change the model function that gets shoved into data
async function getAll(req, res) {
    const pool = req.app.locals.db;
    try {
        const data = await spellModel.getSpells(pool);
        if (!data.length) return res.status(404).json(errorResponse("NOT_FOUND", "No spells found"));
        res.json(successResponse(data, { count: data.length }));
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}
*/

async function healthCheck(req, res) {
    const pool = req.app.locals.db;
    try {
        await systemModel.healthCheck(pool);
        res.json(successResponse({ status: 'ok', timestamp: new Date().toISOString(), database: 'connected' }));
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

module.exports = {
    healthCheck
}
