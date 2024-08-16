import usecallback from '../assets/image/usecallback.png';
const Redux = {
  image: usecallback,
  title: ['useCallback'],
  Howitworks: [
    'useCallback takes two arguments:',
    'Callback Function: The function you want to memoize.',
    'Dependencies: An array of dependencies that determine when the function should be re-created',
    'React will return the same instance of the callback function as long as the dependencies haven’t changed. If any dependency changes, useCallback will return a new function.',
  ],
  paragraph: [
    `useCallback is a React Hook that returns a memoized version of a callback function. It’s useful when you want to avoid unnecessary re-creations of functions during re-renders, which can optimize performance, especially when passing callbacks to child components that depend on reference equality (e.g., when using React.memo).`,
  ],
  example: ['Let’s break down the example 👨‍💻'],
  code: [
    "import React, { useState, useCallback } from 'react';",
    "",
    "function ChildComponent({ onClick }) {",
    "  console.log('ChildComponent rendered');",
    "  return <button onClick={onClick}>Click me</button>;",
    "}",
    "",
    "const MemoizedChildComponent = React.memo(ChildComponent);",
    "",
    "function App() {",
    "  const [count, setCount] = useState(0);",
    "  const [otherState, setOtherState] = useState(false);",
    "",
    "  // Without useCallback, a new function is created on every render",
    "  const handleClick = useCallback(() => {",
    "    console.log('Button clicked');",
    "  }, []);",
    "",
    "  return (",
    "    <div>",
    "      <p>Count: {count}</p>",
    "      <button onClick={() => setCount(count + 1)}>Increment Count</button>",
    "      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>",
    "      <MemoizedChildComponent onClick={handleClick} />",
    "    </div>",
    "  );",
    "}",
    "",
    "export default App;"
  ]  
};
export default Redux;
