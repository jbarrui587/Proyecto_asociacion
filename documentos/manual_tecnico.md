**[ESPAÑOL](#documentación-técnica---proyecto-asociación)** / **[ENGLISH](#technical-documentation---association-project)**
 
ESPAÑOL

# Documentación Técnica - Proyecto Asociación

## Arquitectura Interna
El proyecto sigue una arquitectura de **Cliente-Servidor** desacoplada:

1.  **Backend (Flask):** Actúa como una API RESTful que gestiona la lógica de negocio, la autenticación de usuarios y la persistencia de datos.
2.  **Frontend (React):** Interfaz de usuario que consume los endpoints del backend.
3.  **Base de Datos (MongoDB):** Sistema NoSQL para el almacenamiento de miembros, noticias, fotos y comentarios.
4.  **Almacenamiento (Cloudinary):** Servicio externo para el alojamiento persistente de imágenes subidas por el administrador.
5.  **Seguridad:** Uso de `passlib` con el algoritmo `pbkdf2_sha256` para el cifrado de contraseñas y sesiones de Flask para el control de acceso.

## Configuración y Conexión con MongoDB
Este proyecto utiliza **MongoDB Atlas** para mayor flexibilidad con los contenidos (noticias y galería).

### Pasos para la conexión:
1.  **Variables de Entorno:** Crear un archivo `.env` en la carpeta `backend-flask/` con el siguiente formato:
    ```env
    MONGO_URL=tu_cadena_de_conexion_mongodb
    SECRET_KEY=tu_clave_secreta
    CLOUDINARY_CLOUD_NAME=nombre_nube
    CLOUDINARY_API_KEY=tu_api_key
    CLOUDINARY_API_SECRET=tu_api_secret
    ```
2.  **Inicialización:** Al ejecutar `main.py`, la clase `BaseDatos` comprueba si existen las colecciones (`Miembros`, `Noticias`, `Galeria`, `Comentarios`) y las crea si es necesario.
3.  **Usuario Admin:** El sistema inserta automáticamente un usuario administrador por defecto si la colección de miembros está vacía.

## Endpoints Principales
| Ruta | Método | Parámetros | Respuesta | Descripción |
|------|--------|------------|-----------|-------------|
| `/api/noticias` | GET | - | JSON (Lista) | Obtiene todas las noticias |
| `/api/login` | POST | JSON {user, pass} | JSON {success, rol} | Autenticación de usuario |
| `/api/registro` | POST | JSON {datos_user} | JSON {mensaje} | Registro de nuevos miembros |
| `/api/comentarios` | POST | JSON {comentario} | JSON {success} | Guarda un comentario (req. login) |
| `/api/admin/miembros` | GET | - | JSON (Lista) | Lista de miembros (solo Admin) |
| `/api/admin/upload` | POST | Archivo (Multipart) | JSON {url} | Sube imagen a Cloudinary |

## Fragmentos de Código de Ejemplo
### Conexión a la Base de Datos (Python)
```python
# models/database.py
from pymongo import MongoClient
import os

class BaseDatos:
    def __init__(self):
        load_dotenv()
        mong_url = os.getenv("MONGO_URL")
        self.client = MongoClient(mong_url)
        self.db = self.client["Asociacion"]
```

### Gestión de Sesiones
```python
# main.py
@app.route('/api/login', methods=['POST'])
def login():
    # ... verificación de password ...
    session['username'] = login_user['username']
    session['rol'] = login_user['rol']
    return jsonify({"success": True, "rol": login_user['rol']})
```

### Consumo de API en React (Promesas)
```javascript
// src/pages/noticias.jsx
useEffect(() => {
  fetch("/api/noticias")
    .then(res => res.json())
    .then(data => {
      setNoticias(data);
      setCargando(false);
    })
    .catch(err => {
      console.error("Error al obtener noticias:", err);
      setCargando(false);
    });
}, []);
```

## Notas Técnicas
*   **Base de Datos:** Se optó por MongoDB en lugar de MySQL para facilitar el escalado de documentos.
*   **CORS:** Configurado para permitir peticiones desde el origen del frontend.
*   **Validaciones:** Uso de Regex para seguridad en contraseñas y correos.

## Referencias
*   [Flask Documentation](https://flask.palletsprojects.com/)
*   [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/)
*   [Cloudinary Python SDK](https://cloudinary.com/documentation/python_integration)

---
[VOLVER A ESPAÑOL](#documentación-técnica---proyecto-asociación)

ENGLISH

# Technical Documentation - Association Project

## Internal Architecture
The project follows a decoupled **Client-Server** architecture:

1.  **Backend (Flask):** Acts as a RESTful API managing business logic, user authentication, and data persistence.
2.  **Frontend (React):** User interface that consumes backend endpoints.
3.  **Database (MongoDB):** NoSQL system for storing members, news, photos, and comments.
4.  **Storage (Cloudinary):** External service for persistent hosting of images uploaded by the administrator.
5.  **Security:** Use of `passlib` with the `pbkdf2_sha256` algorithm for password encryption and Flask sessions for access control.

## MongoDB Configuration and Connection
This project uses **MongoDB Atlas** for better flexibility with content (news and gallery).

### Connection Steps:
1.  **Environment Variables:** Create a `.env` file in the `backend-flask/` folder with the following format:
    ```env
    MONGO_URL=your_mongodb_connection_string
    SECRET_KEY=your_secret_key
    CLOUDINARY_CLOUD_NAME=cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```
2.  **Initialization:** When running `main.py`, the `BaseDatos` class checks for the existence of collections (`Miembros`, `Noticias`, `Galeria`, `Comentarios`) and creates them if necessary.
3.  **Admin User:** The system automatically inserts a default administrator user if the members collection is empty.

## Main Endpoints
| Route | Method | Parameters | Response | Description |
|------|--------|------------|-----------|-------------|
| `/api/noticias` | GET | - | JSON (List) | Retrieves all news |
| `/api/login` | POST | JSON {user, pass} | JSON {success, role} | User authentication |
| `/api/registro` | POST | JSON {user_data} | JSON {message} | New member registration |
| `/api/comentarios` | POST | JSON {comment} | JSON {success} | Saves a comment (login req.) |
| `/api/admin/miembros` | GET | - | JSON (List) | Members list (Admin only) |
| `/api/admin/upload` | POST | File (Multipart) | JSON {url} | Uploads image to Cloudinary |

## Example Code Snippets
### Database Connection (Python)
```python
# models/database.py
from pymongo import MongoClient
import os

class BaseDatos:
    def __init__(self):
        load_dotenv()
        mong_url = os.getenv("MONGO_URL")
        self.client = MongoClient(mong_url)
        self.db = self.client["Asociacion"]
```

### Session Management
```python
# main.py
@app.route('/api/login', methods=['POST'])
def login():
    # ... password verification ...
    session['username'] = login_user['username']
    session['rol'] = login_user['rol']
    return jsonify({"success": True, "rol": login_user['rol']})
```

### API Consumption in React (Promises)
```javascript
// src/pages/noticias.jsx
useEffect(() => {
  fetch("/api/noticias")
    .then(res => res.json())
    .then(data => {
      setNoticias(data);
      setCargando(false);
    })
    .catch(err => {
      console.error("Error fetching news:", err);
      setCargando(false);
    });
}, []);
```

## Technical Notes
*   **Database:** MongoDB was chosen over MySQL to facilitate document scaling.
*   **CORS:** Configured to allow requests from the frontend origin.
*   **Validations:** Use of Regex for password and email security.

## References
*   [Flask Documentation](https://flask.palletsprojects.com/)
*   [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/)
*   [Cloudinary Python SDK](https://cloudinary.com/documentation/python_integration)
