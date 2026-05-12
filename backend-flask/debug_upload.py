import os
import time

basedir = os.path.abspath(os.path.dirname(__file__))
UPLOAD_FOLDER = os.path.join(basedir, 'static', 'uploads')

print(f"Directorio base: {basedir}")
print(f"Carpeta de uploads (absoluta): {UPLOAD_FOLDER}")

if not os.path.exists(UPLOAD_FOLDER):
    print("La carpeta no existe. Intentando crearla...")
    try:
        os.makedirs(UPLOAD_FOLDER)
        print("Carpeta creada con éxito.")
    except Exception as e:
        print(f"Error al crear la carpeta: {e}")
else:
    print("La carpeta ya existe.")

# Intentar escribir un archivo de prueba
test_file = os.path.join(UPLOAD_FOLDER, f"test_{int(time.time())}.txt")
try:
    with open(test_file, 'w') as f:
        f.write("test")
    print(f"Archivo de prueba creado: {test_file}")
    if os.path.exists(test_file):
        print("Confirmado: El archivo de prueba EXISTE en el disco.")
        # os.remove(test_file)
    else:
        print("ERROR: El archivo de prueba NO EXISTE después de escribirlo.")
except Exception as e:
    print(f"Error al escribir archivo de prueba: {e}")

print("\nContenido de static/uploads:")
try:
    print(os.listdir(UPLOAD_FOLDER))
except Exception as e:
    print(f"Error al listar: {e}")
