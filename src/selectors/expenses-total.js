const getExpensesTotal = expenses => {
  if (expenses.length) {
    return expenses
      .filter(expense => expense.amount >= 0)
      .map(expense => expense.amount)
      .reduce((total, expense) => total + expense, 0);
  } else {
    return 0;
  }
};

export default getExpensesTotal;
