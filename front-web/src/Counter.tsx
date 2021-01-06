import { useState } from "react";
import { isConstructorDeclaration } from "typescript";
import App from "./App";

function Counter(){

    const[counter ,setCounter]=useState(0);

const handIncrease = () =>{
    setCounter(counter +1);

}
const handDecrease = ()=>{

setCounter(counter-1);

}

return(
    <div>
        <h3>
            <button onClick={handIncrease}>incrementar</button>
            <button onClick={handDecrease}>Decrementar</button>
        </h3>
        <h1>Valor do Contador : {counter}</h1>
    </div>

  )
}

export default Counter  ;