import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL
axios.defaults.baseURL = url;

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <NavBar></NavBar>
      <hr />
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add axios={axios} />}></Route>
          <Route path="/list" element={<List axios={axios} />}></Route>
          <Route path="/orders" element={<Orders axios={axios} />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
