import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { useState } from "react";
import { registerContext } from "./contexts/registerContext";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <registerContext.Provider value={{ name, setName, password, setPassword }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </registerContext.Provider>
  );
}

export default App;
