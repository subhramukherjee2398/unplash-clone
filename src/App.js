import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue] = useState()
  return (
    <div className="App">
      <div className='mydiv'>
         <span>Search</span>
         <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
         <button>Search</button>
      </div>
    </div>
  );
}

export default App;
