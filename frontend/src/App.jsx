import ForgotPassword from "./components/Auth/Forgotpassword";
import Login from "./components/Auth/Login";
import Profile from "./components/Auth/Profile";
import Signup from "./components/Auth/Signup";
import UpdatePassword from "./components/Auth/UpdatePassword";
import Contact from "./components/FooterContaint/Contact";
import Faq from "./components/FooterContaint/Faq";
import Hbselect from "./components/FooterContaint/Hbselect";
import Rules from "./components/FooterContaint/Rules";
import Safety from "./components/FooterContaint/Safety";
import Terms from "./components/FooterContaint/Term";
import BoostSection from "./components/Home/BoostSection";
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
          <Route path="/setting/updatepassword" element={<UpdatePassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hb-select" element={<Hbselect />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/safety-tips" element={<Safety />} />
          <Route path="/posting-rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/boost" element={<BoostSection />} />
          

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
