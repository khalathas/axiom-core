const { log } = require('../utils/logger');
const path = require('path'); //add path module
const filename = path.basename(__filename); // for logging purposes

async function healthCheck(pool) { 
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err,conn) {
            if (err) {
                log(filename,": Connection Error!", err.code);
                return reject(err);
            }
            conn.release();
            return resolve();
        });
    })
}

module.exports = {
    healthCheck
}   
