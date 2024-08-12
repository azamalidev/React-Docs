import useState from '../assets/image/usestate.png';
const blog = {
  image: useState,
  title: ['useState '],
  paragraph: [
    'useState is a Hook in React that allows you to add state to functional components. State is essentially a way to preserve values between renders in your component.',
  ],
  example: [
    'Let’s break down the example 👨‍💻',
    'count: The current value of the state (initially 0).',
  ],
  code: [
    'import React, { useState } from react;',
    'const UseStatePage = () => {',
    'const [count, setCount] = useState(0);',
    'const increment = () => { setCount(count + 1);};',
    'const decrement = () => {setCount(count - 1);};',
    ' return (',
    '<button onClick={increment}>+</button>',
    '{count}',
    '<button onClick={decrement}>-</button>',
    ');};',
    'export default StatePage'
  ],
};
export default blog;
