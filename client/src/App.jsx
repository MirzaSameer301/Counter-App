import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

 

  return (
    <div className=' text-center p-20 ' >
      <h1 className=' text-6xl'>Simple React Counter App</h1>
      <p className='text-slate-700 text-xl p-5'>Click the buttons to increase or decrease the count.</p>
      <div>
        <button onClick={decrement} className=' mx-5 rounded-sm bg-slate-800 text-white p-2 w-14 text-2xl' >-</button>
        <span className='text-2xl'>{count}</span>
        <button onClick={increment} className='  mx-5 rounded-sm bg-slate-800 text-white p-2 w-14 text-2xl' >+</button>
      </div>
      <button className=' bg-red-700 w-20 m-5 rounded-sm text-white p-2' onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
