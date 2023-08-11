import { useState ,createContext, lazy, Suspense } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
//import "react-toastify/dist/ReactToastify.css";
const Home =lazy(()=> import("./pages/Home"))
const Shop =lazy(()=> import("./pages/Shop"))
const ProductDetails =lazy(()=> import("./pages/ProductDetails"));
export const DataContainer = createContext();
function App() {
  const [selectedProduct,setSelectedProduct]=useState(null);

  return (
    <DataContainer.Provider value={{selectedProduct,setSelectedProduct}}>
      <Suspense fallback={<Loader/>}>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop/:id' element={<ProductDetails/>}/>
          </Routes>
        </Router>
      </Suspense>
    </DataContainer.Provider>
  )
}

export default App
