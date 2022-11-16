import React from "react"
import './App.css';
import data from './data';
import Navbar from './components/Navbar'
import Card from './components/Cards'

function App() {
 
  let cards = data.map(item =>{
return(
  <Card 
  key = {item.id}
  item = {item}
/>
)

  })
  return (
    <div className="container">
    <Navbar />
    {cards}
    
    </div>
  );
}

export default App;
