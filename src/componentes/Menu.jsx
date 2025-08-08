
import { Outlet, useNavigate } from "react-router"
import { Outlet, NavLink, useNavigate } from "react-router"



const Menu = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate("/");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button onClick={logout} className="btn btn-link nav-link">Cerrar Sesión</button>
                    </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                   <div className="d-flex">
                       <NavLink to="/dashboard" className="nav-link me-3">Dashboard</NavLink>
                       <NavLink to="/evaluaciones" className="nav-link me-3">Evaluaciones</NavLink>
                   </div>
                   
                   <button onClick={logout} className="btn btn-link">Cerrar Sesión</button>
                </div>
            </nav>
            <Outlet />
        </div>
        </nav>
        </div>
    )
}

export default Menu