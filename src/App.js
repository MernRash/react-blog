import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/nav';
import Gallery from './Components/Navbar/Vertical_Gallery/gallery';
import LatestCard from './Components/Latest Component/latestcards';






function App() {
  return (
    <div>
      <NavBar />
      <Gallery />
       
      <h3 style={{margin:"0 0 0 90px",fontSize:"2rem",borderBottom:"3px solid red",width:"10%"}}>The Latest</h3>

      <LatestCard /> 
    </div>
  );
}

export default App;
