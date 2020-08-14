// @desc   Get all transactions
// @route  Get /api/v1/transactions
// @access public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

// @desc   Add transaction
// @route  POST /api/v1/transactions
// @access public
exports.AddTransaction = (req, res, next) => {
    res.send('POST transaction');
}

// @desc   Delete transaction
// @route  DELETE /api/v1/transactions/:id
// @access public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction');
}