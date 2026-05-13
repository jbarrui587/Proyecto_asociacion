# Informe de Evaluación Final del Proyecto Web.

## 1. Resument del Proyecto.

El presente documento resume la evaluación final del proyecto web desarrollado para la "Asociación Abderitana de Aguas Naturales".

El proyecto consiste en una plataforma web que permite a los usuarios registrarse, iniciar sesión y gestionar sus datos personales. Además, permite a los usuarios ver las noticias publicadas por los administradores y dejar comentarios en ellas.

El proyecto se compone de dos partes: el frontend y el backend. El frontend está desarrollado en React y el backend está desarrollado en Python. El frontend se comunica con el backend a través de una API REST. El backend se comunica con una base de datos MySQL para almacenar los datos de los usuarios y las noticias.

## 2. Seguimiento de Tareas.

### Número total de tareas.
    52 tareas en total.
### Tareas Realizadas.
    50 tareas realizadas.
### Tareas Pendientes.
    2 tareas pendientes de realizar.

### Descripción de las tareas.
    Se han llevado a cabo todas las tareas relacionadas con el desarrollo de la plataforma web para la "Asociación Abderitana de Aguas Naturales", a excepción de las siguientes:
    - Implementación: No se ha realiza la función de que los miembros registrados puedan hacer donaciones a la asociación. Esto se debe a que he encontrado problemas al tener que usar una cuenta de paypal o similar para poder hacerlo. Por ello he optado por dejar esta tarea pendiente de realizar
    - Despliegue: No se ha realizado un despliegue con docker como estaba previsto en la tarea 43, ya que he hecho el despliegue directamente en un servidor render, tanto el frontend como el backend. 

## 3. Gestión de Incidencias.

### Número de bugs registrados.
    - 5 bugs registrados.
### Descripción de los bugs.
    - Bug 1: Fallo en hacer la comunicación entre el frontend y el backend para mostrar las noticias en la web.
        Prioridad:Alta.   
        Solucionado: Se ha realizado una modificación en el archivo noticias.jsx y con una promesa que hace referencia a su api en main.py se ha conseguido mostrar las noticias en la web. 
    - Bug 2: Fallo al hacer login con cualquier usuario. Esto se debe a que la aplicación no se comunica el backend con el frontend y debo desplegarlo para poder hacer login.
        Prioridad:Alta.   
        Solucionado: Se ha realizado un despliegue en render del backend y del frontend, al estar en diferentes puertos no se comunicaban, ahora si se comunican y funciona correctamente.
    - Bug 3: Fallo al subir imagenes desde un sitio externo a la aplicación en local usando la carpeta public.
        Prioridad:Media.  
        Solucionado: Se ha tenido que enlazar el backend con un servidor cloudinary para poder subir imagenes desde un sitio externo a la aplicación y que se guarden de forma persistente. 
    - Bug 4: Descuadre de una tabla en gestionar_galeria.jsx al añadir un campo nuevo descripción.
        Prioridad:Baja.  
        Solucionado: Se ha ajustado el ancho de las columnas de la tabla para que se muestre correctamente.
    - Bug 5: Error al modificar datos de un miembro en gestionar_miembros.jsx
        Prioridad:Media.  
        Solucionado: Se ha ajustado el código de backend en su ruta api para que se pueda modificar los datos de un miembro correctamente.

## 4. Valoración Final.

En términos de satisfacción personal, considero que el proyecto se ha desarrollado de manera exitosa, logrando cumplir con los objetivos planteados en el enunciado. 

He adquirido nuevos conocimientos en el desarrollo de aplicaciones web, así como en la gestión de incidencias y tareas. 

El proyecto ha sido desarrollado en un plazo de tiempo adecuado y he podido cumplir con la mayoría de   las tareas en el tiempo establecido.  

Creo que se puede mejorar:

- La estructura del código y que se pueda entender mejor
- La gestión de usuarios para que se pueda hacer una gestión más completa 
- La gestión de donaciones para que los miembros puedan hacer donaciones a la asociación.   