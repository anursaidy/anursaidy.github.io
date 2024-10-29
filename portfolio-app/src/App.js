import React from 'react';
import './App.css';
import HomePage from './Homepage';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Projects';
function App() {
  return (
    <Router>
      <div className="App">
     
      <Header/>
  
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      

        </Routes>
      
     
      </div>
    </Router>
  );
}

export default App;
