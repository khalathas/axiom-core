function log(...args) {
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV !== 'production') console.log(...args);
}

module.exports = {
    log
}
