import { useContext, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { registerContext } from "../contexts/registerContext";
// import CounterApp from "../smallApps/CounterApp";

function DemoProjects() {
  const { showApp, setShowApp } = useContext(registerContext);

  //   const showEffect = useEffect(() => {
  //     function showFunc() {
  //       setShowApp(true);
  //     }
  //     showFunc();
  //     // return setShowApp(false);
  //   }, [showApp]);

  console.log(showApp);

  function showEffect() {
    setShowApp(true);
  }

  if (showApp) {
    return (
      <>
        <Outlet />
      </>
    );
  }

  return (
    <div>
      <p>This page contains demo Projects</p>
      <hr />
      <ul>
        <li>
          <NavLink onClick={showEffect} to="counterapp">
            CounterApp
          </NavLink>
        </li>
        <li>
          {/* <NavLink onClick={() => setShowApp(true)} to="app2"> */}
          <NavLink onClick={showEffect} to="app2">
            app1
          </NavLink>
        </li>
      </ul>
      {/* <Outlet /> */}
    </div>
  );
}

export default DemoProjects;
