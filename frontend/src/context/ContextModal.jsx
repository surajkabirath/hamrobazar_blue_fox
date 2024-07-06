// ModalContext.js

import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isPostJobFormOpen, setIsPostJobFormOpen] = useState(false);

  const openPostJobForm = () => setIsPostJobFormOpen(true);
  const closePostJobForm = () => setIsPostJobFormOpen(false);

  return (
    <ModalContext.Provider value={{ isPostJobFormOpen, openPostJobForm, closePostJobForm }}>
      {children}
    </ModalContext.Provider>
  );

};

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export const useModal = () => useContext(ModalContext);
