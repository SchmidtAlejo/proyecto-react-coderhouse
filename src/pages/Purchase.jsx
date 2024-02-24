import { NavLink, useParams } from "react-router-dom";

export default function Purchase() {

    const { id } = useParams();

    return (
        <main className="container mt-3">
            <h1>Thank you for purchasing</h1>
            <p>Your purchase ID is: {id}</p>
            <NavLink to="/">Back to Home</NavLink>
        </main>
    )
}
