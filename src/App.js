import React from 'react';
import logo from './logo.svg';
import './App.css';
import OtherComponent from './OtherComponent/OtherComponent';


function App() {
  return (
    <OtherComponent logo={logo}></OtherComponent>
  );
}

export default App;
