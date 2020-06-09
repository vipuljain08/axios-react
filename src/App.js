import React, { useState } from 'react';
import axios from 'axios'
import Userform from './components/Userform'
import './App.css';

function App() {
  const [repos, updateRepos] = useState(null)
  const getUser = (e) => {
    e.preventDefault()
    const user = e.target.elements.username.value
    // console.log(user)
    axios.get(`https://api.github.com/users/${user}`).then(res => {
      const repos = res.data.public_repos
      updateRepos(repos)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Userform getUser={getUser} />
      {repos ? <p>Number of Public Repos: {repos}</p> : <p>Please enter the username</p>}
    </div>
  );
}

export default App;