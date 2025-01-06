import {useEffect, useRef, useState} from "react";
import RefExemple from "./RefExemple.jsx";

function Couter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Iniciando component');
        return () => {
            console.log('Limpando component');
            console.log('Finalizando component');
        }
    }, []);

    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
        </div>
    )
}

function App() {
    let variable = 0;
    const [state, setState] = useState(0);
    const ref = useRef(0);

    const [show, setShow] = useState(false);

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
            <hr/>
            <button onClick={showVariabel}>Mostrar Valores</button>

            <hr/>
            <h2>Exemplo de useRef com o DOM</h2>
            <RefExemple/>

            <br/>
            <hr/>

            <h2>Exemplo de useEffect</h2>
            <label htmlFor="show">Mostrar contador</label>
            <input type="checkbox" id="show" value={show} onChange={() => setShow(state => !state)} />
            {show ? <Couter /> : null}
        </div>
    )
}

export default App
