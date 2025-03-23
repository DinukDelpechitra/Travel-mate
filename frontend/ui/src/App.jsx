import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/tourpackage/admin/Home";
import DisplayPackage from "./components/tourpackage/customer/Displaypackage";
import TravelManagement from "./components/tourpackage/admin/Travelmanagement";
import Navbar from "./components/tourpackage/customer/Navbar";
import PackageDetails from "./components/tourpackage/customer/PackageDetails";
import FrontPage from "./components/tourpackage/customer/FrontPage";
import Bill from "./components/tourpackage/customer/bill";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/firstpage" element={<FrontPage />} />
          <Route path="/packages" element={<DisplayPackage />} />
          <Route path="/packagedetails" element={<PackageDetails/>} />
          <Route path="/bill" element={<Bill/>} />
          



          <Route path="/addpackage" element={<Home/>} />
          <Route path="/admin/travel" element={<TravelManagement/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
