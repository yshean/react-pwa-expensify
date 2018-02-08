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
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button> 
        </div>
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
