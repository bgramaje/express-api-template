/**
 * index.js
 * It contains all imports and exports them as a single object, in order to import it in a cleaner way
 */
const authMiddleware = require('./auth.middleware')
const isErrorMiddleware = require('./isError.middleware')

module.exports = {
    authMiddleware,
    isErrorMiddleware
}