import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

// const EditExpensePage = props => {
//   console.log(props);
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={expense => {
//           // Dispatch the action to edit the expense
//           props.dispatch(editExpense(props.expense.id, expense));
//           // Redirect to the dashboard
//           props.history.push("/");
//         }}
//       />
//       <button
//         onClick={() => {
//           props.dispatch(removeExpense({ id: props.expense.id }));
//           props.history.push("/");
//         }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };

const mapDispatchToProps = dispatch => ({
  startRemoveExpense: expenseId => dispatch(startRemoveExpense(expenseId)),
  startEditExpense: (expenseId, expense) => dispatch(startEditExpense(expenseId, expense))
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
