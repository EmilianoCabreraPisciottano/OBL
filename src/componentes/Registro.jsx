import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { agregarRegistro, eliminarRegistro } from "../store/slices/registrarSlice";

const Registro = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);



  const user = useRef(null);
  const pass = useRef(null);
  const email = useRef(null);
  const pais = useRef(null);

  const registrar = () => {
    let campoUser = user.current.value;
    let campoPass = pass.current.value;
    let campoEmail = email.current.value;
    let campoPais = pais.current.value;

    if (campoUser && campoPass && campoEmail && campoPais) {
      localStorage.setItem("usuario", campoUser);
      localStorage.setItem("email", campoEmail);
      localStorage.setItem("pais", campoPais);
      navigate("/login");
    } else {
      setError(true);
    }
  }

  return (
    <div class="container">
      <div class="form-container">
        <h2 class="form-title">Registro</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" id="email" ref={email} className="form-control" placeholder="ejemplo@dominio.com" required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" id="password" ref={pass} className="form-control" placeholder="********" required />
        </div>

        <div className="mb-3">
          <label htmlFor="pais" className="form-label">País</label>
          <input type="text" id="pais" ref={pais} className="form-control" placeholder="Uruguay" required />
        </div>

        <div className="d-grid">
          <input type="button" className="btn" value="Registrar" onClick={registrar} />
          {error ? <p>Error en los campos</p> : null}
        </div>
      </div>
    </div>
  )
}
export default Registro;