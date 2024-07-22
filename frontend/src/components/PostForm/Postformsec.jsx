import { useState } from "react";
import { useStep } from "../../main";
import { MdArrowBack } from "react-icons/md";
import CircularProgressBar from "./CircularProgressbar";
import { categoriesItem, conditionItems } from "../../data/Data";

const Postformsec = () => {
  const { activeStep, setActiveStep } = useStep();
  const [progress, setProgress] = useState((activeStep / 2) * 100);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [isAdultContent, setIsAdultContent] = useState(false);
  const [errors, setErrors] = useState({
    category: "",
    condition: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!category)
      validationErrors.category = "Category is required.";
    if (!condition)
      validationErrors.condition = "Condition is required.";
    if (!location)
      validationErrors.location = "Location is required.";
    if (!description)
      validationErrors.description = "Description is required.";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted");
    }
  };
  const handleChange = (e) => {
    const { name, value,  checked } = e.target;
    switch (name) {
     
      case 'category':
        setCategory(value);
        if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
        break;
      case 'condition':
        setCondition(value);
        if (errors.condition) setErrors((prev) => ({ ...prev, condition: "" }));
        break;
      case 'location':
        setLocation(value);
        if (errors.location) setErrors((prev) => ({ ...prev, location: "" }));
        break;
      case 'description':
        setDescription(value);
        if (errors.description) setErrors((prev) => ({ ...prev, description: "" }));
        break;
      case 'delivery':
        setDelivery(checked);
        if (errors.delivery) setErrors((prev) => ({ ...prev, delivery: "" }));
        break;
      case 'isAdultContent':
        setIsAdultContent(checked);
        if (errors.isAdultContent) setErrors((prev) => ({ ...prev, isAdultContent: "" }));
        break;
      default:
        break;
    }
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

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category*
              </label>
              <div className="relative">
                <select
                  name="category"
                  value={category}
                  onChange={handleChange}
                  className=" category-select mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 max-h-40 overflow-auto cursor-pointer"
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
                  value={condition}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 max-h-40 overflow-auto cursor-pointer"
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
                value={location}
                onChange={handleChange}
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  ${
                  errors.location
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Entire Nepal"
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.location}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location Radius
              </label>
              <div className="flex justify-between items-center">
              <small className=" text-gray-400">Hide my precise location</small>
              <input
                name="locationRadius"
                type="checkbox"
                checked={''}
                onChange={handleChange}
                className="mt-1"
              />
              </div>
          
              
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows="4"
                maxLength="500"
              ></textarea>
              <div className="flex justify-between items-center">
              <p>Add all the product or service specifications.</p>
              <small className="text-gray-500">0/500</small>
              </div>
   
            </div>
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Delivery
              </label>
              <input
                name="delivery"
                type="checkbox"
                checked={delivery}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Is Adult Content?
              </label>
              <input
                name="isAdultContent"
                type="checkbox"
                checked={isAdultContent}
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
