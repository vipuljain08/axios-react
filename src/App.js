import React, { useState } from 'react';
import axios from 'axios'
import Userform from './components/Userform'
import User from './components/User'
import './App.css';

function App() {
  const [user, updateUser] = useState(null)
  const getUser = (e) => {
    e.preventDefault()
    const user = e.target.elements.username.value
    // console.log(user)
    axios.get(`https://api.github.com/users/${user}`).then(res => {
      const userInfo = res.data
      updateUser(userInfo)
    })
  }
  return (
    <div className="App">
      <Userform getUser={getUser} />
      {/* {repos ? <p>Number of Public Repos: {repos}</p> : <p>Please enter the username</p>} */}
      { user ? <User user={user}/> : <p>Please enter the username</p> }
    </div>
  );
}

export default App;