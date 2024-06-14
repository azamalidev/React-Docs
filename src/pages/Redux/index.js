import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync, decrementAsync } from '../../redux/actions/index';
const ReduxPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.counter.loading);
  const error = useSelector((state) => state.counter.error);
  return (
    <div>
      <h5> Counter App With Redux</h5>
      <button onClick={() => dispatch(decrementAsync(counter-1))} disabled={loading}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(incrementAsync(counter+1))} disabled={loading}>+</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ReduxPage;
