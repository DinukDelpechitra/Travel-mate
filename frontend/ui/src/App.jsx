import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/tourpackage/admin/Home";
import DisplayPackage from "./components/tourpackage/customer/Displaypackage";
import TravelManagement from "./components/tourpackage/admin/Travelmanagement";
import Navbar from "./components/tourpackage/customer/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<DisplayPackage />} />



          <Route path="/addpackage" element={<Home/>} />
          <Route path="/admin/travel" element={<TravelManagement/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
