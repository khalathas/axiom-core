const { log } = require('../utils/logger');
const path = require('path'); //add path module
const filename = path.basename(__filename); // for logging purposes
const featModel = require('../models/featModel');
const { successResponse, errorResponse } = require('../utils/dbUtils');

async function getAll(req, res) {
    const pool = req.app.locals.db;
    try {
        const data = await featModel.getFeats(pool);
        if (!data.length) return res.status(404).json(errorResponse("NOT_FOUND", "No feats found"));
        res.json(successResponse(data, { count: data.length }));
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

async function getById(req, res) {
    const pool = req.app.locals.db;
    const { id } = req.params;
    if (!id) return res.status(400).json(errorResponse("MISSING_ID", "ID parameter is required"));
    try {
        const data = await featModel.getFeatById(pool, id);
        if (!data.length) return res.status(404).json(errorResponse("NOT_FOUND", "Feat not found"));
        res.json(successResponse(data[0]));
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

async function create(req, res) {
    const pool = req.app.locals.db;
    try {
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

async function getByType(req, res) {
    const pool = req.app.locals.db;
    const { type } = req.params;
    try {
        const data = await featModel.getFeatsByType(pool, type);
        if (!data.length) return res.status(404).json(errorResponse("NOT_FOUND", `No feats found for type: ${type}`));
        res.json(successResponse(data, { count: data.length }));
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

async function updateById(req, res) {
    const pool = req.app.locals.db;
    try {

    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

async function deleteById(req, res) {
    const pool = req.app.locals.db;
    try {

    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}


module.exports = { 
    getAll,
    getById,
    create,
    getByType,
    updateById,
    deleteById
}