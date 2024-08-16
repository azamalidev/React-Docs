import React,  { useMemo, useState } from 'react';
import Blog from '../../conponents/Blog';
import data from '../../data/useMemo';
import Button from '../../conponents/Button'
import './index.css'

function ExpensiveComputationComponent({ number }) {
  // Memoize the result of the expensive computation
  const computedValue = useMemo(() => {
    console.log('Computing...');
    let sum = 0;
    for (let i = 0; i < number * 1000000; i++) {
      sum += i;
    }
    return sum;
  }, [number]);

  return <div>Computed Value: {computedValue}</div>;
}

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);
  return (
    <div>
      <Blog data={data} />
      <ExpensiveComputationComponent number={number} />
      <div className='useMemo_div'>
      <span onClick={() => setIncrement(increment + 1)}>
      <Button content={'Increment'} />
      </span>
      <span onClick={() => setNumber(number + 1)}>
      <Button content={'Change Number'} />
      </span>
      </div>
     
    </div>
  );};export default UseMemo;
