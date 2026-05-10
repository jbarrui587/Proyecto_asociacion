import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/registro2.css";

function Nueva_foto() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        titulo: "",
        imagen: ""
    });

    const [mensaje, setMensaje] = useState("");
    const [exito, setExito] = useState(false);

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

        if (!formData.titulo.trim() || !formData.imagen.trim()) {
            setMensaje("Todos los campos son obligatorios");
            return;
        }

        try {
            const res = await fetch("/api/admin/galeria/nuevo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) {
                setMensaje(data.error || "Error al añadir la foto");
            } else {
                setExito(true);
                setMensaje(data.mensaje || "Foto añadida correctamente");
                setFormData({ titulo: "", imagen: "" });
            }
        } catch {
            setMensaje("Error al conectar con el servidor");
        }
    };

    return (
        <>
            <h1>Nueva Foto</h1>

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
                            <label>URL Imagen:</label>
                            <input
                                type="text"
                                name="imagen"
                                value={formData.imagen}
                                onChange={handleChange}
                                placeholder="/img/galeria/ejemplo.jpg"
                                required
                            />
                        </div>

                        <div className="botones">
                            <input type="submit" value="Añadir Foto" />
                        </div>
                    </form>

                    {mensaje && (
                        <p id="mensaje" style={{ color: exito ? "#2D6A4F" : "#B02A37" }}>
                            {mensaje}
                        </p>
                    )}

                    <button
                        id="btn-volver"
                        onClick={() => navigate("/admin/gestionar_galeria")}
                    >
                        ← Volver a gestionar galería
                    </button>
                </div>
            </main>
        </>
    );
}

export default Nueva_foto;
