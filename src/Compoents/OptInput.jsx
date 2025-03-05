/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Login from "./Login";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
// import { data } from "autoprefixer";

function OptInput({ phone }) {
  const ref = useRef([]); // Create a ref array to store input elements
  const [otpinp, setOtp] = useState(new Array(4).fill(""));
  const [logedin, setLogIn] = useState(false);

  // Focus logic when the page is loaded
  useEffect(() => {
    if (ref.current[0]) {
      ref.current[0].focus(); // Focus on the first input
    }
  }, []);

  // taking input in otp
  const handleChange = (e, index) => {
    let newarray = [...otpinp];
    newarray[index] = e.target.value;
    setOtp(newarray);
    if (e.target.value && index < otpinp.length - 1) {
      ref.current[index + 1].focus(); // Focus the next input
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpinp[index] && index > 0) {
      console.log(e.key);
      console.log("index", index);

      ref.current[index - 1].focus();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = Number(otpinp.join(""));
    console.log(otp);

    try {
      const response = await fetch("/validate-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, otp }),
      });
      console.log("Response status:", response.status);
      // const data = await response.json();
      if (response.ok) {
        setLogIn(true);
      } else {
        alert("Kindly enter correct OTP");
        setOtp(new Array(4).fill("")); // Reset the OTP fields
        ref.current[0].focus(); // Focus on the first input field again
      }
    } catch (error) {
      console.log(error.message);
    }

    // if (otpNo === otpp) {
    //   setLogIn(true);
    // } else {
    //   alert("Kindly enter correct OTP");
    //   setOtp(new Array(4).fill("")); // Reset the OTP fields
    //   ref.current[0].focus(); // Focus on the first input field again
    // }
  };

  return (
    <>
      {!logedin ? (
        <div className="flex flex-col justify-center items-center w-screen h-screen m-0 p-0">
          <Logo />

          <form
            onSubmit={(e) => handleSubmit(e)}
            className=" flex flex-col items-center"
          >
            <p className="text-xl text-white">
              Enter the OTP sent on <b>+91 {phone}</b>
            </p>
            <div>
              {otpinp.map((o, index) => {
                return (
                  <input
                    ref={(e) => (ref.current[index] = e)}
                    onChange={(e) => handleChange(e, index)}
                    type="text"
                    key={index}
                    className="border-2 border-black w-12 h-12 m-2 focus:border-blue-500 focus:outline-none bg-white text-center text-xl rounded-lg"
                    maxLength={1}
                    value={o}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                );
              })}
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 w-40 h-12 text-2xl rounded-lg hover:bg-blue-700 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default OptInput;
