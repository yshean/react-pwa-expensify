import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.css";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 5000 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109000 }));
store.dispatch(setTextFilter("bill"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
