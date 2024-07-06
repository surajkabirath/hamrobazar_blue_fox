import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ProfileCart = ({ handleLogout }) => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "job-seeker", // Change to "employer" for employer role
  };
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const userInitial = user.name ? user.name[0].toUpperCase() : "?";

  return (
    <div className="relative " ref={dropdownRef}>
      <div className="flex justify-center items-center">
        <div
          className="w-10 h-10 rounded-full cursor-pointer bg-black text-white flex items-center justify-center"
          type="button"
          onClick={toggleDropdown}
        >
          {userInitial}
        </div>
        <div className="px-2">{user.name}</div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 z-10 bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-[14.5625rem]">
          <div className="flex items-center mb-4 mx-2 hover:bg-gray-300 rounded-md px-1">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
            <div className="ml-3">
              <div className="font-semibold text-gray-800">Suraj Kabirath</div>
              <a href="#profile" className="text-blue-500 text-sm ">
                Visit Profile
              </a>
            </div>
            <div className="ml-auto">
              <button className="text-gray-500">
                <FaArrowRightLong />
              </button>
             
            </div>
          
          </div>
       
         
          <div className="space-y-2 mx-2 py-2">
            <NavLink to={"/contact"}>
            <button className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-200 rounded-md">
              <FaPhoneAlt className="mr-3 text-gray-500" />
              <span>Contact Support</span>
            </button>
            </NavLink>
            <button className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-200 rounded-md">
              <FiSettings className="mr-3 text-gray-500" />
              <span>Setting</span>
            </button>
            <button
              className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-200 rounded-md"
              onClick={handleLogout}
            >
              <FiLogOut className="mr-3  text-gray-500" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ProfileCart.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default ProfileCart;
