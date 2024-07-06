import { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const ForgotPassword = () => {


  const [phone, setPhone] = useState("");


  const [errors, setErrors] = useState({ name: "", phone: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
   
    if (!phone) validationErrors.phone = "Phone Number is required.";
  
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted", { phone });
    }
  };

 

 
  const handlePhoneChange = (phone) => {
    setPhone(phone);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
  };

 

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white w-full max-w-screen-xl mx-auto">
          <div className="flex">
            <div className="w-2/3 p-4 flex justify-center items-center flex-col">
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
              <div className="bg-white rounded-lg w-full">
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
                <h2 className="text-2xl font-semibold mb-6">Forget Password</h2>
                <form className="space-y-6 pr-2" onSubmit={handleSubmit}>
                  
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
                      onChange={handlePhoneChange}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{
                        width: "100%",
                        borderColor: errors.phone ? "red" : "",
                        borderWidth: "1px",
                        borderRadius: "0.375rem",
                      }}
                      buttonStyle={{
                        borderColor: errors.phone ? "red" : "gray",
                      }}
                      placeholder="Phone Number"
                      inputClass={`focus:outline-none focus:ring-blue-300 sm:text-sm`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Reset password with OTP</p>
                
                  <div>
                    <button
                      type="submit"
                      className="w-full  text-black border border-gray-300  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                      Reset Password
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

export default ForgotPassword;
