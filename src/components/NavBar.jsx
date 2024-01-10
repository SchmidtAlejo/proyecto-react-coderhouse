import logo from "../assets/logo-dark.webp"
import CartWidget from "./CartWidget"

export default function NavBar() {

    return (
        <header className="position-fixed top z-3">
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-transparent" data-bs-theme="dark" id="navbarTransparentId">
                <div className="container">
                    <a className="navbar-brand logo" href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i style={{fontSize: "32px"}} className="bi bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <div style={{ flex: 1 }}></div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-center" href="#tienda">Tienda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-center" href="#nosotros">Acerca de nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-center" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                        <div className="nav-link navbar__cart" style={{ flex: 1 }}><CartWidget /></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}