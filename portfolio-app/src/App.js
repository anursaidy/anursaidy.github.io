import React from 'react';
import './App.css';
import HomePage from './Homepage';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
function App() {
  return (
    <Router>
      <div className="App">
     
      <Header/>
  
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      

        </Routes>
      
     
      </div>
    </Router>
  );
}

export default App;
