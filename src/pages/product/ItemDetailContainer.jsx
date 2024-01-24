import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { Counter } from "../../components/Counter";

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
                    <>
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
                                <Counter max={product.stock}/>
                                <div className="product-button-container">
                                    <button className="btn btn-primary">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-descripcion-container">
                        </div>
                    </>
                    : <></>
            }
        </main>
    )
}
