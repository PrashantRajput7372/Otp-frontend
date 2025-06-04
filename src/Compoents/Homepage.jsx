// src/HomePage.js
import React from "react";

export default function HomePage() {
  const handleOpen = () => {
    // Trigger universal link (this could be your actual domain + route)
    window.location.href = "https://otp-frontend-seven.vercel.app/mypath";
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Home Page</h1>
      <button onClick={handleOpen}>Open App MahaDEV SAMBHU TRIPURARI</button>
    </div>
  );
}
