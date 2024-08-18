const QuestionList = [
  {
    type: 'useState',
    title: 'React does not allow updating state twice, or does it?',
    link: 'https://medium.com/@iamprovidence/react-does-not-allow-updating-state-twice-or-does-it-c86ea07999',
  },
  {
    type: 'useState',
    title: 'using useState vs just variables',
    link: 'https://stackoverflow.com/questions/58252454/react-hooks-using-usestate-vs-just-variables',
  },
  {
    type: 'useState',
    title: 'React DOM not updating on state change',
    link: 'https://stackoverflow.com/questions/61825978/react-dom-not-updating-on-state-change',
  },
  {
    type: 'useState',
    title: 'Why React doesn’t update state immediately',
    link: 'https://blog.logrocket.com/why-react-doesnt-update-state-immediately/#:~:text=In%20React%2C%20state%20updates%20are,renders%20and%20improving%20overall%20efficiency.',
  },
  {
    type: 'useState',
    title: 'Why React is immutable? why react states are immutable?',
    link: 'https://reacttraining.com/blog/state-in-react-is-immutable',
  },
  {
    type: 'useState',
    title: 'Why Call React Hooks at the Top Level?',
    link: 'https://stackoverflow.com/questions/62805385/why-call-react-hooks-at-the-top-level',
  },
  {
    type: 'useState',
    title:
      'What would happen if you initialize useState with an object and then update one property without copying the other properties?',
    link: 'https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook',
  },
  {
    type: 'useState',
    title: 'React - useState not setting initial value',
    link: 'https://stackoverflow.com/questions/58818727/react-usestate-not-setting-initial-value',
  },
  // useEffect
  {
    type: 'useEffect',
    title: 'What happens if you pass an empty array [] as the second argument to useEffect?',
    link: 'https://dev.to/csituma/why-we-use-empty-array-with-useeffect-iok#:~:text=code%20here%20)%3B%20%7D-,In%20this%20example%2C%20useEffect%20is%20used%20to%20fetch%20data%20from,when%20the%20data%20state%20changes.',
  },
  {
    type: 'useEffect',
    title: `What if we did not use dependency or left empity it?`,
    link: 'https://stackoverflow.com/questions/66385284/in-reactjs-if-we-dont-supply-a-dependency-array-for-useeffect-it-can-cause-th',
  },
  {
    type: 'useEffect',
    title: `what is React useEffect Cleanup Function`,
    link: 'https://refine.dev/blog/useeffect-cleanup/#what-are-side-effects',
  },
  {
    type: 'useEffect',
    title: `How useEffect replaces componentDidMount and componentDidUpdate methods?`,
    link: 'https://www.geeksforgeeks.org/how-useeffect-replaces-componentdidmount-and-componentdidupdate-methods/',
  },

  {
    type: 'useEffect',
    title: `How to use async functions in useEffect?`,
    link: 'https://devtrium.com/posts/async-functions-useeffect',
  },
  {
    type: 'useEffect',
    title: `useEffect or not useEffect?`,
    link: 'https://snigo.medium.com/useeffect-or-not-useeffect-35c059b41f84',
  },
  {
    type: 'useEffect',
    title: `How do you use multiple useEffect in a component?`,
    link: 'https://www.geeksforgeeks.org/how-do-you-use-multiple-useeffect-in-a-component/',
  },
  {
    type: 'useEffect',
    title: ` Is it best for performance to use useEffect or change a value directly within the onChange method?`,
    link: 'https://stackoverflow.com/questions/76286598/react-is-it-best-for-performance-to-use-useeffect-or-change-a-value-directly-w',
  },
 // Redux
  {
    type: 'redux',
    title: `What are the differences between React Hooks and Redux?`,
    link: 'https://www.quora.com/What-are-the-differences-between-React-Hooks-and-Redux',
  },
  {
    type: 'redux',
    title: `What are the common pitfalls of using Redux in a large-scale application?`,
    link: 'https://alexmngn.medium.com/how-to-use-redux-on-highly-scalable-javascript-applications-4e4b8cb5ef38',
  },
  {
    type: 'redux',
    title: `What is the purpose of middleware in Redux, and how does it enhance the capabilities of a Redux store?`,
    link: 'https://medium.com/@siavash.sajjady/an-introduction-to-middleware-in-redux-types-benefits-and-examples-985c876e706c',
  },
  {
    type: 'redux',
    title: `Context API , useReducer() or redux/rtk for state management`,
    link: 'https://stackoverflow.com/questions/71930189/context-api-usereducer-or-redux-rtk-for-state-management#:~:text=React%20Context%20%2B%20useReducer%20is%20a,the%20route%20of%20Context%20%2B%20useReducer.',
  },
  {
    type: 'redux',
    title: `How would you handle side effects in Redux without using any middleware?`,
    link: 'https://redux.js.org/usage/side-effects-approaches',
  },
  {
    type: 'redux',
    title: `Redux vs Redux Toolkit: Choosing the Right State Management Solution`,
    link: 'https://www.linkedin.com/pulse/redux-vs-toolkit-choosing-right-state-management-solution-birta/',
  },

  {
    type: 'useReduce',
    title: `What is the useReducer hook, and how does it differ from useState?`,
    link: 'https://www.geeksforgeeks.org/difference-between-usestate-and-usereducer/',
  },
  {
    type: 'useReduce',
    title: `When to use useReducer and when not to use it in React?`,
    link: 'https://medium.com/@queenskisivuli/when-to-use-usereducer-and-when-not-to-use-it-in-react-f8cd5208aee8#:~:text=Here%20are%20some%20guidelines%20to,might%20be%20a%20good%20choice.',
  },
  {
    type: 'useReduce',
    title: `useReducer confusion as to why is dispatch needed?`,
    link: 'https://stackoverflow.com/questions/73793855/usereducer-confusion-as-to-why-is-dispatch-needed',
  },
  {
    type: 'useReduce',
    title: `Must initializer functions for useState/useReducer be pure?`,
    link: 'https://stackoverflow.com/questions/73940073/must-initializer-functions-for-usestate-usereducer-be-pure',
  },
  {
    type: 'useReduce',
    title: `What advantages does useReducer actually have over useState?`,
    link: 'https://stackoverflow.com/questions/66386901/what-advantages-does-usereducer-actually-have-over-usestate',
  },
  {
    type: 'useMemo',
    title: `When not to use the useMemo React Hook?`,
    link: 'https://blog.logrocket.com/when-not-to-use-usememo-react-hook/',
  },
  {
    type: 'useMemo',
    title: `Differences Between useMemo and useCallback`,
    link: 'https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/#:~:text=Differences%20Between%20useMemo%20and%20useCallback&text=useMemo%20is%20used%20when%20you,state%20values%20dependent%20on%20it.',
  },
  {
    type: 'useMemo',
    title: `useMemo with an array dependency?`,
    link: 'https://stackoverflow.com/questions/65125885/usememo-with-an-array-dependency',
  },
  {
    type: 'useMemo',
    title: `Optimizing Performance of List Rendering with useMemo Hook in React`,
    link: 'https://www.geeksforgeeks.org/optimizing-performance-of-list-rendering-with-usememo-hook-in-react/',
  },
  {
    type: 'useMemo',
    title: `How to Prevent Unnecessary React Component Re-Rendering`,
    link: 'https://dev.to/femi_akinyemi/how-to-prevent-unnecessary-react-component-re-rendering-3c08#:~:text=Using%20useMemo%20optimizes%20performance%20by,re%2Dcalculations%20on%20subsequent%20renders.',
  },
  {
    type: 'useMemo',
    title: `When should you NOT use React memo?`,
    link: 'https://stackoverflow.com/questions/53074551/when-should-you-not-use-react-memo',
  },
  {
    type: 'useMemo',
    title: `UseMemo vs React.memo: What's the difference?`,
    link: 'https://www.angularminds.com/blog/usememo-vs-reactmemo',
  },
  {
    type: 'useMemo',
    title: `Asynchronous calls with useMemo`,
    link: 'https://stackoverflow.com/questions/61751728/asynchronous-calls-with-react-usememo',
  },
  {
    type: 'useCallback',
    title: `Should useCallback always be used when passing a function as a prop?`,
    link: 'https://stackoverflow.com/questions/59078834/should-usecallback-always-be-used-when-passing-a-function-as-a-prop',
  },
  {
    type: 'useCallback',
    title: `Should useCallback always be used when passing a function as a prop?`,
    link: 'https://stackoverflow.com/questions/59078834/should-usecallback-always-be-used-when-passing-a-function-as-a-prop',
  },
  {
    type: 'useCallback',
    title: `What is useCallback in React and when to use it?`,
    link: 'https://stackoverflow.com/questions/71265042/what-is-usecallback-in-react-and-when-to-use-it',
  },
  {
    type: 'useCallback',
    title: `useCallback: When to use it? Is there any drawback / performance issue?`,
    link: 'https://stackoverflow.com/questions/63013145/usecallback-when-to-use-it-is-there-any-drawback-performance-issue',
  },
  {
    type: 'useCallback',
    title: `Understanding the Difference between useEffect and useCallback in React`,
    link: 'https://medium.com/@abbas.ashraf19/understanding-the-difference-between-useeffect-and-usecallback-in-react-a0fec615ebcf#:~:text=useEffect%20is%20designed%20for%20managing,receive%20those%20functions%20as%20props.',
  },

  {
    type: 'useCallback',
    title: `useLoopCallback -- useCallback hook for components created inside a loop`,
    link: 'https://stackoverflow.com/questions/57663003/useloopcallback-usecallback-hook-for-components-created-inside-a-loop',
  },
  {
    type: 'useRef',
    title: `How to use useRef in React for DOM manipulation and mutable references`,
    link: 'https://www.shecodes.io/athena/203304-how-to-use-useref-in-react-for-dom-manipulation-and-mutable-references#:~:text=useRef%20is%20a%20hook%20in,value%20that%20persists%20across%20renders.&text=In%20this%20example%2C%20useRef%20is,reference%20to%20the%20input%20element.',
  },
  {
    type: 'useRef',
    title: `componentDidMount called BEFORE ref callback`,
    link: 'https://stackoverflow.com/questions/44074747/componentdidmount-called-before-ref-callback',
  },
  {
    type: 'useRef',
    title: `Can useRef trigger a re-render when its value changes?`,
    link: 'https://stackoverflow.com/questions/59202434/useref-hook-not-triggering-re-render',
  },
  {
    type: 'useRef',
    title: `What's the difference between useRef and createRef?`,
    link: 'https://stackoverflow.com/questions/54620698/whats-the-difference-between-useref-and-createref',
  },
  {
    type: 'useRef',
    title: `What are the advantages of useRef() instead of just declaring a variable?`,
    link: 'https://stackoverflow.com/questions/60554573/what-are-the-advantages-of-useref-instead-of-just-declaring-a-variable',
  },
  {
    type: 'useRef',
    title: `Avoid Unnecessary Re-Renders with Reacts useRef`,
    link: 'https://egghead.io/lessons/react-avoid-unnecessary-re-renders-with-reacts-useref',
  },
];
export default QuestionList;
