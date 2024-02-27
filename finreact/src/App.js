import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Listinvestors from './components/Listinvestors';
import Listcompany from './components/Listcompany';
// import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Listcompany/>
      <Listinvestors/>
    </div>
  );
}

export default App;
