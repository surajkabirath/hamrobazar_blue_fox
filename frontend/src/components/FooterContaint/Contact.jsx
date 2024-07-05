import Footer from "../Layout/Footer";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex mt-24">
      <div className="w-3/4 pt-10">
        <h2 className="text-2xl  text-gray-800 mb-6">
          Contact Support
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            You can contact us through:
          </h3>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <strong>Toll Free Number:</strong> 16600199000 (10am to 5pm,
              working days)
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> 977-1-5135033, 5135034, 5135009 (10am to
              5pm, working days)
            </li>
            <li className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@hamrobazar.com" className="text-blue-500">
                support@hamrobazar.com
              </a>
            </li>
          </ul>
        </div>
        <p className="text-sm text-gray-600">
          Our support team is available during office hours to assist you with
          any inquiries or issues you may have.
        </p>
      </div>
      <div className="w-1/4 py-5  px-4">
        <Footer className />
      </div>
    </div>
  );
};

export default Contact;
