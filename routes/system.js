// system endpoints

const express = require('express');
const system = express.Router();
const systemController = require('../controllers/systemController.js');

system.route('/health')
    .get(systemController.healthCheck);

module.exports = system;
