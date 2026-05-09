

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Miembro() {
    const [datos, setDatos] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/api/session", {
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                if (data.logged && data.user) {
                    setDatos(data.user);
                } else {
                    navigate("/login");
                }
            })
            .catch(() => navigate("/login"));
    }, [navigate]);

    if (!datos) {
        return <p>Cargando área de miembro...</p>;
    }

    return (
        <>
            <h1>Area de miembros</h1>
            <h2>Bienvenido {datos.username}</h2>
            <div>
                <h3>Datos Personales</h3>
                <p>Nombre: {datos.nombre}</p>
                <p>Apellidos: {datos.apellidos}</p>
                <p>DNI: {datos.dni}</p>
                <p>Telefono: {datos.telefono}</p>
                <p>Email: {datos.email}</p>
            </div>
            <div>
                <h3>Comentarios y Sugerencias</h3>
                <form action="">
                    <label htmlFor="comentario">Comentario: </label><br />
                    <textarea name="comentario" id="comentario" cols="30" rows="10"></textarea><br />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </>

    )

}


export default Miembro