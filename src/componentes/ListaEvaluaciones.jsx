import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"  
import { cargarListaEvaluaciones } from "../store/slices/evaluacionesSlice";

const ListaEvaluaciones = () => {
    const dispatch = useDispatch();
    const evaluaciones = useSelector(state => state.evaluaciones.listaEvaluaciones);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        
        if (!token || !userId) {
            console.log("No hay sesión activa");
            return;
        }

        fetch(`https://goalify.develotion.com/evaluaciones.php?idUsuario=${userId}&apiKey=${token}`)
            .then(response => response.json())
            .then(data => {
                console.log("Data recibida:", data);
                if (data.codigo === 200) {
                    dispatch(cargarListaEvaluaciones(data.evaluaciones || []));
                } else {
                    console.error("Error de API:", data.mensaje);
                    dispatch(cargarListaEvaluaciones([]));
                }
            })
            .catch(error => {
                console.error("Error de conexión:", error);
                dispatch(cargarListaEvaluaciones([]));
            });
    }, [dispatch]);

    // Asegurar que evaluaciones sea siempre un array
    const evaluacionesArray = Array.isArray(evaluaciones) ? evaluaciones : [];

    return (
        <div>
            <h2>Lista de Evaluaciones</h2>
            {evaluacionesArray.length === 0 ? (
                <p>No hay evaluaciones disponibles</p>
            ) : (
                <ul>
                    {evaluacionesArray.map(evaluacion => (
                        <li key={evaluacion.id}>
                            {evaluacion.emoj || '📊'} {evaluacion.nombre || 'Sin nombre'} - {evaluacion.calificacion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaEvaluaciones;