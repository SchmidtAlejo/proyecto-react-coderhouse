import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar"
import "./style.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Error404 from "./pages/Error404";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Purchase from "./pages/Purchase";

function App() {
    return (
        <div className="content">
            <CartProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer>All products on sale</ItemListContainer>} />
                        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/purchase/:id" element={<Purchase />} />
                        <Route path="/*" element={<Error404 />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </div>
    )
}

export default App
