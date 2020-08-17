const express = require('express')
const uuid = require("uuid");
// To make a var global
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({path: './config/config.env'});

const transactions = require('./routes/transactions');

//initialize express app
const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));