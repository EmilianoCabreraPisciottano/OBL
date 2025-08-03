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
            <NavLink to="/">Ir al Inicio</NavLink> | <NavLink to="/clima">Ir a Clima</NavLink><hr /><br />
                    </div>
                </div>
            </nav>

        <Outlet />
        </div>
    )
}

export default Menu