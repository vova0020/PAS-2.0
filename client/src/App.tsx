import React from 'react';
import './styles/App.css';
import Nawbar from './components/UI/Nawbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Region from './pages/Region';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Nawbar/>
        <Routes>
            <Route path="/location" element={<Region />} />  
        
          </Routes>
      </header>
    </div>
    </Router>
    
  );
}

export default App;
