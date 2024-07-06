import { IoLocationSharp } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";
import ReactStars from "react-rating-stars-component";
import Footer from "../Layout/Footer";
import { useState } from "react";
import Share from "./Share";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleOpen = ()=>{setIsOpen(true)}
    const handleClose = ()=>{setIsOpen(false)}
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="grid grid-cols-3 gap-4 w-full max-w-screen-xl mx-auto bg-white">
        <div className="p-6 border border-r-1">
          <div className="">
            <div className="flex justify-between items-start">
              <img
                src="https://hamrobazaar.com/images/loading_anu9cy.png"
                alt=""
                className="rounded-full w-24 h-24 "
              />
              <LuShare2 className="text-2xl cursor-pointer" onClick={handleOpen}/>
              
            </div>

            <h2 className="text-md  mt-4 pb-3">Suraj Kabirath</h2>

            <span className="text-[0.8rem]">98********24 |</span>

            <p className="text-[0.8rem] pb-3">code.2021coder@gmail.com</p>

            <div className="text-gray-600 mt-2 text-xs pb-3">
              Member Since: 2024-06-21
            </div>

            <div className="text-gray-600  text-[0.8rem] flex items-center justify-start">
              {" "}
              <IoLocationSharp className="text-sm mt-1" /> prakashpur
            </div>
          </div>
          <div className="flex justify-between items-center py-4">
            <div className="py-3">
              <button className="w-40 py-1  text-black border border-gray-500 rounded-lg text-[0.8rem]">
                Complete Profile
              </button>
            </div>
            <div className=" text-center">
              <ReactStars count={5} size={24} activeColor="#ffd700" />
            </div>
            <div>
              <p className=" text-gray-500">0.0 (0)</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Ad Posts</h2>
              <button className="py-1 px-3 bg-blue-500 text-white rounded">
                HB Select
              </button>
            </div>
            <div className="mt-4 flex justify-around">
              <button className="py-1 px-3 bg-gray-200 rounded">All</button>
              <button className="py-1 px-3 bg-gray-200 rounded">Hold</button>
              <button className="py-1 px-3 bg-gray-200 rounded">Sold</button>
              <button className="py-1 px-3 bg-gray-200 rounded">Expired</button>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
              <p className="text-gray-600">There are no ads available</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <Footer />
        </div>
      </div>
      <Share isOpen= {isOpen} handleClose={handleClose}/>
    </div>
  );
};

export default Profile;
