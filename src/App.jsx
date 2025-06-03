function App() {
  const handleOpen = () => {
    const appScheme = "maadhaar://";
    const appStoreURL = "https://apps.apple.com/app/id1435469474";

    const timeout = setTimeout(() => {
      window.location.href = appStoreURL;
    }, 2000);

    // Listen for page becoming hidden (app opened)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timeout); // App opened, cancel fallback
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Attempt to open app
    window.location.href = appScheme;

    // Cleanup after 3 seconds
    setTimeout(() => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, 3000);
  };

  return (
    <div className="App">
      <button onClick={handleOpen}>Open App</button>
    </div>
  );
}

export default App;
