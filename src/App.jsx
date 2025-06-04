function App() {
  const handleOpen = () => {
    window.location.href = 'maadhaar://';
      window.location.assign("https://otp-frontend-seven.vercel.app/");

  };

  return (
    <div className="App">
      <button onClick={handleOpen}>Open App MahaDEV 5</button>
    </div>
  );
}

export default App;
