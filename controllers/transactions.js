//initial state
const Transactions = [
  {
    id: 1,
    text: "payment",
    amount: 500,
  },
  {
    id: 2,
    text: "Bill",
    amount: 200,
  },
];

// @desc   Get all transactions
// @route  Get /api/v1/transactions
// @access public
exports.getTransactions = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      count: Transactions.length,
      data: Transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc   Add transaction
// @route  POST /api/v1/transactions
// @access public
exports.AddTransaction = async (req, res, next) => {
  try {
    const transaction = await Transactions.push(req.body);
    return res.status(200).json({
      success: true,
      data: Transactions,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc   Delete transaction
// @route  DELETE /api/v1/transactions/:id
// @access public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transactions.some(
      (transaction) => transaction.id === parseInt(req.params.id)
    );
    if (transaction) {
      const transactions = await Transactions.filter(
        (transaction) => transaction.id !== parseInt(req.params.id)
      );
      return res.status(200).json({
        success: true,
        data: transactions,
      });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: "Server error",
      msg: "No record found with this id",
    });
  }
};
