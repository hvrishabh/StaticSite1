import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "./Footer";
import RegisterPopUpButton from "./RegisterPopUpButton";
import CounterApp from "../smallApps/CounterApp";
import { useContext } from "react";
import { registerContext } from "../contexts/registerContext";
const { nav, navlink, listItem } = styles;

function Layout() {
  const { showApp, setShowApp } = useContext(registerContext);
  return (
    <>
      <nav
        className={`${nav} d-flex bg-primary text-light justify-content-between `}
      >
        <ul className="d-flex">
          <li className={listItem}>
            <NavLink className={navlink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navlink} to="aboutus">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className={navlink} to="contactus">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setShowApp(false)}
              className={navlink}
              to="demo"
            >
              Demo Projects
            </NavLink>
          </li>
        </ul>

        <RegisterPopUpButton />
      </nav>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
