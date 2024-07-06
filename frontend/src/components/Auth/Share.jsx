import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaReddit,
  FaViber,
  FaWhatsapp,
  FaCopy,
} from "react-icons/fa";

const Share = ({ isOpen, handleClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[30rem] max-w-screen-md mx-auto p-4 overflow-y-auto max-h-screen">
            <div className="flex justify-between items-center  border-b border-gray-400 pb-2">
              <h2 className="text-lg font-semibold">Share Profile via</h2>
              <button
                onClick={handleClose}
                className="text-gray-600 cursor-pointer"
              >
                <AiOutlineClose className="w-6 h-6" />
              </button>
            </div>
            <div className="py-4 cursor-pointer">
              <div className="flex justify-between max-w-md mx-auto mt-4">
                <a
                  href="https://facebook.com"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://reddit.com"
                  className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full"
                >
                  <FaReddit size={24} />
                </a>
                <a
                  href="https://viber.com"
                  className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full"
                >
                  <FaViber size={24} />
                </a>
                <a
                  href="https://whatsapp.com"
                  className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-full"
                >
                  <FaCopy size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Share;
