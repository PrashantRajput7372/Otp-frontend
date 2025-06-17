import HomePage from './HomePage'

function App() {
  const handleOpenApp = ()=>{
  const universalLink = “https://try-ecru-two.vercel.app/extra-path-1/ulink"
  window.location.href = universalLink
}  
  return (
    <div className="App">
     <a href="https://try-ecru-two.vercel.app/extra-path-1/ulink" style={{
                width: "40%",
                padding: "8px 16px",
                backgroundColor: "#1976d2",
                color: "#fff",
                borderRadius: "4px",
                textAlign: "center",
                fontWeight: "bold",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>Open mAaadhar with anchor</a>
      <Button
            variant="contained"
            color="primary"
            style={{ width: "40%" }}
            onClick={handleOpenApp}
          >
            Open by Button CLick
          </Button>
     
    </div>
  );
}

export default App;
