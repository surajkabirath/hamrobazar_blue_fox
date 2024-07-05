import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start py-4 text-xs font-semibold ml-5  ">
      <div className="flex space-x-4 mb-6 ">
        <NavLink
          to={"/hb-select"}
          className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out"
        >
          HB Select
        </NavLink>
        <NavLink
          to={"/terms"}
          className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out"
        >
          Terms of Use
        </NavLink>
        <NavLink
          to={"/safety-tips"}
          className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out"
        >
          Safety Tips
        </NavLink>
      </div>
      <div className="flex space-x-4">
        <NavLink
          to={"/posting-rules"}
          className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out"
        >
          Posting Rules
        </NavLink>
        <NavLink
          to={"/faq"}
          className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out"
        >
          FAQ
        </NavLink>
        <NavLink
          to={"/contact"}
          className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out"
        >
          Contact
        </NavLink>
        <a
          href="mailto:support@hamrobazar.com"
          className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out"
        >
          Report Bugs
        </a>
      </div>
    </footer>
  );
};

export default Footer;
