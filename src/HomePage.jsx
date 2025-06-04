// src/HomePage.js
import "react";

export default function HomePage() {
  const handleOpen = () => {
    // Trigger universal link (this could be your actual domain + route)
    window.location.href = "https://otp-frontend-seven.vercel.app/mypath";
  };

  return (
    <div
      style={{ padding: "40px", textAlign: "center" }}
      className="bg-white h-min-screen"
    >
      <h1>Home Page</h1>
      <button
        onClick={handleOpen}
        className="bg-blue-500 w-max-full h-14 p-4 text-2xl rounded-lg hover:bg-blue-700 text-white"
      >
        Open App MahaDEV SAMBHU TRIPURARI
      </button>
    </div>
  );
}
