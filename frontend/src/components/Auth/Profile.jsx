
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';

const Profile = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto"></div>
          <h2 className="text-xl font-semibold mt-4">Suraj Kabirath</h2>
          <div className="flex justify-center items-center mt-2">
            <AiOutlinePhone className="mr-2" />
            <span>98********24</span>
          </div>
          <div className="flex justify-center items-center mt-2">
            <AiOutlineMail className="mr-2" />
            <span>code.2021coder@gmail.com</span>
          </div>
          <div className="text-gray-600 mt-2">Member Since: 2024-06-21</div>
          <div className="text-gray-600 mt-1">prakashpur</div>
        </div>
        <div className="mt-4">
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg">Complete Profile</button>
        </div>
        <div className="mt-4 text-center">
          <ReactStars count={5} size={24} activeColor="#ffd700" />
          <p className="mt-2 text-gray-500">0.0 (0)</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
