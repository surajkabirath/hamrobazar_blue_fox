const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start py-4 text-xs font-semibold ml-5  ">
      <div className="flex space-x-4 mb-6 ">
        <a
          href="#hb-select"
          className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out"
        >
          HB Select
        </a>
        <a href="#terms" className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out">
          Terms of Use
        </a>
        <a href="#safety-tips" className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out">
          Safety Tips
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="#posting-rules" className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out">
          Posting Rules
        </a>
        <a href="#faq" className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out">
          FAQ
        </a>
        <a href="#contact" className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out">
          Contact
        </a>
        <a href="#report-bugs" className="text-gray-700 inline-block border-b border-transparent hover:border-blue-400 hover:text-blue-700 pb-1 transition duration-300 ease-in-out">
          Report Bugs
        </a>
      </div>
    </footer>
  );
};

export default Footer;
