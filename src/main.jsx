import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbarTransparentId");
    window.scrollY > 0?  
    navbar.classList.remove("bg-transparent"):
    navbar.classList.add("bg-transparent");
});