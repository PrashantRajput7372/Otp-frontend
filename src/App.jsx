function App() {
  const handleOpen = () => {
    window.location.href = "maadhaar://";
  };
  function showSmartAppBanner() {
    const meta = document.createElement("meta");
    meta.name = "apple-itunes-app";
    meta.content = "app-id=1435469474";
    document.head.appendChild(meta);

    // iOS Safari loads the banner only if the meta tag is present at page load.
    // This trick might not work unless you reload the page.
    // So you may need to trigger a reload:
    setTimeout(() => {
      window.location.reload();
    }, 100); // Short delay to allow DOM to update
  }
  return (
    <div className="App">
      <button onClick={showSmartAppBanner}>Open App MahaDEV 3</button>
    </div>
  );
}

export default App;
