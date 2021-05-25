const express = require('express');

const router = express.Router();

const { helloCtrl } = require('../controllers/index.controllers');

/**
 * @description /, 👋 displays a hello message!
 * @param {*} rute
 * @param {function()} hello function from Hello Controller
 */
router.get('/', helloCtrl.hello);

module.exports = router;