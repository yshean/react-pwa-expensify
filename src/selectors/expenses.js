// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return (
    expenses
      .filter(expense => {
        const startDateMatch =
          typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch =
          typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description
          .toLowerCase()
          .includes(text.toLowerCase());
        // true only when all of these variables return true
        // remember when it's true then only the entry will be shown (shown means not filtered out)
        return startDateMatch && endDateMatch && textMatch;
      }) // we can pipe filter with sort, we apply custom sorting by providing a compareFunction
      // eslint-disable-next-line
    .sort((a, b) => {
        if (sortBy === "date") {
          return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === "amount") {
          return a.amount < b.amount ? 1 : -1;
        }
        // putting return something here will get away with eslint warning
      })
  );
};

export default getVisibleExpenses;
