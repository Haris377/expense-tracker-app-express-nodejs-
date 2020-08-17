const express = require('express');
const router = express.Router();
const { getTransactions, AddTransaction, deleteTransaction } = require('../controllers/transactions')

router
    .route('/')
    .get(getTransactions);

router
    .route('/')
    .post(AddTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);    

module.exports = router;