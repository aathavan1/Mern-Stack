import axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
const [user,setUser]= useState([]);



useEffect(()=>{
  axios.get('http://localhost:3001/view').then((user)=>{
    setUser(user.data)
  }).catch(err=> console.log(err))

},[])


  return (
   <>
   <div>
    <table>
      <tr>
      <th>Username</th>
      <th>StudentName</th>
      <th>StudentPhoneNumber</th>
      <th>Collegename</th>
      <th>Department</th>

      </tr>
    {
      user.map(user=>{
        return(
          <tr>
          <td>{user.Username}</td>
          <td>{user.StudentName}</td>
          <td>{user.StudentPhoneNumber}</td>
          <td>{user.Collegename}</td>
          <td>{user.Department}</td>
          </tr>
        )
      })
    }
    </table>
   </div>
   </>
  );
}

export default App;
