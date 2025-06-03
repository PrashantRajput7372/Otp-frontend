function App() {
  const handleOpen = () => {
    window.location.href = 'https://otp-frontend-seven.vercel.app/open-in-app';

  };

  return (
    <div className="App">
      <button onClick={handleOpen}>Open App MahaDEV</button>
    </div>
  );
}

export default App;
