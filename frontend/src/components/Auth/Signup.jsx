import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white   w-full max-w-screen-xl mx-auto">
          <div className="flex">
            <div className="w-2/3  p-4 flex justify-center items-center flex-col">
              <div className="w-full h-full flex justify-center items-center">
                <img src="Search1.gif" alt="" />
              </div>
              <div className="mt-4 flex justify-center items-center">
                <div className="flex items-center justify-start">
                  <img
                    src="playstore.png"
                    alt="App Preview"
                    className="mr-4 w-[40rem]"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/3 m-auto py-12 mt-20">
              <div className="bg-white  rounded-lg w-full ">
                <div className="mb-6 text-center flex justify-between bg-gray-100 py-10 px-3 border rounded">
                  <div className="flex items-start justify-start flex-col">
                    <h2 className="text-xl font-semibold">Make a deal</h2>
                    <p className="text-gray-600">Welcome To Hamrobazar</p>
                  </div>

                  <div className="">
                    <svg
                      className="w-16 h-16 mx-auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3ZM12 19.5C7.86719 19.5 4.5 16.1328 4.5 12C4.5 7.86719 7.86719 4.5 12 4.5C16.1328 4.5 19.5 7.86719 19.5 12C19.5 16.1328 16.1328 19.5 12 19.5Z"
                        fill="#BDBDBD"
                      />
                      <path
                        d="M16.5 7.5H14.25L12 10.5L9.75 7.5H7.5V10.5H10.5L12 12.75L13.5 10.5H16.5V7.5Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-6 ">Sign Up</h2>
                <form className="space-y-6 pr-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"np"}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{ width: "100%" }}
                      placeholder="Phone Number"
                         inputClass=" border border-gray-300 rounded-md focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="Password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                     type={showPassword ? "text" : "password"}
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
                    />
                      <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiFillEyeInvisible className="w-5 h-5 mt-6" />
              ) : (
                <AiFillEye className="w-5 h-5 mt-6" />
              )}
            </button>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-300 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      I hereby accept all the{" "}
                      <NavLink
                        to={"/terms"}
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Terms & Conditions
                      </NavLink>{" "}
                      of Hamrobazar.
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={`w-full mt-4 text-black  border border-gray-300  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center  ${
                        !termsAccepted && "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={!termsAccepted}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
