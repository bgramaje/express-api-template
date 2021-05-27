const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const {
    isErrorMiddleware,
    authMiddleware
} = require('./api/middlewares/index.middleware');

const {
    helloRouter
} = require('./api/routes/index.routes')

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: '🌈👋🌎'
    });
});

app.use('/hello', helloRouter)

app.use(isErrorMiddleware.notFound);
app.use(isErrorMiddleware.errorHandler);

module.exports = app;
