import React from "react"
import './App.css';
import data from './data';
import Navbar from './components/Navbar'

function App() {
  console.log(data)
  return (
    <div className="container">
    <Navbar />
    </div>
  );
}

export default App;
