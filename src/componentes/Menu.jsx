import { Outlet, NavLink, useNavigate } from "react-router"


const Menu = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate("/");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                   <NavLink to="/dashboard"> Dashboard</NavLink>
                   
                   <button onClick={logout} className="btn btn-link">Cerrar Sesión</button>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Menu