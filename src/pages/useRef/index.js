import React, { useRef } from 'react';
import Blog from '../../conponents/Blog';
import Button from '../../conponents/Button';
import QuestionList from '../../data/question';
import Questions from '../question';
import useRefe from '../../data/useRef';
import './index.css';
const UseRef = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <div>
      <Blog data={useRefe} />
      <div className='useRef_Container'>
        <h2 className='useRef_title'>UseRef</h2>
      </div>
      <div className='useRef_example_div'>
        <input
          ref={inputEl}
          type='text'
        />
        <span onClick={onButtonClick}>
        <Button content={'Focus the input'} />
        </span>
      </div>
      <h5 className='useStateCounter_title'>Related Questions</h5>
      <Questions
        QuestionList={QuestionList}
        type={'useRef'}
      />
    </div>
  );
};
export default UseRef;
