import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  const handleOpen = () => {
    // This is the Universal Link that will open the iOS app
    window.location.href = "https://otp-frontend-seven.vercel.app/mypath";
  };

  return (
    <div className="App">
      <h1>Home Page</h1>
      <button onClick={handleOpen}>Open App MahaDEV 2</button>
    </div>
  );
}

function MyPath() {
  return <div>Opening App…</div>; // This page prevents 404 for iOS Universal Links
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypath" element={<MyPath />} />
      </Routes>
    </Router>
  );
}

export default App;
