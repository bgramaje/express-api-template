const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const {
    isErrorMiddleware,
} = require('./api/middlewares');

const {
    helloRouter
} = require('./api/routes')

const {
    HOME,
    HELLO
} = require('./config/routes')

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(HOME, (req, res) => {
    res.json({
        message: 'HOME - 🌈👋🌎'
    });
});

app.use(HELLO, helloRouter)

app.use(isErrorMiddleware.notFound);
app.use(isErrorMiddleware.errorHandler);

module.exports = app;
