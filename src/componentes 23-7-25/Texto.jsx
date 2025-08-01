import { useRef, useState } from "react";

const Texto = () => {

    const [nombre, setNombre] = useState("");
    const campo = useRef(null);

    const actualizar = event => {
        console.log(event.target.value);
        // setNombre(event.target.value);
    }

    const guardar = () => {
        setNombre(campo.current.value)
    }
    
    return (
        <div>
            {/* <label htmlFor="txtNombre">Nombre:</label>
        <input type="text"  id="txtNombre"/><br /> */}
            <label>
                Nombre:
                <input type="text" ref={campo} onChange={actualizar} />
            </label>
            <input type="button" value="Guardar" onClick={guardar} />
            <h3>{nombre}</h3>
        </div>
    )
}

export default Texto