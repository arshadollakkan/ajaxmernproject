import { Route ,Routes} from "react-router-dom"
import Nabarv from "./components/navbar/navbar"
import Shop from "./pages/shop"
import Shopcategory from "./pages/shopcategory"
import Product from "./pages/product"
import Cart from "./pages/cart"
import Loginsignup from "./pages/loginsignup"


function App() {


  return (
    <>
      
       <Nabarv/>
       <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<Shopcategory category="men"/>}/>
        <Route path="/womens" element={<Shopcategory category="womens"/>}/>
        <Route path="/kids" element={<Shopcategory category="kids"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/:productid" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/login" element={<Loginsignup/>}/>

       </Routes>
      
    </>
  )
}

export default App
