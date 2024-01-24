import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar"
import "./style.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./pages/product/ItemDetailContainer";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer>All products on sale</ItemListContainer>} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
