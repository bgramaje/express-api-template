const jwt = require('jsonwebtoken')

/**
 * @description It checks if a given token in a request is valid or not.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns an invalid state of the token, if it does not return anything, the token is correct and it proceeds to the next() call.
 */
const authToken = async (req, res, next) => {
    const token = req.headers['x-access-token']
    if (!token) return res.status(401).send({ token: null, reason: '⛔ NO TOKEN PROVIDED ⛔' })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send({ auth: false, token: token, reason: '⚠️ INVALID TOKEN ⚠️' })
        req.user = user
        next()
    })
}

module.exports = {
    authToken,
};