// src/OpenAppPage.js
import { useEffect } from "react";

export default function OpenAppPage() {
  useEffect(() => {
    console.log("User visited /mypath - Universal Link activated");
    // Optionally, open your app logic can go here
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 className = "text-white font-bold text-2xl">Opening App…</h1>
    </div>
  );
}
