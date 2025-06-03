import InputNumber from "./Compoents/InputNumber";

import "./App.css";

function App() {
  const handleOpen = ()=>{
       window.location.href=  'https://otp-frontend-seven.vercel.app/MainApp'
  }

  return (
    <>
      <div className="App">
{/*         <InputNumber /> */}
        <button onClick = {handleOpen}>OpenApp</button>
      </div>
    </>
  );
}

export default App;
