import HomePage from './HomePage'

function App() {
  const handleOpen = () => {
    location.href = "https://try-ecru-two.vercel.app/extra-path-1/ulink";
  };
  
  return (
    <div className="App">
     <a href="https://try-ecru-two.vercel.app/extra-path-1/ulink">Open mAaadhar</a>
      <div onclick= "location.href='https://try-ecru-two.vercel.app/extra-path-1/ulink';">open App</div>
     
    </div>
  );
}

export default App;
