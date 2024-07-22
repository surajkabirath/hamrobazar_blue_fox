import { useState } from "react";
import { useStep } from "../../main";
import { MdArrowBack } from "react-icons/md";
import CircularProgressBar from "./CircularProgressbar";
import { categoriesItem, conditionItems } from "../../data/Data";

const Postformsec = () => {
  const { activeStep, setActiveStep } = useStep();
  const [progress, setProgress] = useState((activeStep / 2) * 100);
  const [formData, setFormData] = useState({
    category: "",
    condition: "",
    location: "",
    description: "",
    delivery: false,
    isAdultContent: false,
  });
  const [errors, setErrors] = useState({
    category: "",
    condition: "",
    location: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.category)
      validationErrors.formData.category = "Category is required.";
    if (!formData.condition)
      validationErrors.formData.condition = "Condition is required.";
    if (!formData.location)
      validationErrors.formData.location = "Location is required.";
    if (!formData.description)
      validationErrors.formData.description = "Description is required.";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePrevious = () => {
    setActiveStep((current) => current - 1);
  };

  return (
    <div>
      <div className="bg-white rounded-lg w-full max-w-screen-md mx-auto p-4">
        <div className="p-4">
          <div className="flex items-center mb-4">
            <CircularProgressBar value={progress} text="2 of 4" />
            <div className="flex items-start flex-col ml-4">
              <span className="text-gray-600">Upload Image</span>
              <span className="text-gray-400 ml-auto">Next Step: Details</span>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded mb-4 flex">
            <p className="text-gray-600 text-sm">
              Did you know? Completing your profile increases your sales.
            </p>
            <span className="font-semibold text-sm hover:underline cursor-pointer">
              Complete your profile
            </span>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category*
              </label>
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className=" category-select mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 max-h-40 overflow-auto"
                  placeholder="Category*"
                >
                  {categoriesItem.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Condition*
              </label>
              <div className="relative">
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 max-h-40 overflow-auto"
                >
                  {conditionItems.map((condition, index) => (
                    <option key={index}>{condition}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Entire Nepal"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location Radius
              </label>
              <input
                name="locationRadius"
                type="checkbox"
                checked={formData.locationRadius}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="ml-2">Hide my precise location</span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows="4"
                maxLength="500"
              ></textarea>
              <small className="text-gray-500">/500</small>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Delivery
              </label>
              <input
                name="delivery"
                type="checkbox"
                checked={formData.delivery}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Is Adult Content?
              </label>
              <input
                name="isAdultContent"
                type="checkbox"
                checked={formData.isAdultContent}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20">
        <div className="flex items-center justify-around px-2 py-2">
          <MdArrowBack text="24" className="px-2 text-4xl" />
          <button
            type="submit"
            onClick={handlePrevious}
            className="h-[48px] text-md text-center"
          >
            Back
          </button>
        </div>
        <button
          onClick={handlePrevious}
          className="w-[30%] h-[48px] text-black border border-gray-400 hover:bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Postformsec;
