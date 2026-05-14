**[ESPAÑOL](#guía-de-despliegue---proyecto-asociación)** / **[ENGLISH](#deployment-guide---association-project)**

ESPAÑOL

# Guía de Despliegue - Proyecto Asociación

Este documento describe los pasos necesarios para desplegar la aplicación en un entorno de producción (ej. **Render**).

## 1. Requisitos Previos
*   Cuenta en [GitHub](https://github.com/).
*   Cuenta en [Render](https://render.com/).
*   Base de datos configurada en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
*   Cuenta en [Cloudinary](https://cloudinary.com/) para las imágenes.

## 2. Despliegue del Backend (Flask)
El backend se despliega como un **Web Service**.

1.  **Conectar repositorio:** En Render, crea un nuevo *Web Service* y selecciona tu repositorio de GitHub.
2.  **Configuración:**
    *   **Runtime:** `Python 3`.
    *   **Build Command:** `pip install -r requirements.txt`.
    *   **Start Command:** `gunicorn main:app`.
3.  **Variables de Entorno (Environment):**
    *   `MONGO_URL`: Tu cadena de conexión de Atlas.
    *   `SECRET_KEY`: Una clave aleatoria segura.
    *   `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`.
    *   `FRONTEND_URL`: La URL que Render te asigne para el frontend.

## 3. Despliegue del Frontend (React)
El frontend se despliega como un **Static Site**.

1.  **Crear Static Site:** Selecciona el mismo repositorio.
2.  **Configuración:**
    *   **Build Command:** `npm install && npm run build`.
    *   **Publish Directory:** `dist`.
3.  **Reglas de Redirección (Redirects):**
    *   Para que las rutas de React funcionen (SPA), añade una regla:
        *   Source: `/*`
        *   Destination: `/index.html`
        *   Action: `Rewrite`

## 4. Configuración de Base de Datos
En MongoDB Atlas, asegúrate de añadir la IP de Render a la lista blanca (*Whitelist*).
*   *Recomendación:* Durante el despliegue, permite acceso desde cualquier lugar (`0.0.0.0/0`) si Render no proporciona IPs estáticas.

---
[VOLVER A ESPAÑOL](#guía-de-despliegue---proyecto-asociación)

ENGLISH

# Deployment Guide - Association Project

This document describes the steps required to deploy the application in a production environment (e.g., **Render**).

## 1. Prerequisites
*   [GitHub](https://github.com/) account.
*   [Render](https://render.com/) account.
*   Database configured in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
*   [Cloudinary](https://cloudinary.com/) account for images.

## 2. Backend Deployment (Flask)
The backend is deployed as a **Web Service**.

1.  **Connect Repository:** In Render, create a new *Web Service* and select your GitHub repository.
2.  **Settings:**
    *   **Runtime:** `Python 3`.
    *   **Build Command:** `pip install -r requirements.txt`.
    *   **Start Command:** `gunicorn main:app`.
3.  **Environment Variables:**
    *   `MONGO_URL`: Your Atlas connection string.
    *   `SECRET_KEY`: A secure random key.
    *   `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`.
    *   `FRONTEND_URL`: The URL Render assigns to your frontend.

## 3. Frontend Deployment (React)
The frontend is deployed as a **Static Site**.

1.  **Create Static Site:** Select the same repository.
2.  **Settings:**
    *   **Build Command:** `npm install && npm run build`.
    *   **Publish Directory:** `dist`.
3.  **Rewrite Rules (Redirects):**
    *   To ensure React routes work (SPA), add a rule:
        *   Source: `/*`
        *   Destination: `/index.html`
        *   Action: `Rewrite`

## 4. Database Configuration
In MongoDB Atlas, make sure to whitelist Render's IP address.
*   *Recommendation:* During deployment, allow access from anywhere (`0.0.0.0/0`) if Render does not provide static IPs.
