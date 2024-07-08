import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TbCameraPlus } from "react-icons/tb";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";
import nepalData from "../../data/Data"; // Assuming nepalData is in the same directory

const ProfileUpdateModal = ({
  isProfileOpen,
  handleCloseProfile,
  profileData,
  updateProfileData,
}) => {
  const [profileImage, setProfileImage] = useState(
    profileData.profileImage || null
  );
  const [isPhoneHidden, setIsPhoneHidden] = useState(false);
  const [formData, setFormData] = useState({ ...profileData, profileImage });
  const [selectedProvince, setSelectedProvince] = useState(
    profileData.province || ""
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    profileData.district || ""
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfBirth: date,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setFormData({
          ...formData,
          profileImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePhoneVisibility = () => {
    setIsPhoneHidden(!isPhoneHidden);
  };

  const maskPhoneNumber = (phone) => {
    if (phone.length === 10) {
      return phone.substring(0, 2) + "****" + phone.substring(6);
    }
    return phone;
  };

  const handleSubmit = () => {
    updateProfileData(formData);
    handleCloseProfile();
  };

  if (!isProfileOpen) return null;

  const districts = selectedProvince
    ? nepalData.provinces.find((province) => province.name === selectedProvince)
        ?.districts || []
    : [];

  const cities = selectedDistrict
    ? districts.find((district) => district.name === selectedDistrict)?.cities || []
    : [];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-y-auto max-h-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto relative max-h-screen overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={handleCloseProfile}
        >
          &times;
        </button>
        <div className="flex justify-start items-center">
          <div className="relative mb-4">
            {profileImage ? (
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover bg-gray-900"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                  <TbCameraPlus className="text-2xl" />
                  <p className="text-xs">Change Photo</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-65 rounded-full"></div>
              </div>
            ) : (
              <div className="relative">
                <FaUserCircle className="w-24 h-24 text-gray-400" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <TbCameraPlus className="text-2xl" />
                  <p className="text-xs">Change Photo</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-65 rounded-full"></div>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute bottom-0 right-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleImageChange}
            />
          </div>
          <p className="text-gray-500 pl-4">Your profile is incomplete.</p>
        </div>
        <form className="mt-4 space-y-4 py-10">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Date Of Birth</label>
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={handleDateChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Province</label>
            <select
              name="province"
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                setSelectedDistrict("");
                handleInputChange(e);
              }}
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="">Select Province</option>
              {nepalData.provinces.map((province) => (
                <option key={province.name} value={province.name}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">District</label>
            <select
              name="district"
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
                handleInputChange(e);
              }}
              className="w-full mt-1 p-2 border rounded"
              disabled={!selectedProvince}
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district.name} value={district.name}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded"
              disabled={!selectedDistrict}
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>


          <div>
            <label className="block text-gray-700">Locality</label>
            <input
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={
                isPhoneHidden ? maskPhoneNumber(formData.phone) : formData.phone
              }
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded"
              disabled={isPhoneHidden}
            />
          </div>

          <div>
            <label className="block text-gray-700">Additional Number</label>
            <input
              type="text"
              name="additionalPhone"
              value={formData.additionalPhone}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="flex items-center justify-between ">
            <label className="block text-gray-700">Hide Phone Number</label>
            <div onClick={togglePhoneVisibility} className="cursor-pointer">
              {isPhoneHidden ? (
                <FaToggleOn size={24} />
              ) : (
                <FaToggleOff size={24} />
              )}
            </div>
          </div>
          <hr />
          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="  text-black py-2 px-4 rounded mt-4"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
