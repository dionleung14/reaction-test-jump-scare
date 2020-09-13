import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// STORE -> GLOBALIZED STATE

// ACTION -> A NAME, DESCRIBING WHAT YOU WANT TO DO
// INCREMENT
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// // DECREMENT
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// REDUCER -> DESCRIBES HOW YOUR STATE TRANSFORMS
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// Display in console
// store.subscribe(() => console.log("I am now currently " + store.getState()));

// DISPATCH -> EXECUTES THE ACTION
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <Provider store={myStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
