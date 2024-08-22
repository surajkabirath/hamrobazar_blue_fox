// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Stepper state
  const [activeStep, setActiveStep] = useState(1);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    email: '',
    images:[],
    currentPassword: '',
    newPassword: '',
    // Add other fields as needed
    //stepper
    category: '',
    condition: '',
    location: '',
    description: '',
    delivery: false,
    isAdultContent: false,

  });

  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (input) => {
    const { name, value } = input.target || input;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Clear errors on change
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  // Handle error messages
  const handleSubmit = (field, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: message,
    }));
  };

  // Stepper control functions
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);
  
  return (
    <AppContext.Provider
      value={{
        // Stepper
        activeStep,
        setActiveStep,
        nextStep,
        prevStep,
        
        // Form
        formData,
        setFormData,
        errors,
        setErrors,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
