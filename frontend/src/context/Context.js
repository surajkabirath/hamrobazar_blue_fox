import { createContext, useState, useContext } from "react";

// Create the context
const AllContext = createContext();

// Provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    // Add other fields as needed
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    // Add other fields as needed
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleError = (field, errorMessage) => {
    setErrors({ ...errors, [field]: errorMessage });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      // Reset other fields
    });
    setErrors({});
  };

  return (
    <AllContext.Provider
      value={{ formData, handleChange, errors, handleError, clearForm }}
    >
      {children}
    </AllContext.Provider>
  );
};

// Custom hook to use the form context
export const useFormContext = () => {
  return useContext(AllContext);
};
