import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByCertainAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [additionalVal, setAdditionalVal] = useState(0);
  const val = Number(additionalVal) || 0;
  function resetAll() {
    setAdditionalVal(0);
    dispatch(reset());
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div>
        <p>Add by a certain amount</p>
        <input
          value={additionalVal}
          onChange={(e) => setAdditionalVal(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByCertainAmount(val))}>
          Operate
        </button>
      </div>
      <button onClick={() => resetAll()}>Reset All</button>
    </section>
  );
};

export default Counter;
