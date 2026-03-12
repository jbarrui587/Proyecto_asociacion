import { useState, useEffect } from 'react'

import './App.css'
import './bootstrap/bootstrap.min.css'
import './bootstrap/bootstrap.min.js'
import Nav from './components/nav.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {
  
  const [setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.users))
  });

  return (
    <>

      <Header></Header>

      <Nav></Nav>
      <main>
        
      </main>
      <Footer></Footer>
      
      
    </>
  )
}

export default App
