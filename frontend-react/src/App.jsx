import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './bootstrap/bootstrap.min.css'
import './bootstrap/bootstrap.min.js'
import Nav from './components/nav.jsx'
import Header from './components/header.jsx'

function App() {
  
  const [users,setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.users))
  });

  return (
    <>

      <Header></Header>

      <Nav></Nav>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
          {users.map((user) =>(
            <p key={user.id}>
              {user.name}
            </p>
          ))}
      
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
