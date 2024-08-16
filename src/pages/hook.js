import React from 'react';
import Button from '../conponents/Button';
import './index.css';
import { Link } from 'react-router-dom';
const Hooks = () => {
  const hook = [
    { title: 'useState', path: 'useState' },
    { title: 'useffect', path: 'useffect' },
    { title: 'usereduce', path: 'usereduce' },
    { title: 'redux', path: 'redux' },
  ];
  return (
    <div className='container'>
      <h5 className='hook_title'>React Hooks</h5>
      <p className='hook_paragrph'>
        React Hooks are functions that let you use state and other React
        features in functional components, which traditionally were stateless.
        Introduced in React 16.8, Hooks allow you to "hook into" React features
        without writing a class. Here are some common React Hooks:
      </p>
      <div className='hook-btn'>
      {hook.map((obj, index) => {
        return (
          <Link to={obj.path}>
            <Button content={obj.title} />
          </Link>
        );
      })}
      </div>
    </div>
  );
};

export default Hooks;
