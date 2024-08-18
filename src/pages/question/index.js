import React, { useEffect, useState } from 'react';
import Button from '../../conponents/Button';
import './index.css';
const Questions = ({ QuestionList, type }) => {
  const filteredArray = QuestionList.filter((item) => item.type === type);

  return (
    <ui className='question-list'>
      {filteredArray.map((val, index) => (
        <li key={index}>
          <a
            href={val.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {val.title}
          </a>
        </li>
      ))}
    </ui>
  );
};
export default Questions;
