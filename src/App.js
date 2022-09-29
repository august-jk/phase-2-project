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
    else if(part.partNumber.toLowerCase().includes(search)) return true;
    else return false;
  })
  const handleAddPart = (part) => {
    const partData = {
      id: parts.length + 1,
      name: part.name,
      partNumber: part.partNumber,
      price: part.price,
      category: part.category
    }
    setParts([...parts, partData])
    fetch('http://localhost:3000/parts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(partData)
    })
    .then(r => r.json())
  }
  const handleSearch = (searchInput) => setSearch(searchInput)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/inventory' element={<Inventory parts={updatedParts} onSearch={handleSearch}/>}>
        </Route>
        <Route path='/form' element={<Form onAddPart={handleAddPart}/>}>
        </Route>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
