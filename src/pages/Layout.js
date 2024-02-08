import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "./Footer";
import RegisterPopUpButton from "./RegisterPopUpButton";
const { nav, navlink, listItem } = styles;

function Layout() {
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
        </ul>

        <RegisterPopUpButton />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
