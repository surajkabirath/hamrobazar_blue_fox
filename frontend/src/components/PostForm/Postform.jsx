import { useState } from "react";
import { FaTimes, FaEye } from "react-icons/fa";
import CircularProgressBar from "./CircularProgressbar";

const PostForm = ({postOpen,handleClose}) => {

  const [progress, setProgress] = useState(25);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({ title: "", images: "" });

 

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
      // Example: You can add logic here to submit the form data (title, images) to an API
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
  };

  return (
    <>
      {postOpen && (
        <div  className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-screen-md mx-auto p-4 overflow-y-auto max-h-screen">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-semibold">Post Ad</h2>
              <button onClick={handleClose} className="text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
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
                          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
                        >
                          <button
                            className="absolute top-2 right-2 text-black bg-gray-100   rounded-full p-1 transition-opacity duration-300 hover:opacity-100"
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
        </div>
      )}
    </>
  );
};

export default PostForm;
