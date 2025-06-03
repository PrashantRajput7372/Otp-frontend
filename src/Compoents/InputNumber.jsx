import { useState } from "react";
import OptInput from "./OptInput";
import Logo from "./Logo";

const PhoneInput = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState("");

  const regex = /^[0-9]+$/;
  const url = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOpen = ()=>{
       window.location.href=  'https://otp-frontend-seven.vercel.app/MainApp'
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length === 10 && regex.test(phone)) {
      setSubmitted(true);

      try {
        const result = await fetch(`${url}/send`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone }),
        });
        const res = await result.text();
        setResponse(res);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter a valid 10-digit phone number.");
      setPhone("");
    }
  };
  return (
    <>
      {!submitted ? (
        <div className="flex flex-col justify-center items-center w-screen h-screen m-0 p-0">
          <Logo className="m-0 mb-2" />
          <form
            className="flex flex-col items-center m-0 p-0"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label className="text-xl text-white m-0">
              Please Enter phone number
            </label>

            <input
              className="border-2 rounded-lg border-black max-w-60 h-auto m-2 focus:border-blue-500 focus:outline-none bg-white text-center text-xl p-2"
              type="text"
              value={phone}
              onChange={(e) => handleChange(e)}
              maxLength={10}
            />

            <div className="my-1">
              <button
                type="submit"
                className="bg-blue-500 w-40 h-12 text-2xl rounded-lg hover:bg-blue-700 text-white"
              >
                Send OTP
              </button>
                          
            </div>
          </form>
           <button onClick = {handleOpen}
                type="submit"
                className="bg-blue-500 w-40 h-12 text-2xl rounded-lg hover:bg-blue-700 text-white"
              >
                open
              </button>
        </div>
      ) : (
        <div>
          <OptInput phone={phone} />
        </div>
      )}
    </>
  );
};
export default PhoneInput;
