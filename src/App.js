import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DemoProjects from "./pages/DemoProjects";
import { useState } from "react";
import { registerContext } from "./contexts/registerContext";
import CounterApp from "./smallApps/CounterApp";
import DaysCalculator from "./smallApps/DaysCalculator";
import ImportData from "./smallApps/ImportData";
import ResuableTable from "./smallApps/ReusableTable";
import TODO from "./smallApps/TODO";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showApp, setShowApp] = useState(false);

  return (
    <registerContext.Provider
      value={{ name, setName, password, setPassword, showApp, setShowApp }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="demo" element={<DemoProjects />}>
              <Route path="counterapp" element={<CounterApp />} />
              <Route path="DaysCalculator" element={<DaysCalculator />} />
              <Route path="ReusableTable" element={<ResuableTable />} />
              <Route path="ImportData" element={<ImportData />} />
              <Route path="todo" element={<TODO />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </registerContext.Provider>
  );
}

export default App;
