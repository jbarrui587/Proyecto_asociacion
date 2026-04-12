from flask import Flask, jsonify, request
from models.database import BaseDatos
from flask_cors import CORS
from passlib.hash import pbkdf2_sha256

app = Flask(__name__)
CORS(app)

db =BaseDatos()

noticias_col = db.obtener_colecciones('Noticias')
miembros_col = db.obtener_colecciones('Miembros')

@app.route('/')
def App():
    return jsonify({"message": "API funcionando"})

@app.route('/api/noticias')
def get_noticias():
    data = list(noticias_col.find())
    print("DATOS MONGO:", data)

    noticias = []
    for noticia in data:
        noticias.append({
            "titulo": noticia.get("titulo"),
            "descripcion": noticia.get("descripcion"),
            "imagen": noticia.get("imagen")
        })

    return jsonify(noticias)

@app.route('/api/users')
def get_users():
    return {
        'users': [
            {
                'id': 1,
                'name': 'Alice'
            },
            {
                'id': 2,
                'name': 'Bob'
            },
            {
                'id': 3,
                'name': 'Charlie'
            }
        ]
    }

@app.route('/api/fruits')
def get_fruits():
    return  ['Apple','Banana','Cherry']
    

if __name__ ==  '__main__':
    app.run(debug=True)