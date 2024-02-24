import { NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import InputsContainer from "../components/InputsContainer";
import Loading from "../components/Loading";

export default function Cart() {

    const initialState = { name: "", email: "", phone: "" }
    const { cart, total, clear, removeItem } = useCartContext();
    const [buyer, setBuyer] = useState({ ...initialState });
    const [error, setError] = useState({ ...initialState });
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = (e) => {
        e.preventDefault();

        setError({ ...initialState });

        const purchase = {
            buyer,
            cart,
            total,
        }

        const db = getFirestore();
        const ref = collection(db, "orders");

        const localError = {};

        for (const key in buyer) {
            if (!buyer[key]) {
                localError[key] = `${key} is requiered`
            }
        }

        if (Object.keys(localError).length > 0) {
            setError(localError);
            return
        }

        setIsLoading(true);

        addDoc(ref, purchase)
            .then((res) => {
                clear();
                navigate(`/purchase/${res.id}`);
            }).catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    }

    return (
        <main className="container mt-4 cart">
            <h1>Cart</h1>
            {
                cart.length > 0 ?
                    !isLoading ?
                        <div className="bg-dark rounded-4 p-3 d-flex flex-column gap-3 mb-3">
                            {
                                cart.map(item => (
                                    <div key={item.id} className="d-flex w-100 gap-3">
                                        <img src={item.thumbnail} alt="product image" className="rounded-2" style={{ height: 96, width: 128 }} />
                                        <div className="d-flex justify-content-between flex-grow-1">
                                            <div className="d-flex flex-column justify-content-between">
                                                <p>{item.title}</p>
                                                <p className="text-white-50 mb-0">Qty {item.qty}</p>
                                            </div>
                                            <div className="d-flex flex-column justify-content-between">
                                                <p className="text-end">${item.price}</p>
                                                <p
                                                    className="text-danger mb-0"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => removeItem(item)}
                                                >Remove</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <form className="mt-4" onSubmit={handleCheckout}>
                                <div className="d-flex flex-column gap-3">
                                    <InputsContainer formData={buyer} onChange={handleChange} error={error} />
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="text-white-50">Total:</p>
                                    <p>${total}</p>
                                </div>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-danger flex-grow-1" onClick={clear}>Empty cart</button>
                                    <button className="btn btn-primary flex-grow-1" onClick={handleCheckout}>Checkout</button>
                                </div>
                            </form>
                        </div> :
                        <>
                            <Loading>Procesando compra...</Loading>
                        </>
                    : <>
                        <h3>You don't have any product added in your cart</h3>
                        <NavLink to={'/'}>
                            Go Back Home
                        </NavLink>
                    </>
            }
        </main>
    )
}
