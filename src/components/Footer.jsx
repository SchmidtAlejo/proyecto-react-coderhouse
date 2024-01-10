import logo from "../assets/logo-dark.webp"

export default function Footer() {
    return (
        <footer className="mt-5" data-bs-theme="dark">
            <div className="container">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <ul>
                    <li>
                        <a href="#facebook">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#instagram">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#pinterest">
                            <i className="bi bi-pinterest"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#linkedin">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#youtube">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
import React from 'react'