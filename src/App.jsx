import Banner from "./components/Banner"
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemsSaleContainer from "./components/ItemsSaleContainer";
import Navbar from "./components/Navbar"
import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ItemsSaleContainer />
      <ItemListContainer greeting={"Pagina en desarrollo"} />
      <Footer />
    </>
  )
}

export default App
