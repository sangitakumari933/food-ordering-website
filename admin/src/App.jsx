import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";

const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <NavBar></NavBar>
      <hr />
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url} />}></Route>
          <Route path="/list" element={<List url={url} />}></Route>
          <Route path="/orders" element={<Orders url={url} />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
