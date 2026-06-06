const { log } = require('./logger');
const path = require('path'); //add path module
const filename = path.basename(__filename); // for logging purposes

function executeQuery(pool, sql, params = []) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err,conn) {
            if (err) {
                log(filename,": Connection Error!", err.code);
                return reject(err);
            }

            conn.query(sql, params, function(err, results) {
                conn.release();
                if (err) {
                    log(filename,": Query Error!", err.code, sql, params);
                    return reject(err);
                }
                return resolve(results);
            });
        });
    })
}

function successResponse(data, meta = {}) {
    return { success: true, data, meta };
}

function errorResponse(code, message, details = null) {
    return { success: false, error: { code, message, details } };
}

module.exports = {
    executeQuery,
    successResponse,
    errorResponse
}