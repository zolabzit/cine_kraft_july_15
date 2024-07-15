import { React, useState } from "react";
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cinekraft from "../../assets/CineKraftLogo.png";
import { FaSearch } from "react-icons/fa";
import "./Homepage.css";
import {SlMenu} from "react-icons/sl";
import SERATTAALOGO from "../../../src/assets/Serrattaa.png";

function Header() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const navigateAndSetActive = (path) => {
    setActiveButton(path);
    navigate(path);
  };

  

  return (
<div className="navbackground">
      <nav className="navbar">
        <div className="navbar-column logo-column">
          <div className="logo">
            <img         onClick={() => navigate("/")}
              className="logo_size"
              style={{ width: "10vw", height: "10vh" }}
              src={cinekraft}
            
              alt="none"
            />
           
            <b style={{fontSize:"10px"}}> powered by</b> &nbsp;
            <img src={SERATTAALOGO} style={{width:"25%"}} alt="none"/>
            {/* <b style={{fontSize:"10px"}}>SERATTAA GLOBAL PRIVATE LIMITED</b> */}
                      </div>
        </div>

        {/* Menu items */}
        <div className="navbar-column menu-column">
          {/* Dropdown menu for mobile */}
          <Dropdown className="d-md-none">
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              <SlMenu style={{color:"white"}}/> {/* Icon for the menu */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => navigateAndSetActive("/")}
                active={activeButton === "/"}
              >
                Home
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigateAndSetActive("/aboutus")}
                active={activeButton === "/aboutus"}
              >
                About
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigateAndSetActive("/blog")}
                active={activeButton === "/blog"}
              >
                Blog
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigateAndSetActive("/vendors")}
                active={activeButton === "/vendors"}
              >
                Vendors
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigateAndSetActive("/pitchDeck")}
                active={activeButton === "/pitchDeck"}
              >
                PitchDeck
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigateAndSetActive("/quiz")}
                active={activeButton === "/quiz"}
              >
                Quiz
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => navigateAndSetActive("/contact")}
                active={activeButton === "/contact"}
              >
                Contact
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Menu items for tablet and desktop */}
          <div className="d-none d-md-block" style={{paddingTop:"2%"}}>
            <ul>
              <li>
                <Button
                  onClick={() => navigateAndSetActive("/")}
                  className={`btn_clr_box ${
                    activeButton === "/" ? "active" : ""
                  }`}
                  variant="none"
                >
                  Home
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigateAndSetActive("/aboutus")}
                  className={`btn_clr_box ${
                    activeButton === "/aboutus" ? "active" : ""
                  }`}
                  variant="none"
                >
                  About
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigateAndSetActive("/blog")}
                  className={`btn_clr_box ${
                    activeButton === "/blog" ? "active" : ""
                  }`}
                  variant="none"
                >
                  Blog
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigateAndSetActive("/vendors")}
                  className={`btn_clr_box ${
                    activeButton === "/vendors" ? "active" : ""
                  }`}
                  variant="none"
                >
                  Vendors
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigateAndSetActive("/pitchDeck")}
                  className={`btn_clr_box ${
                    activeButton === "/pitchDeck" ? "active" : ""
                  }`}
                  variant="none"
                >
                  PitchDeck
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigateAndSetActive("/quiz")}
                  className={`btn_clr_box ${
                    activeButton === "/quiz" ? "active" : ""
                  }`}
                  variant="none"
                >
                  Quiz
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigateAndSetActive("/contact")}
                  className={`btn_clr_box ${
                    activeButton === "/contact" ? "active" : ""
                  }`}
                  variant="none"
                >
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* <div style={{paddingLeft:"4px"}}  className="navbar-column search-column">
          <InputGroup>
            <Form.Control
              placeholder="Movies / Celebrities"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              className="search_foot_clr"
              variant="outline-secondary"
              id="button-addon2"
            >
              <FaSearch />
            </Button>
          </InputGroup>
        </div> */}
        <div style={{textAlign:"end"}} className="navbar-column login-column">
          {/* Popup dropdown */}
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              className="popup-button"
            >
              Login/Signup
            </Dropdown.Toggle>

            <Dropdown.Menu className="popup">
              <Dropdown.Item onClick={() => navigate("/login")}>
                Login
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/signup")}>
                Signup
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>

  );
}

export default Header;
