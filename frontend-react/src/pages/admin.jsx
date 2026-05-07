import { Link } from "react-router-dom";
import '../styles/admin.css';

function Admin(){

    return(
        <>
    
        <h1>Panel de administrador</h1>

        <div id="contenedor-panel">
            <div className="gestionar">
                <p>Miembro</p>
                <Link to="/admin/gestionar_miembros">Gestionar</Link>
            </div>
            <div className="gestionar">
                <p>Galería</p>
                <Link to="/admin/gestionar_galeria">Gestionar</Link>
            </div>
            <div className="gestionar">
                <p>Noticias</p>
                <Link to="/admin/gestionar_noticias">Gestionar</Link>
            </div>
        </div>
        </>
    )
}

export default Admin