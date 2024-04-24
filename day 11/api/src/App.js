//import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [joke, setname]=useState("");
  useEffect(()=>
  {
    const url=" https://icanhazdadjoke.com/slack";
    const fetchj= async ()=>{
    const jokedata=await fetch(url);
    const respo=await jokedata.json();
   setname(respo.attachments[0].fallback)
    //setname(respo.jokedata);
    }
    fetchj();
  },[])
  return (
     <>
     <h1>{joke}</h1>
     </>
  );
}

export default App;
