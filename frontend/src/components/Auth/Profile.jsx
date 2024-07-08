import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";
import ReactStars from "react-rating-stars-component";
import Footer from "../Layout/Footer";
import Share from "./Share";
import ProfileMid from "./ProfileMid";
import ProfileUpdateModal from "./ProfileUpdate";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "Suraj Kabirath",
    email: "code.2021coder@gmail.com",
    dateOfBirth: new Date("2000-01-01"),
    province: "Province No. 1",
    district: "Some District",
    city: "Some City",
    locality: "Prakashpur",
    phone: "9812345678",
    addNumber: "9876543210",
    profileImage: null,
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenProfile = () => {
    setIsProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  };

  const updateProfileData = (newData) => {
    setProfileData(newData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 bg-white">
          <div className="p-6 border border-r-1 flex flex-col items-start">
            <div className="flex justify-between items-start w-full">
              <img
                src={
                  profileData.profileImage ||
                  "https://hamrobazaar.com/images/loading_anu9cy.png"
                }
                alt=""
                className="rounded-full w-24 h-24"
              />
              <LuShare2 className="text-2xl cursor-pointer" onClick={handleOpen} />
            </div>

            <h2 className="text-md mt-4 pb-3">{profileData.fullName}</h2>

            <span className="text-[0.8rem]">
              {isProfileOpen ? (
                profileData.phone
              ) : (
                <>
                  {profileData.phone.substring(0, 2)}
                  {"*".repeat(profileData.phone.length - 4)}
                  {profileData.phone.substring(profileData.phone.length - 2)}
                </>
              )}{" "}
              |
            </span>

            <p className="text-[0.8rem] pb-3">{profileData.email}</p>

            <div className="text-gray-600 mt-2 text-xs pb-3">
              Member Since: 2024-06-21
            </div>

            <div className="text-gray-600 text-[0.8rem] flex items-center">
              <IoLocationSharp className="text-sm mt-1" /> {profileData.locality}
            </div>

            <div className="flex justify-between items-center py-4 w-full">
              <div className="py-3">
                <button
                  className="w-40 py-1 text-black border border-gray-500 rounded-lg text-[0.8rem]"
                  onClick={handleOpenProfile}
                >
                  Complete Profile
                </button>
              </div>
              <div className="text-center">
                <ReactStars count={5} size={24} activeColor="#ffd700" />
              </div>
              <div>
                <p className="text-gray-500">0.0 (0)</p>
              </div>
            </div>
          </div>

          <div className="pr-10 flex-1">
            <ProfileMid />
          </div>
          <div className="p-6 flex-1">
            <Footer />
          </div>
        </div>
        <Share isOpen={isOpen} handleClose={handleClose} />
        <ProfileUpdateModal
          isProfileOpen={isProfileOpen}
          handleCloseProfile={handleCloseProfile}
          profileData={profileData}
          updateProfileData={updateProfileData}
        />
      </div>
    </div>
  );
};

export default Profile;
