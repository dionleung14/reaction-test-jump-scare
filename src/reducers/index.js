import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import setTimerReducer from "./setTimer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  setTimer: setTimerReducer,
});

export default allReducers;
