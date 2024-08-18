import useRef from '../assets/image/useref.png';
const useRefe = {
  image: useRef,
  title: ['useRef'],
  paragraph: [
    `useRef is a React hook that provides a way to create and manage references to DOM elements or other mutable values that persist across renders without causing a re-render when updated. It's a versatile tool that can be used in several scenarios in React.`,
  ],
  example: ['Let’s break down the example 👨‍💻'],
  code: [
    "import React, { useRef } from 'react';",
    "",
    "function TextInputWithFocusButton() {",
    "  const inputRef = useRef(null); // Create a ref to hold the input element",
    "",
    "  const handleFocus = () => {",
    "    inputRef.current.focus(); // Focus the input field when the button is clicked",
    "  };",
    "",
    "  return (",
    "    <div>",
    "      <input ref={inputRef} type=\"text\" placeholder=\"Enter text here\" />",
    "      <button onClick={handleFocus}>Focus the input</button>",
    "    </div>",
    "  );",
    "}",
    "",
    "export default TextInputWithFocusButton;",
  ]
};
export default useRefe;
