import {useRef} from "react";

export default function RefExemple() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focar no Input</button>
        </div>
    )
}
