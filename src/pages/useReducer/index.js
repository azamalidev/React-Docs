import React, { useReducer } from 'react';
const UseReducerPage = () => {
  const initialState = { count: 0 };
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(countReducer, initialState);

  const increment = () => {
    dispatch({ type: 'increment' });
  };
  const decrement = () => {
    dispatch({ type: 'decrement' });
  };
  return (
    <div>
      <h5> Counter App With useReducer</h5>
      <button onClick={increment}>+</button>
      {state.count}
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default UseReducerPage;
