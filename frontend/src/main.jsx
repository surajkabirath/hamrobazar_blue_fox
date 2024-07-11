import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const stepContext = createContext();
const StepProvider = ({children})=>{
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    images: [],
  });

  return (
    <stepContext.Provider value={{activeStep, setActiveStep,formData,setFormData}}>
      {children}
    </stepContext.Provider>
  )
};

export const useStep = ()=>{
  return useContext(stepContext);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </React.StrictMode>,
)
