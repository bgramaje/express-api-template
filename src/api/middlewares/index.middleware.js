const authMiddleware = require('./auth.middleware')
const isErrorMiddleware = require('./isError.middleware')

module.exports = {
    authMiddleware,
    isErrorMiddleware
}