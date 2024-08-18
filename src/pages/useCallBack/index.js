import React, { useState, useCallback } from 'react';
import Blog from '../../conponents/Blog';
import data from '../../data/useCallBack';
import Button from '../../conponents/Button';
import './index.css';
import QuestionList from '../../data/question';
import Questions from '../question';

function ChildComponent({ onClick }) {
  console.log('ChildComponent rendered');
  return (
    <span
      className='useCallBack_sub_child_div'
      onClick={onClick}
    >
      This Child : <Button content={'Click me'} />
    </span>
  );
}

const MemoizedChildComponent = React.memo(ChildComponent);

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Without useCallback, a new function is created on every render
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div className=''>
      <Blog data={data} />
      <div className='useCallBack_div'>
        <h2
          onClick={() => {
            console.log('Element clicked');
            debugger;
          }}
          className='useStateCounter_title'
        >
          Let's Play with Buttons ( See output in console )
        </h2>
        <MemoizedChildComponent onClick={handleClick} />

        <div className='useCallBack_sub_div'>
          This is Parent : {count}
          <span onClick={() => setCount(count + 1)}>
            <Button content={'Increment Count'} />
          </span>
          {String(otherState)}
          <span onClick={() => setOtherState(!otherState)}>
            <Button content={'Toggle Other State'} />
          </span>
        </div>

        <div></div>
      </div>
      <h5 className='useStateCounter_title'>Related Questions</h5>
      <Questions QuestionList={QuestionList} type={'useCallback'} />
    </div>
  );
};
export default UseCallBack;
