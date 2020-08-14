const express = require('express');
const router = express.Router();
const { getTransactions, AddTransaction, deleteTransaction } = require('../controllers/transactions')

//pretend to route server line 14
router
    .route('/')
    .get(getTransactions)
    .post(AddTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);    

module.exports = router;