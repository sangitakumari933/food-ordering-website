import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import LoginPopup from "./components/LoginPopup";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    document.body.style.overflow = showLogin ? "hidden" : "auto";

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLogin]);

  return (
    <div className="relative">
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="w-[90%] mx-auto">
        <NavBar setShowLogin={setShowLogin}></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/myorders" element={<MyOrders/>}/>
          <Route />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
