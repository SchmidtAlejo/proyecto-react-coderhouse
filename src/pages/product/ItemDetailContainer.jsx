import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import { Counter } from "../../components/Counter";
import capitalLeterHelper from "../../helpers/capitalLeterHelper";

export default function ItemDetailContainer() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((res) => {
                setProduct(res);
            })
    }, []);

    return (
        <main className="container product-container">
            {
                product !== null ?
                    <div className="mt-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                <li className="breadcrumb-item"><NavLink to={`/category/${product.category}`}>{capitalLeterHelper(product.category)}</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
                            </ol>
                        </nav>
                        <div className="product-info-container">
                            <div className="product-imagen-container">
                                <img src={product.images[0]} />
                            </div>
                            <div className="product-data-container">
                                <h1>{product.title}</h1>
                                <h2 className="mb-4">${product.price}</h2>
                                <h3>Description</h3>
                                <p>
                                    {
                                        product.description
                                    }
                                </p>
                                <Counter max={product.stock} />
                                <div className="product-button-container">
                                    <button className="btn btn-primary">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-descripcion-container">
                        </div>
                    </div>
                    : <></>
            }
        </main>
    )
}
