import { useState } from "react";
import PostForm from "./Postform";
import Postformsec from "./Postformsec";
import { useStep } from "../../main";

const Blank = ({ postOpen, handleClose }) => {
  const {activeStep} = useStep();
  console.log("🚀 ~ Blank ~ activeStep:", activeStep)
 
  return (
    <>
      {postOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-screen-md mx-auto p-4 overflow-y-auto h-[90%]">
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
            
            {/* {activeStep === 1 && <PostForm />} */}
            {activeStep === 1 && <Postformsec />}
        
          </div>
        </div>
      )}
    </>
  );
};

export default Blank;
