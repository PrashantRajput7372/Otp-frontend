

import "./App.css";

function App() {
  const handleOpen = ()=>{
       window.location.href=  'maadhaar://'
    const now = Date.now();
    // Fallback after delay if app didn't open
      setTimeout(() => {
        if (Date.now() - now < 3000) {
        
          window.location.href = "https://apps.apple.com/app/id1435469474";        }
      }, 2000);
  }

  return (
    <>
      <div className="App">
        <button onClick = {handleOpen}>OpenApp</button>
      </div>
    </>
  );
}

export default App;
