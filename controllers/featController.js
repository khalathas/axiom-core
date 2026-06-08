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
    const { name, source_book_id } = req.body;
    if (!name) return res.status(400).json(errorResponse("MISSING_NAME", "Name is required"));
    if (!source_book_id) return res.status(400).json(errorResponse("MISSING_SOURCE_BOOK", "Source Book ID is required"));
    try {
        const result = await featModel.createFeat(pool, req.body);
        const newFeat = await featModel.getFeatById(pool, result.insertId);
        res.status(201).json(successResponse(newFeat[0]));
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
    const { id } = req.params;
    try {
        const result = await featModel.updateFeat(pool, id, req.body);
        if (!result.affectedRows) return res.status(404).json(errorResponse("NOT_FOUND", "Feat not found."));
        const updated = await featModel.getFeatById(pool, id);
        res.json(successResponse(updated[0]));
    } catch (err) {
        log(filename, err);
        res.status(500).json(errorResponse('DB_ERROR', 'Database error'));
    }
}

async function deleteById(req, res) {
    const pool = req.app.locals.db;
    const { id } = req.params;
    try {
        const result = await featModel.deleteFeat(pool, id);
        if (!result.affectedRows) return res.status(404).json(errorResponse("NOT_FOUND", "Feat not found."));
        res.json(successResponse(null, { message: "Feat deleted successfully" }));
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