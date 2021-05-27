const express = require('express');
const asyncHandler = require('express-async-handler')

const router = express.Router();

const { helloCtrl } = require('../controllers/index.controllers');

/**
 * @description /, 👋 displays a hello message!
 * @param {*} rute
 * @param {function()} hello function from Hello Controller, 
 * wrapped it with asyncHandler, to handler errors
 */
router.get('/', asyncHandler(helloCtrl.hello));

module.exports = router;