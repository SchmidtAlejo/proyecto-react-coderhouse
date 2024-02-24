import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useCount } from "../hooks/useCount"

export const Counter = ({ product }) => {
    const { count, decrement, increment, reset } = useCount(0, 0, product.stock);
    const { addToCart, cart, isInCart } = useCartContext();
    const navigate = useNavigate();

    const handleClick = () => {
        if (count === 0) {
            console.log('The count is in 0');
            return;
        }

        if (isInCart(product.id)) {
            console.log('The product is already added');
            return;
        }
        addToCart({ ...product, qty: count });
        navigate('/cart');
    }

    return (
        <>
            <div className="counter d-flex align-items-center rounded-2">
                <button className="rounded-2" onClick={decrement}>-</button>
                <p className="text-center m-0" style={{ flex: 1 }}>{count}</p>
                <button className="rounded-2" onClick={increment}>+</button>
            </div>
            <div className="product-button-container">
                <button className="btn btn-primary" onClick={handleClick} >Buy</button>
            </div>
        </>
    )
} 