import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import CircularProgressBar from "./CircularProgressbar";
import { categoriesItem, conditionItems } from "../../data/Data";
import { useAppContext } from "../../context/Context";
import { Link } from "react-router-dom";

const Postformsec = () => {
  const {
    activeStep,
    prevStep,
    nextStep,
    formData,
    handleChange,
    errors,
    setErrors,
  } = useAppContext();
  const [progress, setProgress] = useState((activeStep / 2) * 100);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.category) validationErrors.category = "Category is required.";
    if (!formData.condition)
      validationErrors.condition = "Condition is required.";
    if (!formData.location) validationErrors.location = "Location is required.";
    if (!formData.description)
      validationErrors.description = "Description is required.";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted");
    }
  };

  // const handlePrevious = () => {
  //   setActiveStep((current) => current - 1);
  // };

  // const handleNext = () => {
  //   handleSubmit(new Event("submit"));
  //   if (Object.keys(errors).length === 0) {
  //     setActiveStep((current) => current + 1);
  //   }
  // };

  return (
    <div>
      <div className="bg-white rounded-lg w-full max-w-screen-md mx-auto p-4">
        <div className="p-4">
          <div className="flex items-center mb-4">
            <CircularProgressBar value={progress} text="2 of 4" />
            <div className="flex items-start flex-col ml-4">
              <span className="text-gray-600">Details</span>
              <span className="text-gray-400 ml-auto">Next Step: Price</span>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded mb-4 flex">
            <p className="text-gray-600 text-sm">
              Did you know? Completing your profile increases your sales.
            </p>
            <Link
              to={"/profile"}
              className="font-semibold text-sm hover:underline cursor-pointer"
            >
              Complete your profile
            </Link>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category*
              </label>
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="category-select mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 max-h-40 overflow-auto cursor-pointer"
                >
                  {categoriesItem.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                )}
              </div>
            </div>

            {/* Condition */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Condition*
              </label>
              <div className="relative">
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 max-h-40 overflow-auto cursor-pointer"
                >
                  {conditionItems.map((condition, index) => (
                    <option key={index}>{condition}</option>
                  ))}
                </select>
                {errors.condition && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.condition}
                  </p>
                )}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location*
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`mt-1 block w-full border rounded-md shadow-sm p-2 ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Entire Nepal"
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">{errors.location}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description*
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`mt-1 block w-full border rounded-md shadow-sm p-2 ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
                rows="3"
                maxLength="500"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Delivery */}
            <div className="flex justify-between items-center">
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

            {/* Adult Content */}
            <div className="flex justify-between items-center">
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

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-20">
        {/* Back Button */}
        <div className="flex items-center">
          <MdArrowBack className="text-2xl" />
          <button
            type="button"
            onClick={prevStep}
            className="ml-2 h-[48px] text-md text-center"
          >
            Back
          </button>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextStep}
          className="w-[30%] h-[48px] text-black border border-gray-400 hover:bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Postformsec;
