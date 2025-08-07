
import React, { useRef, useState, useEffect } from 'react';
import { data, useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { useDispatch } from "react-redux";
import { AgregarEvaluacion as AgregarEvaluacionAction } from "../store/slices/AgregarEvaluacion";

const AgregarEvaluacion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [objetivos, setObjetivos] = useState([]);
  const UseObjetivo = useRef(null);
  const UseCalificacion = useRef(null);
  const UseFecha = useRef(null);

  useEffect(() => {
    const TraerObjetivos = async () => {
      try {
        const token=localStorage.getItem("token");
        const idUsu=localStorage.getItem("userId");
        console.log("Token:", token);
console.log("User ID:", idUsu);
        const response = await fetch("https://goalify.develotion.com/objetivos.php", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
             "token": token,
             "iduser": idUsu
          }
        });
        console.log(data);  
        if (response.ok) {
          const data = await response.json();
          setObjetivos(data.objetivos);
        } else {
          setError("Error al obtener los objetivos");
        }
      } catch (err) {
        console.error("Error al conectar con la API de objetivos:", err);
        setError("Error de conexión con la API de objetivos");
      }
    };
    TraerObjetivos();
  }, []);

  const EnviarEvaluacion = async (e) => {
    e.preventDefault();// Evitar el envío del formulario por defecto 
    const campoObjetivo = UseObjetivo.current.value;
    const campoCalificacion = UseCalificacion.current.value;
    const campoFecha = UseFecha.current.value;

    if (campoObjetivo && campoCalificacion && campoFecha) {
      try {
        // Se asume que el usuarioId se obtiene desde localStorage
        const usuarioId = localStorage.getItem("userId") ;
        const response = await fetch("https://goalify.develotion.com/evaluaciones.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token"),
            "iduser": usuarioId
          },
          body: JSON.stringify({
            idObjetivo: parseInt(campoObjetivo),           
            idUsuario: parseInt(usuarioId),  
            calificacion: parseInt(campoCalificacion),
            fecha: campoFecha  
          })
        });

        if (response.status === 200) {

            dispatch(AgregarEvaluacion());

            console.log("Evaluación enviada exitosamente");

        } else {
          setError("Error al enviar la evaluación");
        }
      } catch (err) {
        console.error("Error al conectar con la API de evaluación:", err);
        setError("Error de conexión con la API de evaluación");
      }
    } else {
      setError("Por favor, complete todos los campos.");
    }
  };

  return (
    <div>
      <h2>Agregar Evaluación</h2>
      <form onSubmit={EnviarEvaluacion}>
        <div className="mb-3">
          <label htmlFor="objetivo" className="form-label">Objetivo</label>
          <select className="form-control" id="objetivo" ref={UseObjetivo}>
            <option value="">Seleccione un objetivo</option>
            {objetivos && objetivos.map((item) => (
              <option key={item.id} value={item.id}>{item.nombre}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="calificacion" className="form-label">Calificación</label>
          <input type="number" className="form-control" id="calificacion" ref={UseCalificacion} />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha</label>
          <input type="date" className="form-control" id="fecha" ref={UseFecha} />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default AgregarEvaluacion;