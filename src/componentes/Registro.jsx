import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { agregarRegistro } from "../store/slices/registrarSlice";

const Registro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const user = useRef(null);
  const pass = useRef(null);
  const email = useRef(null);
  const pais = useRef(null);

  const registrar = (e) => {
    e.preventDefault(); // Prevenir el envío del formulario
    const campoUser = user.current.value;
    const campoPass = pass.current.value;
    const campoEmail = email.current.value;
    const campoPais = pais.current.value;

    if (campoUser && campoPass && campoEmail && campoPais) {
      // Agregar el nuevo usuario al store (solo en memoria)
      const nuevoUsuario = {
        id: Date.now(), // ID temporal usando timestamp
        nombre: campoUser,
        email: campoEmail,
        pais: campoPais,
        password: campoPass // Guardamos la contraseña para posible validación futura
      };
      
      dispatch(agregarRegistro(nuevoUsuario));
      
      // Guardar en localStorage para mantener la sesión
      localStorage.setItem("usuario", campoUser);
      localStorage.setItem("email", campoEmail);
      localStorage.setItem("pais", campoPais);
      
      // Limpiar formulario
      user.current.value = "";
      pass.current.value = "";
      email.current.value = "";
      pais.current.value = "";
      setError(false);
      
      navigate("/login");
    } else {
      setError(true);
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Registro</h2>
        
        <form onSubmit={registrar}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">Usuario</label>
            <input type="text" id="usuario" ref={user} className="form-control" placeholder="Ingresa tu nombre de usuario" required />
          </div>

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
            <button type="submit" className="btn">Registrar</button>
            {error && <p className="text-danger mt-2">Error: Todos los campos son obligatorios</p>}
          </div>
        </form>

        <div className="mt-3">
          <button onClick={() => navigate("/login")} className="btn btn-link">
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registro;