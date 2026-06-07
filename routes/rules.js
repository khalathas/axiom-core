// Main routes file for SRD specific endpoints

const express = require('express');
const srd = express.Router();
const spellController = require('../controllers/spellController.js');
const classController = require('../controllers/classController.js');
const featController = require('../controllers/featController.js');

// Spell routes
srd.route('/spells')
    .get(spellController.getAll);

srd.route('/spells/id/:id')
    .get(spellController.getById);

srd.route('/spells/field/:field/:value')
    .get(spellController.getByField);

// srd.route('/spells/class/:className') // not ready yet

// srd.route('/spells/class/:className/level/:level') // not ready yet

// Class routes
srd.route('/classes')
    .get(classController.getAll);

srd.route('/classes/book/:bookId')
    .get(classController.getByBookId);

// Feat routes
srd.route('/feats')
    .get(featController.getAll)
    .post(featController.create);

srd.route('/feats/type/:type')
    .get(featController.getByType);

srd.route('/feats/:id')
    .get(featController.getById)
    .patch(featController.updateById)
    .delete(featController.deleteById);



// Book routes
// srd.route('/sourcebooks') // not ready yet

module.exports = srd