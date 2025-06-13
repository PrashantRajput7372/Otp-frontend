function App() {
  const handleOpen = () => {
    window.location.href = "https://otp-frontend-seven.vercel.app/mypath";
  };
  
  return (
    <div className="App">
      <button onClick={()=>handleOpen()}>Open App MahaDEV 1</button>
    </div>
  );
}

export default App;
