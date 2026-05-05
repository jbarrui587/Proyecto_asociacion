from flask import Flask, jsonify, request, session,redirect,url_for,flash
from models.database import BaseDatos
from flask_cors import CORS
from passlib.hash import pbkdf2_sha256
import re

app = Flask(__name__)
CORS(app)

db =BaseDatos()



noticias_col = db.obtener_colecciones('Noticias')
miembros_col = db.obtener_colecciones('Miembros')
galeria_col = db.obtener_colecciones('Galeria')

@app.route('/')
def home():
    return "Servidor funcionando"

@app.route('/api/noticias')
def get_noticias():
    data = list(noticias_col.find())
   

    noticias = []
    for noticia in data:
        noticias.append({
            "titulo": noticia.get("titulo"),
            "descripcion": noticia.get("descripcion"),
            "imagen": noticia.get("imagen")
        })

    return jsonify(noticias)

@app.route('/api/galeria')
def get_fotos():
    
    data = list(galeria_col.find())
   
    galeria = []
    for foto in data:
        galeria.append({
            "imagen": foto.get("imagen"),
            "titulo": foto.get("titulo")
        })

    return jsonify(galeria)

    

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('username')
    password = data.get('password')

    miembros = db.lista_miembros(miembros_col)

    login_user = None

    for usuario in miembros:
        if usuario['username'] == username:
            login_user = usuario
            break

    
        # Validar si existe el usuario y la contraseña

        if login_user and pbkdf2_sha256.verify(password, login_user['password']):
            
            session['username'] = login_user['username']
            session['rol'] = login_user['rol']
            session['dni'] = login_user.get('dni')

            return jsonify({
                "success": True,
                "rol": login_user['rol']
            })
            
    return({
        "success": False,
        "message":"Credenciales incorrectas"
    }),401

@app.route('/api/registro', methods=['POST'])
def registro():
    
    data = request.get_json()

    if not data:
        return jsonify({'error': 'No se recibió JSON válido'}), 400

    passwd = data.get('password')

    if not passwd:
        return jsonify({'error': 'Password requerido'}), 400

    password_regex = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$'

    if not re.match(password_regex, passwd):
        return jsonify({
            'error': 'La contraseña debe tener entre 8 y 15 caracteres, incluir mayúsculas, minúsculas y números'
        }), 400

    passwd_hash = pbkdf2_sha256.hash(passwd)

    
    email = data.get('email')

    if not email:
        return jsonify({'error': 'Email requerido'}), 400

    email_regex = r'^[\w\.-]+@[\w\.-]+\.\w{2,}$'

    if not re.match(email_regex, email):
        return jsonify({'error': 'Formato de email inválido'}), 400

     # Validar campos antes de usar .upper() o .lower()
    username = data.get('username')
    nombre = data.get('nombre')
    apellidos = data.get('apellidos')
    dni = data.get('dni')
    telefono = data.get('telefono')
    email = data.get('email')
    

    if not all([username, nombre, apellidos,dni, telefono, email ]):
        return jsonify({'error': 'Faltan campos obligatorios'}), 400

    dict_usuario = {
        'username': data.get('username').lower(),
        'password': passwd_hash,
        'nombre': data.get('nombre').title(),
        'apellidos': data.get('apellidos').title(),
        'dni': data.get('dni').upper(),
        'telefono': data.get('telefono'),
        'email': data.get('email').lower(),
        'rol': 'miembro'
    }

    #  Validaciones (Mongo directamente)
    if miembros_col.find_one({'dni': dict_usuario['dni']}):
        return jsonify({'error': 'Ya existe un usuario con ese DNI'}), 400

    if miembros_col.find_one({'telefono': dict_usuario['telefono']}):
        return jsonify({'error': 'Ya existe un usuario con ese telefono'}), 400

    if miembros_col.find_one({'email': dict_usuario['email']}):
        return jsonify({'error': 'Ya existe un usuario con ese email'}), 400

    if miembros_col.find_one({'username': dict_usuario['username']}):
        return jsonify({'error': 'Ya existe un usuario con ese username'}), 400

    miembros_col.insert_one(dict_usuario)

    return jsonify({'mensaje': 'Usuario registrado correctamente'}), 201

if __name__ ==  '__main__':
    BaseDatos.inicializar_colecciones(BaseDatos())
    BaseDatos.insertar_admin(BaseDatos())
    app.run()