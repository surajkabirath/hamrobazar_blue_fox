import  { useState } from "react";
import { FaTimes, FaEye } from "react-icons/fa";
import CircularProgressBar from "./CircularProgressbar";

const PostFormsec = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState(25);
  const [errors, setErrors] = useState({ title: "", images: "" });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!title) validationErrors.title = "Title is required.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted", { title });
      // Example: You can add logic here to submit the form data (title) to an API
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
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

export default PostFormsec;
