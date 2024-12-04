import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import VirtualQForm from "./pages/virtualq";
import Kanikka from "./pages/kanikka";
import PilgrimGuid from "./pages/pilgrimguid";
import Footer from "./components/footer";
import RegistrationForm from "./components/registration";

function App() {
  return (
    <div className="max-w-[2000px]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<VirtualQForm />} />
          <Route path="/kanikka" element={<Kanikka />} />
          <Route path="/guid" element={<PilgrimGuid />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
