import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom";
import capitalLeterHelper from "../helpers/capitalLeterHelper";
import Banner from "./Banner";
import ItemsSaleContainer from "./ItemsSaleContainer";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export default function ItemListContainer({ children }) {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    const { categoryId } = useParams();

    useEffect(() => {

        const db = getFirestore();

        const q = categoryId === undefined ? query(collection(db, 'products')) : query(collection(db, 'products'), where("category", "==", categoryId));

        getDocs(q).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
    }, [categoryId])

    return (
        <main>
            {categoryId === undefined ?
                <>
                    <Banner />
                    <ItemsSaleContainer />
                </>
                : <></>}
            <div className="container mt-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {
                            categoryId !== undefined ?
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">{capitalLeterHelper(categoryId)}</li>
                                    </ol>
                                </nav>
                                :
                                <></>
                        }
                    </ol>
                </nav>
                <h1 className='mb-4'>{title}</h1>
                <div className="row justify-content-start mx-auto">
                    {
                        products.map(product => (
                            <NavLink
                                key={product.id}
                                className="px-1 col-sm-6 col-md-4 col-lg-3 product-card"
                                to={`/item/${product.id}`}>
                                <div
                                    key={product.id}
                                    className="card mb-3 bg-dark border-dark text-white"
                                    style={{ height: "350px" }}>
                                    <img
                                        src={product.images[0]}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                        className="card-img-top bg-white"
                                        alt={"imagen de " + product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-title">${product.price}</p>
                                    </div>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </main>

    )
}
