const express = require('express')
// To make a var global
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({path: './config/config.env'});

const transactions = require('./routes/transactions');

//initialize express app
const app = express();

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));