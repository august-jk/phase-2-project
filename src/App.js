import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Inventory from './Inventory';
import Form from './Form';


function App() {
  const [parts, setParts] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch('http://localhost:3000/parts')
    .then(r => r.json())
    .then(data => setParts(data))
  }, [])
  const updatedParts = parts.filter(part => {
    if(part.name.toLowerCase().includes(search.toLowerCase()))return true;
    else if(part.partNumber.includes(search)) return true;
  })
  
  const handleSearch = (searchInput) => {
    
    setSearch(searchInput)
    
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/inventory' element={<Inventory parts={updatedParts} onSearch={handleSearch}/>}>
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
