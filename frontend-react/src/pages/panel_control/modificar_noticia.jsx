import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/registro2.css";

function Modificar_noticia() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        imagen: ""
    });

    const [mensaje, setMensaje] = useState("");
    const [exito, setExito] = useState(false);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/api/admin/noticias/" + id, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    setFormData({
                        titulo: data.titulo,
                        descripcion: data.descripcion,
                        imagen: data.imagen
                    });
                } else {
                    setMensaje(data.message || "No se pudo cargar la noticia");
                }
                setCargando(false);
            })
            .catch(() => {
                setMensaje("Error de conexión");
                setCargando(false);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje("");
        setExito(false);

        try {
            const res = await fetch(import.meta.env.VITE_API_URL + "/api/admin/noticias/" + id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                setMensaje(data.error || "Error al actualizar la noticia");
            } else {
                setExito(true);
                setMensaje(data.mensaje || "Noticia actualizada correctamente");
            }
        } catch {
            setMensaje("Error al conectar con el servidor");
        }
    };

    if (cargando) return <p style={{ textAlign: "center", marginTop: "50px" }}>Cargando datos...</p>;

    return (
        <>
            <h1>Modificar Noticia</h1>

            <main id="contenedor-registro">
                <div className="card-registro">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Título:</label>
                            <input
                                type="text"
                                name="titulo"
                                value={formData.titulo}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Descripción:</label>
                            <textarea
                                name="descripcion"
                                value={formData.descripcion}
                                onChange={handleChange}
                                rows="4"
                                style={{ width: "100%", borderRadius: "10px", padding: "10px", border: "1px solid #ddd" }}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label>URL Imagen:</label>
                            <input
                                type="text"
                                name="imagen"
                                value={formData.imagen}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="botones">
                            <input type="submit" value="Guardar Cambios" />
                        </div>
                    </form>

                    {mensaje && (
                        <p id="mensaje" style={{ color: exito ? "#2D6A4F" : "#B02A37" }}>
                            {mensaje}
                        </p>
                    )}

                    <button
                        id="btn-volver"
                        onClick={() => navigate("/admin/gestionar_noticias")}
                    >
                        ← Volver a gestionar noticias
                    </button>
                </div>
            </main>
        </>
    );
}

export default Modificar_noticia;
