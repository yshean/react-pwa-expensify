import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import "./firebase/firebase";
import "normalize.css/normalize.css";
import "./styles/styles.css";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

// store.dispatch(addExpense({ description: "Water Bill", amount: 5000 }));
// store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
// store.dispatch(addExpense({ description: "Rent", amount: 109000 }));
// store.dispatch(setTextFilter("bill"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
  registerServiceWorker();
});
