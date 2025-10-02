import './ComponentesHook.css'
import React, {useState} from "react";

function Counter(){
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        if (contador < 10){
            setContador(contador + 1)
        }
    }
    const decrementarContador = () =>{
        if (contador > 0){
        setContador(contador - 1)
        }
    }
    const resetContador = () => {
        setContador(0)
    }

    return (
        <div className='counter'>
            <h1>{contador}</h1>
            <div className='counter-controls'>
            <button onClick={aumentarContador}>
                +1 PUNTO
            </button>
            {contador == 10 ? <p>Alcanzaste el límite</p> : null}
            <button  onClick={decrementarContador}>
                -1 PUNTO
            </button>
            {contador == 0 ? <p>Alcanzaste el límite</p> : null}
            <button  onClick={resetContador}>
                RESET
            </button>
            </div>
        </div>
    )
}

export default Counter