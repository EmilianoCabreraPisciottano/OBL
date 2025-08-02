import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const user = useRef(null);
  const pass = useRef(null);

  const ingresar = () => {
    const campoUser = user.current.value;
    const campoPass = pass.current.value;

    if (campoUser === "a" && campoPass === "a") {
      localStorage.setItem("usuario", campoUser);
      navigate("/Clima");
    } else {
      setError(true);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%", borderRadius: "20px" }}>
        <h3 className="text-center mb-4" style={{ color: "#04c3fdff" }}>Iniciar Sesión</h3>

        <div className="mb-3">
          <label htmlFor="txtUser" className="form-label ">  Usuario</label>
          <input type="text" id="txtUser" ref={user} className="form-control" placeholder="Ingrese su usuario" />
        </div>

        <div className="mb-3">
          <label htmlFor="txtPass" className="form-label">Contraseña</label>
          <input type="password" id="txtPass" ref={pass} className="form-control" placeholder="Ingrese su contraseña" />
        </div>

        <div className="d-grid">
          <button onClick={ingresar} className="btn" style={{ backgroundColor: "#5ccddcff", color: "#fff" }}>
            Ingresar
          </button>
        </div>

        {error && (
          <div className="alert alert-danger mt-3 text-center p-2" role="alert">
            Usuario y/o contraseña incorrectos
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
