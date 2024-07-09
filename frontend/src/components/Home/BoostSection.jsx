import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BoostSection = () => {
  const [hour, setHour] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [link, setLink] = useState("");
  const [errors, setErrors] = useState({
    hour: "",
    firstName: "",
    lastName: "",
    phone: "",
    link: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!hour) validationErrors.hour = "Number of Hour  required.";
    if (!firstName) validationErrors.firstName = "First Name is required.";
    if (!lastName) validationErrors.lastName = "Last Name is required.";
    if (!phone) validationErrors.phone = "Phone Number is required.";
    if (!link) validationErrors.link = "Link is required.";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted", { firstName, lastName, phone });
    }
  };

  const handleInputChange = (name, value) => {
    if (name === "hour") {
      setHour(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "link") {
      setLink(value);
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const hours = [];
  for (let i = 12; i <= 156; i += 12) {
    hours.push(i);
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20 items-center">
      <div className="text-center">
        <div className="flex items-center justify-center pt-20">
          <img src="rocket.png" height={150} width={75} alt="Boost Logo" />
          <p className="text-[#0071b5] text-4xl font-bold">BOOST</p>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-[#0071b5] py-8">
          We want to help you sell faster
        </h1>
        <p className="text-gray-700 mb-10">
          Boost helps your product reach more potential buyers with top of the
          category placement for limited time, this assures high engagement and
          visibility on product. Our smart algorithm assures that when people
          are searching for related products they see your listings at first
          followed by regular listings.
        </p>
        <p className="mb-20 text-gray-700">
          After you boost, you can monitor increased reach in your Analytics
          within your own profile.
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#0071b5] mb-16">
          How to boost?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-start text-gray-600">
  <BoostStep step="1" text="Add your product to Hamrobazar.com." />
  <BoostStep
    step="2"
    text="Once your product is live on hamrobazar. Visit:Hamrobazar.com/boost"
  />
  <BoostStep
    step="3"
    text="Select Number of days you want to Boost your product."
  />
  <BoostStep
    step="4"
    text="Once you know your billing fill up the form"
  />
  <BoostStep step="5" text="Submit details and pay online." />
  <BoostStep
    step="6"
    text="We might contact you to confirm Boost and make it live."
  />
</div>

      </div>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-10 sm:w-full">
        {/* Pricing Section */}
        <div className="shadow-md rounded-lg p-6 w-full flex flex-col">
          <div className="bg-[#0071b5] text-white text-center text-xl font-bold p-3 rounded-t-lg">
            Pricing
          </div>
          <div className="bg-gray-300 pt-4 flex-grow">
            <table className="w-full text-left pt-7">
              <thead>
                <tr>
                  <th className="border-b p-2">Number of Hours</th>
                  <th className="border-b p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-2">12 Hour</td>
                  <td className="border-b p-2">Rs. 1000/-</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-7 flex justify-center">
              <img src="hb-qr.png" alt="QR Code" className="w-48 h-48" />
            </div>
            <div className="text-center mt-2 pb-10">E-Sewa/Fone Pay</div>
          </div>
        </div>

        {/* Boost Listing Form */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col w-full sm:px-2 md:px-6">
  <div className="bg-[#0071b5] text-white text-center font-bold text-xl p-3 rounded-t-lg">
    Boost your listing
  </div>
  <div className="bg-gray-300 pt-5 flex-grow w-full">
    <form className="space-y-4 px-3" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="flex flex-col w-full sm:w-auto">
          <label className="block text-md text-gray-900 font-bold">
            Select Number of Hours
          </label>
          {errors.hour && (
            <p className="text-red-500 text-xs mb-1">{errors.hour}</p>
          )}
        </div>
        <select
          className="mt-1 block py-3 px-2 max-h-32 overflow-y-auto border w-full sm:w-[30%] border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
          value={hour}
          onChange={(e) => handleInputChange("hour", e.target.value)}
        >
          <option value="">Select...</option>
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          type="text"
          className={`mt-2 block w-full py-3 px-3 border border-gray-300 bg-white ${
            errors.firstName ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none sm:text-sm`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs mb-1">{errors.firstName}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          value={lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
          placeholder="Last Name"
          className={`mt-2 block w-full py-3 px-3 border border-gray-300 bg-white ${
            errors.lastName ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none sm:text-sm`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs mb-1">{errors.lastName}</p>
        )}
      </div>
      <div>
        <PhoneInput
          country={"np"}
          value={phone}
          onChange={(phone) => handleInputChange("phone", phone)}
          containerStyle={{ width: "100%" }}
          inputStyle={{
            width: "100%",
            borderColor: errors.phone ? "red" : "",
            borderRadius: "0.375rem",
            height: "42px",
          }}
          buttonStyle={{
            borderColor: errors.phone ? "red" : "",
          }}
          placeholder="Phone Number"
          inputClass={`py-3 sm:text-sm`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mb-1">{errors.phone}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          value={link}
          onChange={(e) => handleInputChange("link", e.target.value)}
          placeholder="Link to your ad"
          className={`mt-2 block w-full py-3 px-3 border border-gray-300 bg-white ${
            errors.link ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none sm:text-sm`}
        />
        {errors.link && (
          <p className="text-red-500 text-xs mb-1">{errors.link}</p>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full text-center font-bold px-4 py-3 mb-6 border border-transparent text-sm rounded-md shadow-sm text-white bg-[#0071b5] hover:[#055689]"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

      
      </div>
      <div className="max-w-screen-lg">
      <h1 className="font-bold pt-10 pb-3">Note:</h1>
        <p>Boost requests are accepted between 9AM-5PM and every request is manually monitored to assure safe community guidelines.

The payments made are non-refundable. Please keep the payment receipt.</p>
      </div>
    
    </div>
  );
};

const BoostStep = ({ step, text }) => (
  <div className="flex items-center space-x-3 md:block md:space-x-0">
    <div className="flex-shrink-0 bg-[#0071b5] text-white font-bold w-12 h-12 flex items-center justify-center rounded-full md:mx-auto">{step}</div>
    <div className="md:mt-2">
      <p className="text-left md:text-center">{text}</p>
    </div>
  </div>
);


export default BoostSection;
