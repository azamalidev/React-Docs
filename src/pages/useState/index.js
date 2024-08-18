import React, { useState } from 'react';
import Blog from '../../conponents/Blog';
import data from '../../data/useState';
import QuestionList from '../../data/question'
import Button from '../../conponents/Button';
import Questions from '../../pages/question';
import './index.css';
const UseStatePage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Blog data={data} />
      <h5 className='useStateCounter_title'> let's Play with Counter App 😎</h5>
      <div className='useStateCounter'>
        <span onClick={increment}>
          <Button content={'+'} />
        </span>
        {count}
        <span onClick={decrement}>
          <Button content={'-'} />
        </span>
      </div>
      <h5 className='useStateCounter_title'> Related Questions</h5>
      <Questions QuestionList={QuestionList} type={'useState'} />
    </div>
  );
};
export default UseStatePage;
