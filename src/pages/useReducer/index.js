import React, { useReducer } from 'react';
import './index.css'
import Button from '../../conponents/Button';
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
      <h5 className='reducerCounter_title'> let's Play with Counter App 😎</h5>
      <div className='reducerCounter'>
      <span onClick={decrement} >
      <Button content={'-'} />
      </span>
      <span>{state.count}</span>
      <span onClick={increment} >
      <Button content={'+'} />
      </span>
     
      </div>
    </div>
  );
};

export default UseReducerPage;
