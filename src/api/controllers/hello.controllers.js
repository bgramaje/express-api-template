
/**
 * @description it returns to the client a welcome message!
 * @param {*} req 
 * @param {*} res 
 * @returns json formatted response as 'HELLO - 👋🌎🌍🌏'
 */
const hello = async (req, res) => {
    return res.json({
        message: 'HELLO - 👋🌎🌍🌏'
    });
}

module.exports = {
    hello
}