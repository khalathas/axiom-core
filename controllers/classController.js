const { log } = require('../utils/logger');
const path = require('path'); //add path module
const filename = path.basename(__filename); // for logging purposes
const classModel = require('../models/classModel');
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

async function getAll(req, res) {
    const pool = req.app.locals.db;
    try {
        const data = await classModel.getClasses(pool);
        if (!data.length) return res.status(404).json(errorResponse("NOT_FOUND", "No classes found"));
        res.json(successResponse(data, { count: data.length }));
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

async function getByBookId(req, res) {
    const pool = req.app.locals.db;
    const { bookId } = req.params;
    if (!bookId) return res.status(400).json(errorResponse("MISSING_ID", "Book ID parameter is required"));
    try {
        const data = await classModel.getClassesByBookId(pool, bookId);
        if (!data.length) return res.status(404).json(errorResponse("NOT_FOUND", "No classes found"));
        res.json(successResponse(data, { count: data.length }));
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

async function getSourcebooks(req, res) {
    const pool = req.app.locals.db;
    try {
        const data = await classModel.getSourcebooks(pool);
        if (!data.length) return res.status(404).json(errorResponse("NOT_FOUND", "No source books found"));
        res.json(successResponse(data, { count: data.length }));
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

module.exports = {
    getAll,
    getByBookId,
    getSourcebooks
}