import { useState, useEffect } from 'react'
import imagen12 from './assets/images/asoc_12.png' 
import './App.css'
import './bootstrap/bootstrap.min.css'
import './bootstrap/bootstrap.min.js'
import Nav from './components/nav.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {
  
  
  return (
    <>

      <Header></Header>

      <Nav></Nav>
      <main>
        <div id="texto-landing">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus ex debitis officiis sed optio, ducimus asperiores fuga dolorum totam dolor hic minus nobis quam provident. Adipisci ratione optio corporis.</p>
        </div>
        <div id="imagen-landing">
          <img src={imagen12} alt="Presentación de la asociación" style={{width:'200px'}}></img>
        </div>
      </main>
      <Footer></Footer>
      
      
    </>
  )
}

export default App
