import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/tourpackage/admin/Home";
import DisplayPackage from "./components/tourpackage/customer/Displaypackage";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DisplayPackage />} />



          <Route path="/addpackage" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
