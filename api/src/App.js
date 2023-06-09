import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListOfUsers from "./ListOfUsers"
import { useEffect, useState } from 'react';

function App() {
const[users,setUsers]=useState([])

useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users").then((result) =>{
    setUsers(result.data);
  })
},[])


  return (
    <div className="App">
      {users.map((user)=>(
        <ListOfUsers user={user}/>
      ))}
    </div>
  );
}

export default App;
