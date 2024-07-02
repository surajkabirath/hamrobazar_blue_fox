const Category = () => {
  return (
    <div className=" h-screen max-w-screen-xl mx-auto flex justify-around items-center py-2">
      {/* Left Side - Small */}
      <div className="w-1/4 bg-gray-200 overflow-y-scroll">
        {/* Content that scrolls vertically */}
        <div className="p-4">
          {/* Example content */}
          <p className="text-gray-800">Left Side Content</p>
          <p className="text-gray-800">Left Side Content</p>
          <p className="text-gray-800">Left Side Content</p>
          <p className="text-gray-800">Left Side Content</p>
          <p className="text-gray-800">Left Side Content</p>
          <p className="text-gray-800">Left Side Content</p>
        
        </div>
      </div>

      {/* Right Side - Large */}
      <div className="w-3/4 bg-gray-300 overflow-y-scroll">
        {/* Content that scrolls vertically */}
        <div className="p-4">
          {/* Example content */}
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
          <p className="text-gray-800">Right Side Content</p>
         
        </div>
      </div>
    </div>
  );
};

export default Category;
