import Banner from "./components/Banner"
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemsSaleContainer from "./components/ItemsSaleContainer";
import NavBar from "./components/NavBar"
import "./style.css";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <ItemsSaleContainer />
      <ItemListContainer greeting={"Pagina en desarrollo"} />
      <Footer />
    </>
  )
}

export default App
