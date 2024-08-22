import { useRef, useState, useEffect } from "react";
import { FaTimes, FaEye } from "react-icons/fa";
import { useAppContext } from "../../context/Context";
import CircularProgressBar from "./CircularProgressbar";
import { Link } from "react-router-dom";

const PostForm = () => {
  const { activeStep, setActiveStep, formData, setFormData, handleChange, handleSubmit, errors, setErrors } = useAppContext();
  const [progress, setProgress] = useState((activeStep / 4) * 100);
  const imgRef = useRef();

  useEffect(() => {
    setProgress((activeStep / 4) * 100);
  }, [activeStep]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...newImages],
      }));
      if (errors.images) setErrors((prev) => ({ ...prev, images: "" }));
    }
  };

  const handleFileInputClick = () => {
    imgRef.current.click();
  };

  const handleRemoveImage = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: prevFormData.images.filter((_, i) => i !== index),
    }));
  };

  const handleToggleImage = (index) => {
    if (index === 0) return;

    setFormData((prevFormData) => {
      const newImages = [...prevFormData.images];
      [newImages[0], newImages[index]] = [newImages[index], newImages[0]];
      return {
        ...prevFormData,
        images: newImages,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.title) validationErrors.title = "Title is required.";
    if (formData.images.length === 0)
      validationErrors.images = "At least one image is required.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="bg-white rounded-lg w-full max-w-screen-md mx-auto p-4 h-[100%]">
      <div className="py-4">
        <div className="flex items-center mb-4">
          <CircularProgressBar value={progress} text={`${activeStep} of 4`} />
          <div className="flex items-start flex-col ml-4">
            <span className="text-gray-600">Upload Image</span>
            <span className="text-gray-400 ml-auto">Next Step: Details</span>
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded mb-4 flex">
          <p className="text-gray-600 text-sm">
            Did you know? Completing your profile increases your sales.
          </p>
          <Link to="/profile" className="font-semibold text-sm hover:underline cursor-pointer">
            Complete your profile
          </Link>
        </div>
        <form onSubmit={submitForm}>
          <div className="py-4">
            <label className="block text-gray-600 mb-1">Ad Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              maxLength="50"
              className={`block w-full mt-1 px-3 py-2 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
            <p className="pt-2">For example: Brand, model, color, and size.</p>
          </div>

          <div className="flex flex-wrap items-start">
            {formData.images.map((image, index) => (
              <div
                key={index}
                className="relative mr-4 mb-4"
                style={{ flex: "0 0 calc(20% - 16px)" }}
              >
                <img
                  src={image}
                  alt={`Selected ${index}`}
                  className="w-[150px] h-[110px] object-cover rounded-lg"
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    index === 0 ? "opacity-100" : "opacity-0"
                  }`}
                  id={`icons-${index}`}
                >
                  <button
                    className="absolute top-2 right-2 text-black bg-gray-100 rounded-full p-1 hover:opacity-100"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <FaTimes />
                  </button>
                  <button
                    className="absolute bottom-1 right-1 bg-gray-500 text-white rounded-full p-1 hover:opacity-100"
                    onClick={() => handleToggleImage(index)}
                  >
                    <FaEye />
                  </button>
                </div>
              </div>
            ))}
            <div
              className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 p-4 rounded w-[20%] cursor-pointer"
              onClick={handleFileInputClick}
            >
              <button className="bg-gray-200 p-2 rounded-full">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <small className="text-gray-400 text-md pt-2">Choose a photo *</small>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
                ref={imgRef}
                multiple
              />
            </div>
          </div>
          {errors.images && (
            <p className="text-red-500 text-sm mt-1">{errors.images}</p>
          )}
          <div className="flex justify-end mt-20">
            <button
              type="submit"
              className="w-[30%] h-[48px] text-black border border-gray-400 hover:bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
