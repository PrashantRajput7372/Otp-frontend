function App() {
  const handleOpen = () => {
    window.location.href = 'maadhaar://';

  };

  return (
    <div className="App">
      <button onClick={showSmartAppBanner}>Open App MahaDEV 3</button>
    </div>
  );
}

export default App;
