

import "./App.css";

function App() {
  const handleOpen = ()=>{
       window.location.href=  'maadhaar://'
    // Fallback after delay if app didn't open
      setTimeout(() => {
        if (Date.now() - now < 5000) {
        
          window.location.href = "https://apps.apple.com/app/id1435469474";        }
      }, 4500);
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
