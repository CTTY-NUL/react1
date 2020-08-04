import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from "./components/Thumb";
import Thumb from "./components/Thumb";

function App() {
  return (
    <div className="App">
        <Thumb url="http://nu.nl" imgsrc="https://img.joomcdn.net/742bb7cd2f21bc66f5c2447022a7dab7f6dc3a87_original.jpeg" titel="dit is de titel"></Thumb>
        <Thumb url="http://nu.nl" imgsrc="https://img.joomcdn.net/742bb7cd2f21bc66f5c2447022a7dab7f6dc3a87_original.jpeg" titel="dit is de titel"></Thumb>
        <Thumb url="http://nu.nl" imgsrc="https://img.joomcdn.net/742bb7cd2f21bc66f5c2447022a7dab7f6dc3a87_original.jpeg" titel="dit is de titel"></Thumb>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
