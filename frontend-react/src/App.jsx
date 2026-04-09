//import { useState, useEffect } from 'react'
import './styles/App.css'
import Landing from './pages/home'

function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Ruta principal */}
        <Route path="/" element={<Landing />} />

          {/* Ruta usuarios */}
          <Route path="/noticias" element={<Noticias />} />

          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      

      
    </>
  )
}

export default App
