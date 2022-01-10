import React from 'react';
import logo from './logo.svg';
import './App.css';
import MicroFrontend from './components/MicroFrontend';


function App() {
  const mfeApp = 'mfe-medical-record';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Container
        </p>
        <p>
        MFE ------
      </p>   
      <MicroFrontend hostNameApp={mfeApp}></MicroFrontend>
      </header>
    </div>
  );
}

export default App;
