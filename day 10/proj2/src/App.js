// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[name,set]=useState("karthi");

  return (
    <div>
    <h1>hello{name}</h1>
    <b>{name}</b>
    </div>
     
  );
}

export default App;
