import {React} from "react";
import { FaBars } from "react-icons/fa";
import "./NavbarLogo.scss";


const NavbarLogo = () => {

  return (
    
    <nav className="navbar navbar-expand-md navbar-white bg-white" >
      {/* <!-- Brand -->  */}
      <a className="navbar-brand" href="#">
        {" "}
        <img className="cross"
          id="logo"
          alt="Logo"
          src="./images/cbe.png"
          width="54"
          height="54"
        />{" "}
        <span>
          Catholic Board of Education<b>The Diocese of Mangalore</b>
        </span>{" "}
      </a>

      {/* <!-- Toggler/collapsibe Button --> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        {" "}
        <span className="navbar-toggler-icon"></span>{" "}
      </button>

      {/* <!-- Navbar links --> */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#">
              Home
            </a>{" "}
          </li> 
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#">
              About CBE
            </a>{" "}  
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#">
              Institutions
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#">
              Gallery
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#">
              Circulars
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#">
              Contact Us
            </a>{" "}
          </li>
        </ul>
      </div>
    </nav>

    
  );
};

export default NavbarLogo;
