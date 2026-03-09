## Instalación de flask.

Trabajar en un entorno virtual

Crear entorno virtual(Windows) usando el comando python -m venv venv(nombre del entorno)
Activamos el entorno con el comando venv\Script\activate

Instalar dependencias usando :

```
    pip install -r requirements.txt
```

Arrancamos el backend con el entorno activo con el comando python main.py

Instalamos CORS para que react se pueda comunicar con flask y pueda hacer request.
Usamos el comando pip install flask-cors