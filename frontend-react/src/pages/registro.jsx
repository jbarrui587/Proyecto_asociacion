import "../styles/registro.css"
function Registro(){
    return(
        <>
        <h1>Registro</h1>
        <main id="contenedor-login">
        <form action="" method="post" id="login">
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" placeholder="Password" required />
        </div>
        <div className="form-group">   
            <label htmlFor="nombre">Nombre Completo: </label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre Completo" required/>
        </div>
        <div className="form-group">  
            <label htmlFor="dni">DNI: </label>
            <input type="text" pattern="[0-9]{8}[a-zA-Z]{1}" name="dni" id="dni" placeholder="DNI" required/>
        </div>
        <div className="form-group">   
            <label htmlFor="telefono">Teléfono: </label>
            <input type="tel" name="telefono" id="telefono" placeholder="Teléfono" required />
        </div>
        <div className="form-group">  
            <label htmlFor="email">E-mail: </label>
            <input type="email" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" name="email" id="email" placeholder="E-mail" required />
        </div>    
        <div className="botones">  
            <input type="submit" value="Registrarse" />
            <input type="reset" value="Borrar" />
        </div>
        </form>
        <a href="./login">Volver</a>
        </main>
        </>
    )
}

export default Registro