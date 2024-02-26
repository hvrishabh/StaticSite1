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
import CompleteToDoApp from "./smallApps/CompleteToDoApp";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showApp, setShowApp] = useState(false);
  // const [tasks, setTasks] = useState(demo);
  // const [updateValue, setUpdateValue] = useState();
  // const [taskToAdd, setTaskToAdd] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

  return (
    <registerContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        showApp,
        setShowApp,
        // tasks,
        // setTasks,
        // taskToAdd,
        // setTaskToAdd,
        // searchQuery,
        // setSearchQuery,
        // updateValue,
        // setUpdateValue,
      }}
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
              <Route path="CompleteToDoApp" element={<CompleteToDoApp />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </registerContext.Provider>
  );
}

export default App;

// let demo = [
//   {
//     id: 1,
//     task: "hit the gym",
//     status: true,
//     updateStatus: false,
//   },
//   {
//     id: 2,
//     task: "gym drink",
//     status: false,
//     updateStatus: false,
//   },
//   {
//     id: 3,
//     task: "lib",
//     status: true,
//     updateStatus: false,
//   },
// ];
