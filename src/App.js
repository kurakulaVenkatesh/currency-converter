import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
      </header>
     
        <CurrencyConverter />
   
    </div>
  );
}

export default App;
