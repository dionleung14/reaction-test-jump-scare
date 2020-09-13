import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

export default function Test() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h1>Counter {counter}</h1>
      {isLogged ? <h1>Protect me</h1> : ""}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
