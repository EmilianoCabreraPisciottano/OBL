import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const Registro = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);



  const user = useRef(null);
  const pass = useRef(null);
  const email = useRef(null);
  const country = useRef(null);

  const registrar = () => {
    let campoUser = user.current.value;
    let campoPass = pass.current.value;
    let campoEmail = email.current.value;
    let campoCountry = country.current.value;

    if (campoUser && campoPass && campoEmail && campoCountry) {
      localStorage.setItem("usuario", campoUser);
      localStorage.setItem("email", campoEmail);
      localStorage.setItem("country", campoCountry);
      navigate("/Login");
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
          <input type="email" id="email" className="form-control" placeholder="ejemplo@dominio.com" required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" id="password" className="form-control" placeholder="********" required />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">País</label>
          <input type="text" id="country" className="form-control" placeholder="Uruguay" required />
        </div>

        <div className="d-grid">
          <input type="button" className="btn btn-custom" value="Registrar" onClick={registrar} />
          {error ? <p>Error en los campos</p> : null}
        </div>
      </div>
    </div>
  )
}