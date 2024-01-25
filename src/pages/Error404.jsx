import { NavLink } from "react-router-dom";

export default function Error404() {
  return (
    <main className="container">
        <h1 className="mt-4">Error 404</h1>
        <p>Page not found</p>
        <NavLink to={"/"}>Go to home</NavLink>
    </main>
  )
}
