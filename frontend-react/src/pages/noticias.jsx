import { useEffect, useState } from "react";
import Carta_noticia from '../components/carta_noticia'


function Noticias() {

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/noticias")
      .then(res => res.json())
      .then(data => setNoticias(data))
      .catch(err => console.error("Error:", err));
  }, []);


    return (
      <>
       
        <main className="contenido">
          <h1>Noticias y Eventos</h1>

          {noticias.length === 0 ? (
        <p>No hay noticias</p>
      ) : (
        noticias.map((noticia) => (
          <Carta_noticia
            id={noticia.id}
            titulo={noticia.titulo}
            descripcion={noticia.descripcion}
            imagen={noticia.imagen}
          />
        ))
      )}
        </main>
      </>
    )
  }
  
  export default Noticias
