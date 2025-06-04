function App() {
  const handleOpen = () => {
    window.location.href = 'maadhaar://';

  };

  return (
    <div className="App">
      <button onClick={handleOpen}>Open App MahaDEV 5</button>
    </div>
  );
}

export default App;
