const { log } = require('../utils/logger');
const path = require('path'); //add path module
const filename = path.basename(__filename); // for logging purposes
// const userModel = require('../models/userModel'); // Uncomment when model functions are implemented
const { successResponse, errorResponse } = require('../utils/dbUtils');


async function getById(req, res) {
    res.status(501).json(errorResponse('NOT_IMPLEMENTED', 'This endpoint is not yet implemented'));
}

module.exports = {
    getById
}
