import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync, decrementAsync } from '../redux/actions/index';
import fetchData  from '../redux/slices/index'; // Assuming you still want the data slice

const Redux = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.counter.loading);
  const error = useSelector((state) => state.counter.error);
  // React.useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(decrementAsync(counter-1))} disabled={loading}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(incrementAsync(counter+1))} disabled={loading}>+</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Redux;
