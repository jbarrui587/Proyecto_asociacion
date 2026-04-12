function Carta_foto({imagen,titulo}){
    return(
        <div>
            <div>
                 <img src={imagen} alt={titulo} />
            </div>
            <div>
                <p>{titulo}</p>
            </div>
            
        </div>
    )
}

export default Carta_foto