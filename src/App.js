import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Inventory from './Inventory';
import Form from './Form';


function App() {
  const [parts, setParts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/parts')
    .then(r => r.json())
    .then(data => setParts(data))
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/inventory' element={<Inventory parts={parts}/>}>
        </Route>
        <Route path='/form' element={<Form />}>
        </Route>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
