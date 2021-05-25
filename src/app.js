const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const { isErrorMiddleware } = require('./api/middlewares/index.middleware');
const { helloRouter } = require('./api/routes/index.routes')

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: '🌈👋🌎'
    });
});

app.use('/hello', helloRouter)

app.use(isErrorMiddleware.notFound);
app.use(isErrorMiddleware.errorHandler);

module.exports = app;
