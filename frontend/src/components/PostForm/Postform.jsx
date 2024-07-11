import { useRef, useState, useEffect } from "react";
import { FaTimes, FaEye } from "react-icons/fa";
import CircularProgressBar from "./CircularProgressbar";
import { useStep } from "../../main";

const PostForm = () => {
  const { activeStep, setActiveStep, formData, setFormData } = useStep();
  const [progress, setProgress] = useState((activeStep / 4) * 100);
  const [title, setTitle] = useState(formData.title);
  const [images, setImages] = useState(formData.images);
  const [errors, setErrors] = useState({ title: "", images: "" });
  const imgRef = useRef();

  useEffect(() => {
    setTitle(formData.title);
    setImages(formData.images);
  }, [formData]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
      if (errors.images) setErrors((prev) => ({ ...prev, images: "" }));
    }
  };

  const handleFileInputClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleToggleImage = (index) => {
    if (index === 0) return; // No need to swap if clicking on the first image itself

    const newImages = [...images];
    const clickedImage = newImages[index];
    newImages[index] = newImages[0];
    newImages[0] = clickedImage;

    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!title) validationErrors.title = "Title is required.";
    if (images.length === 0) validationErrors.images = "At least one image is required.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted", { title, images });
      setFormData({ title, images });
      setActiveStep(activeStep + 1);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
  };

  return (
    <>
      <div className="bg-white rounded-lg w-full max-w-screen-md mx-auto p-4 h-[100%]">
        <div className="py-4">
          <div className="flex items-center mb-4">
            <CircularProgressBar value={progress} text="1 of 4" />
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
          <div>
            <div className="py-4">
              <label className="block text-gray-600 mb-1">Ad Title</label>
              <input
                value={title}
                onChange={handleTitleChange}
                placeholder=""
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
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative mr-4 mb-4"
                  style={{ flex: "0 0 calc(20% - 16px)" }}
                  onMouseEnter={() =>
                    document.getElementById(`icons-${index}`).style.opacity = "1"
                  }
                  onMouseLeave={() =>
                    document.getElementById(`icons-${index}`).style.opacity = index === 0 ? "1" : "0"
                  }
                >
                  <div className="relative">
                    <img
                      src={image}
                      alt={`Selected ${index}`}
                      className="w-[150px] h-[110px] object-cover rounded-lg"
                      style={{ backgroundColor: "#333" }}
                    />
                    <div
                      id={`icons-${index}`}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        index === 0 ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <button
                        className="absolute top-2 right-2 text-black bg-gray-100 rounded-full p-1 transition-opacity duration-300 hover:opacity-100"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <FaTimes />
                      </button>
                      <button
                        className="absolute bottom-1 right-1 bg-gray-500 text-white rounded-full p-1 transition-opacity duration-300 hover:opacity-100"
                        onClick={() => handleToggleImage(index)}
                      >
                        <FaEye />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className={`flex flex-col items-center justify-center border-dashed border-2 border-gray-300 p-4 rounded w-[20%] cursor-pointer ${
                  images.length % 5 === 0 ? "mt-3" : ""
                }`}
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
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
                onClick={handleSubmit}
                className="w-[30%] h-[48px] text-black border border-gray-400 hover:bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostForm;
