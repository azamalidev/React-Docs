import redux from '../assets/image/redux.png';
const Redux = {
  image: redux,
  title: ['Redux'],
  principles: [
    'Single Source of Truth: The state of your whole application is stored in one place (the store).',
    'State is Read-Only: The only way to change the state is by dispatching actions, which are plain objects describing what happened.',
    'Changes are Made with Pure Functions: Reducers are pure functions that take the current state and an action, and return a new state.',
  ],
  paragraph: [
    `Redux is a state management library for JavaScript applications, commonly used with React. It helps you manage the state of your app in a predictable way by storing the entire application's state in a single object, called the "store."`,
  ],
  example: [
    'Let’s break down the example 👨‍💻',
    'count: The current value of the state (initially 0).',
  ],
  code: [
      "import { useSelector, useDispatch } from 'react-redux';",
      "import { incrementAsync, decrementAsync } from '../../redux/actions/index';",
      "const ReduxPage = () => {",
      "  const dispatch = useDispatch();",
      "  const counter = useSelector((state) => state.counter.value);",
      "  const loading = useSelector((state) => state.counter.loading);",
      "  const error = useSelector((state) => state.counter.error);",
      "  return (",
      "    <div className=''>",
      "      <Blob data={Redux}/>;",
      "      <h5 className='reduxCounter_title'> let's Play with Counter App 😎</h5>;",
      "      <br/>;",
      "      <div className='reduxCounter'>",
      "        <span onClick={() => dispatch(decrementAsync(counter-1))} disabled={loading}>",
      "          <Button content={'-'}/>;",
      "        </span>",
      "        <span>{counter}</span>;",
      "        <span onClick={() => dispatch(incrementAsync(counter+1))} disabled={loading}>",
      "          <Button content={'+'}/>;",
      "        </span>",
      "        {loading && <p>Loading...</p>};",
      "        {error && <p>Error: {error}</p>};",
      "      </div>",
      "    </div>",
      "  );",
      "};",
      "",
      "export default ReduxPage;",
      "",
      "",
      "Redux Action",
      "",
      "",
      "import { createAsyncThunk } from '@reduxjs/toolkit';",
      "",
      "export const incrementAsync = createAsyncThunk(",
      "  'counter/increment',",
      "  async (value) => {",
      "    try {",
      "      return value;",
      "    } catch (err) {",
      "      return err.message;",
      "    }",
      "  }",
      ");",
      "",
      "export const decrementAsync = createAsyncThunk(",
      "  'counter/decrement',",
      "  async (value) => {",
      "    try {",
      "      return value;",
      "    } catch (err) {",
      "      return err.message;",
      "    }",
      "  }",
      ");",
      "",
      "",
      "Redux Slices",
      "",
      "",
      "import { configureStore } from '@reduxjs/toolkit';",
      "import counterReducer from './slices/index';",
      "import dataReducer from './slices/index'; // Assuming you still want the data slice from before",
      "",
      "const store = configureStore({",
      "  reducer: {",
      "    counter: counterReducer,",
      "    data: dataReducer,",
      "  },",
      "});",
      "",
      "export default store;",
  ],
};
export default Redux;