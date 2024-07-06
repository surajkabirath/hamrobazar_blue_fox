import ForgotPassword from "./components/Auth/Forgotpassword";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Contact from "./components/FooterContaint/Contact";
import Faq from "./components/FooterContaint/Faq";
import Hbselect from "./components/FooterContaint/Hbselect";
import Rules from "./components/FooterContaint/Rules";
import Safety from "./components/FooterContaint/Safety";
import Terms from "./components/FooterContaint/Term";
import Header from "./components/Home/Header";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Header />} />
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/hb-select" element={<Hbselect />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/safety-tips" element={<Safety />} />
          <Route path="/posting-rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
