import logo from '../assets/images/logo.png'

function Header(){
    return (
        <>
        <header id='header'>
            <img src={logo} alt="logo de la asociación" style={{width :'100px'}}></img>
            <h1>Asociación Abderitana de Agua Natural</h1>
        </header>
        </>
    )
}

export default Header