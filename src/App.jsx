import "./App.css";

function App() {
  const handleOpen = () => {
    const appScheme = "maadhaar://"; // Your custom scheme
    const appStoreLink = "https://apps.apple.com/app/id1435469474"; // Your app's App Store link
    const now = Date.now();

    // Set fallback timeout
    const fallback = setTimeout(() => {
      // If we're still on the page after ~1.5s, app likely didn't open
      if (Date.now() - now < 1600) {
        window.location.href = appStoreLink;
      }
    }, 1500);

    // Add visibility listener to cancel fallback if app opened
    const onVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(fallback); // Cancel fallback if app opened
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    // Try to open the app
    window.location.href = appScheme;

    // Cleanup the listener after 3s
    setTimeout(() => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }, 3000);
  };

  return (
    <div className="App">
      <button onClick={handleOpen}>Open App</button>
    </div>
  );
}

export default App;
