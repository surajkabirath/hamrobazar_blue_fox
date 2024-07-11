import { useState } from "react";

import PostFormsec from "../PostForm/Postformsec";


const Modal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    images: [],
    category: "",
    condition: "",
    location: "",
    description: "",
    delivery: false,
    adultContent: false,
    price: "",
    contactDetails: "",
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      {/* {step === 1 && (
        <PostFormStep1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )} */}
      {step === 1 && (
        <PostFormsec
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {/* {step === 3 && (
        <PostFormStep3
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <PostFormStep4
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
        />
      )} */}
    </div>
  );
};

export default Modal;
