import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Mobilenav from "./components/Mobilenav";
//import { useGlobal } from "./Hooks/Content";
import Cart from "./screens/Cart";
import Error from "./screens/Error";
import Footer from "./screens/Footer";
import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import ProductDetails from "./screens/ProductDetails";
import Signin from "./screens/Signin";
import Register from "./screens/Register";
import Delivery from "./screens/Delivery";
import Order from "./screens/Order";
import Payment from "./screens/Payment";
import Mini from "./components/Mini";
import Setting from "./screens/Setting";
import Thanks from "./screens/Thanks";
import Addproduct from "./screens/Addproduct";
import Menu from "./screens/Menu";
import ProductDetails2 from "./screens/ProductDetails2";
import Services from "./screens/Services";
import Contactus from "./screens/Contactus";
import MobileSearch from "./screens/Mobilesearch";


function App() {
  return (
   <>
       <Router>
          <Navbar />
          <Mobilenav/>
              <main className="theme">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/product/:id" element={<ProductDetails/>}></Route>
                    <Route path="/menu/product/:id" element={<ProductDetails2/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/login" element={<Signin/>}></Route>
                    <Route path="/signup" element={<Register/>}></Route>
                    <Route path="/delivery" element={<Delivery/>}></Route>
                    <Route path="/order" element={<Order/>}></Route>
                    <Route path="/mini/:id" element={<Mini/>}></Route>
                    <Route path="/payment/:id" element={<Payment/>}></Route>
                    <Route path="/newproduct" element={<Addproduct/>}></Route>
                    <Route path="/setting" element={<Setting/>}></Route>
                    <Route path="/menu" element={<Menu/>}></Route>
                    <Route path="/thanks" element={<Thanks/>}></Route>
                    <Route path="/services" element={<Services/>}></Route>
                    <Route path="/about" element={<Contactus/>}></Route>
                    <Route path="/search" element={<MobileSearch/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                </Routes>
              </main>
              <Footer/>
        </Router>
   </>
  );
}

export default App;
