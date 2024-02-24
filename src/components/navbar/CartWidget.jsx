import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"

export default function CartWidget() {

    const { cart } = useCartContext();
    return (
        <NavLink to={'/cart'} className="text-white d-flex gap-2" >
            <p>Cart</p>
            <div>
                <i className="bi bi-cart"></i>
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">{cart.length}</span>
            </div>
        </NavLink>
    )
}
