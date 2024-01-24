import { useEffect, useState } from "react"
import logo from "../../assets/logo.webp"
import CartWidget from "./CartWidget"
import capitalLeterHelper from "../../helpers/capitalLeterHelper"
import { NavLink } from "react-router-dom"

export default function Navbar() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(res => {
                setCategories(res.slice(0, 6));
            })
    }, [])

    return (
        <header className="position-fixed top z-3">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" id="navbarTransparentId">
                <div className="container">
                    <NavLink className="navbar-brand logo" to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i style={{ fontSize: "32px" }} className="bi bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <div style={{ flex: 1 }}></div>
                        <ul className="navbar-nav">
                            {
                                categories.map(category => (
                                    <li key={category} className="nav-item">
                                        <NavLink className="nav-link text-center" to={`/category/${category}`}>{capitalLeterHelper(category)}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="nav-link navbar__cart" style={{ flex: 1 }}><CartWidget /></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}