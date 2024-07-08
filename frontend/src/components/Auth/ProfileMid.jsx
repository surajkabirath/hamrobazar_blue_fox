import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEllipsisV, FaEye, FaCommentDots, FaCheck, FaExclamationTriangle, FaBox } from 'react-icons/fa';

const ProfileMid = () => {
  const [activeTab, setActiveTab] = useState('Ad Posts');
  const [subTab, setSubTab] = useState('All');

  const tabs = ['Ad Posts', 'Analytics', 'Save Lists', 'Reviews'];
  const subTabs = ['All', 'Hold', 'Sold', 'Expired'];

  const renderContent = () => {
    if (activeTab === 'Ad Posts') {
      return (
        <>
          {/* Sub Tabs */}
          <div className="flex space-x-2 mb-4">
            {subTabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 ${subTab === tab ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => setSubTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Content */}
          <div className="flex justify-center items-center h-64 border rounded">
            <div className="text-center">
              <img src="no-ads.png" alt="No Ads Available" className="mx-auto mb-4" />
              <p className="text-gray-500">There are no ads available</p>
            </div>
          </div>
        </>
      );
    } else if (activeTab === 'Analytics') {
      return (
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded text-center">
            <FaEye className="mx-auto text-gray-400 mb-2" />
            <div className="text-2xl">27</div>
            <div className="text-gray-500">Views</div>
          </div>
          <div className="border p-4 rounded text-center">
            <FaCommentDots className="mx-auto text-gray-400 mb-2" />
            <div className="text-2xl">0</div>
            <div className="text-gray-500">Comments</div>
          </div>
          <div className="border p-4 rounded text-center">
            <FaCheck className="mx-auto text-gray-400 mb-2" />
            <div className="text-2xl">0</div>
            <div className="text-gray-500">Sold</div>
          </div>
          <div className="border p-4 rounded text-center">
            <FaExclamationTriangle className="mx-auto text-gray-400 mb-2" />
            <div className="text-2xl">0</div>
            <div className="text-gray-500">Reported</div>
          </div>
          <div className="border p-4 rounded text-center col-span-2">
            <FaBox className="mx-auto text-gray-400 mb-2" />
            <div className="text-2xl">0</div>
            <div className="text-gray-500">Total Ads</div>
          </div>
        </div>
      );
    } else if (activeTab === 'Save Lists') {
      return (
        <div className="flex justify-center items-center h-64 border rounded">
          <div className="text-center">
            <img src="no-ads.png" alt="No Ads Available" className="mx-auto mb-4" />
            <p className="text-gray-500">There are no saved lists</p>
          </div>
        </div>
      );
    } else if (activeTab === 'Reviews') {
      return (
        <div className="flex justify-center items-center h-64 border rounded">
          <div className="text-center">
            <img src="no-ads.png" alt="No Ads Available" className="mx-auto mb-4" />
            <p className="text-gray-500">There are no reviews</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-4">
      {/* Main Tabs */}
      <div className="flex items-center justify-between border-b mb-4">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="p-2">
          <FaEllipsisV />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex border rounded p-2 w-full">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Product"
            className="ml-2 outline-none w-full"
          />
        </div>
        <button className="p-2 border rounded">
          <FaFilter />
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default ProfileMid;
