import {useRef, useState} from "react";
import RefExemple from "./RefExemple.jsx";

function App() {
    let variable = 0;
    const [state, setState] = useState(0);
    const ref = useRef(0);

    const showVariabel = () => {
        alert(
            `
            Variable: ${variable}
            Ref: ${ref.current}
            State: ${state}
            `
        )
    }

    return (
        <div>
            <h2>Conhecendo o useRef</h2>
            <p>Variable: {variable}</p>
            <p>Ref: {ref.current}</p>
            <p>State: {state}</p>

            <button onClick={() => variable++}>Aumentar Variavel</button>
            <button onClick={() => ref.current++}>Aumentar useRef</button>
            <button onClick={() => setState(state + 1)}>Aumentar State</button>
            <hr />
            <button onClick={showVariabel}>Mostrar Valores</button>

            <hr />
            <h2>Exemplo de useRef com o DOM</h2>
            <RefExemple />
        </div>
    )
}

export default App
