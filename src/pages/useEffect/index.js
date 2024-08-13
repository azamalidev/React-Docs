import React, { useEffect, useState } from 'react';
import Blog from '../../conponents/Blog';
import Button from '../../conponents/Button';
import UseEffect from '../../data/useffect';
import './index.css';
const UseFfect = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array means this effect runs only once after the initial render

  return (
    <div>
      <Blog data={UseEffect} />
      <div className='useEffectContainer'>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        <br />
        <h2 className='useStateCounter_title'> Test Api Call with useEffect</h2>
      </div>
      <div className='api-content'>Data: {JSON.stringify(data)}</div>
    </div>
  );
};
export default UseFfect;
