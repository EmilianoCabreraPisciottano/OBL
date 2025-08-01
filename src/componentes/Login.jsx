import { useRef, useState } from "react"
import { useNavigate } from "react-router";


const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const user = useRef(null);
    const pass = useRef(null)

    const ingresar = () => {
        let campoUser = user.current.value;
        let campoPass = pass.current.value;

        if(campoUser === "a" && campoPass === "a"){
            localStorage.setItem("usuario", campoUser);
            navigate("/clima")
        }else{
            setError(true)
        }
    }

  return (
    <div className="container">
        <label htmlFor="txtUser">Usuario:</label>
        <input type="text" id="txtUser" ref={user}/><br />

        <label htmlFor="txtPass">Password:</label>
        <input type="text" id="txtPass" ref={pass}/><br />

        <input type="button" value="Ingresar" onClick={ingresar}/>
        {error ? <p>Error en usuario y/o contraseña</p> : null}
        
    </div>
  )
}

export default Login