import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { FaBell, } from "react-icons/fa";

import { FaRegBell } from "react-icons/fa";
const Notifucation = () => {
 
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


  return (
    <div className="relative " ref={dropdownRef}>
      <div className="flex justify-center items-center">
        <FaRegBell className="ml-10 text-2xl" onClick={toggleDropdown} />
      </div>

      {isOpen && (
        <div className="absolute left-12 mt-3  bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-[32.7rem] h-[35rem]  shadow-light-100">
          <div className="text-xl font-semibold  px-10 pt-6">
            Notification
          </div>
          <div className="border-b border-gray-300 w-full mb-4 px-2">
            _____________________________________________________________________________
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaBell className="text-6xl text-gray-300 mb-4" />
            <div className="text-gray-400 text-lg">
              You have no notifications available yet.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Notifucation.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Notifucation;
