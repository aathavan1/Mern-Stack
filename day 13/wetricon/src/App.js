//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import log from'./clo.jpg';
import rai from './rain.jpg';
import sun from './sunny.webp'

//import { useEffect } from 'react';
function App() {
  const[dt,setDt]=useState('');
  const[area,setarea]=useState(''); 
  const[mma,setma]=useState('');
  const[ic,setico]=useState('');
  
  //const city='chennai';
  const API='5978d7d6cb07f54a21025ff61bbe9aa1';
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${API}`;
  const fetdata = async() =>{
    const info= await axios.get(url);
     setDt(info.data.main.temp);
     setma(info.data.weather[0].main);
    //setarea(info.data.name);
  //console.log(info.data.weather[0].main);
if(mma==='Clouds')
{setico(log);
}
else if(mma==='rainy')
{
  setico(rai);
}
else if(mma==='Clear')
{
  setico(sun);
}
  
  }
  const clear=()=>{
    document.getElementById('nam').innerHTML='';
    document.getElementById('temp').innerHTML='';

  }
  return (
    <>
    <div id='cont'>WEATHER DASHBOARD<input type="text" placeholder='Enter city name' value={area} onChange={e=>setarea(e.target.value)}></input>
      <br></br>
      <button  onClick={fetdata} type='submit'>Submit</button>
      <br></br>
      <button onClick={clear}>clear</button>
      <div id="nam">
        {area}
      </div>
      <div id="temp">
        {dt}K
      </div>
      <div id='ma'>
        {mma}
      </div>
      <div id='icon'>
        {ic}
      </div>
      <img src={ic} alt='hello'></img>
      </div></>
  );
}

export default App;
