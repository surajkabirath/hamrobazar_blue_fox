import { FiSearch, FiPlus } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-white py-3 fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-gray-800 p-1.5 rounded">
            <span className="text-white text-xl">👌</span>
          </div>
          <span className="text-2xl font-bold">hamrobazar</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-10 focus:outline-none"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Post for Free Button */}
        <div className="flex items-center space-x-9">
          <button className="group flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:border-gray-900 border-2">
            <FiPlus className="bg-white text-black border rounded-md text-xl group-hover:bg-black group-hover:text-white" />
            <span className="text-xs">Post for free</span>
          </button>
          <span className="text-gray-800">|</span>
          <a href="#login" className="text-gray-800 hover:text-blue-600">
            Login
          </a>
          <a
            href="#signup"
            className="border border-gray-800 text-gray-800 px-3 py-1 rounded-md hover:bg-black hover:text-white"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

