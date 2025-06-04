// src/App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import OpenAppPage from "./OpenAppPage";
import InputNumber from "./Compoents/InputNumber";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mypath" element={<OpenAppPage />} />
        <Route path="/input" element={<InputNumber />} />
      </Routes>
    </Router>
  );
}

export default App;
