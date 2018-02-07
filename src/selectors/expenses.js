import moment from "moment";

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return (
    expenses
      .filter(expense => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch =
          startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
        const endDateMatch =
          endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
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
