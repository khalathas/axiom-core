const { executeQuery } = require('../utils/dbUtils');

async function getClasses(pool) {

    // build sql statement with variable placeholders
    const sql = 'SELECT c.id, c.name as "Name", b.name as "Sourcebook" FROM classes c left join source_books b on c.source_book_id = b.id order by c.name asc';
    const params = [];

    return executeQuery(pool,sql,params);

}

async function getClassesByBookId(pool, bookId) {

    // build sql statement with variable placeholders
    const sql = 'SELECT c.name as "Class", b.name as "Source Book" FROM classes c left join source_books b on c.source_book_id = b.id where b.id = ? order by c.name asc';
    const params = [bookId];

    return executeQuery(pool,sql,params);

}

async function getSourcebooks(pool) { throw new Error('Not implemented'); }


module.exports = {
    getClasses,
    getClassesByBookId,
    getSourcebooks
}   
