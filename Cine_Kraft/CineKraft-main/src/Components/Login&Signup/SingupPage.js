import React, { useEffect, useState } from "react";
import { Row, Col, Input, Select } from "antd";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "../../Css/Login&signup/LoginPage.scss";
import "../../Css/Login&signup/SingupPage.scss";
import UserSingup from "../../Components/Login&Signup/UserSingup";
import CelebritySingup from "../../Components/Login&Signup/CelebritySingup";
import ProductionCompanySingup from "../../Components/Login&Signup/ProductionCompany";

function SignupPage() {
  const storedOption = localStorage.getItem("selectedOption");
  const [selectedOption, setSelectedOption] = useState(storedOption || "");
  const handleDropdownChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    localStorage.setItem('selectedOption', newSelectedOption);
  };

  useEffect(() => {
    localStorage.setItem('selectedOption', selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <div>
        <Row>
          <Col lg={12} md={12} xs={24} className="left_side_loginPageimg"></Col>
          <Col lg={12} md={12} xs={24} className="Right_side_loginPageFields">
            <div className="Sinup_Container">
              <div className="loginContent_Container">
                <center
                  style={{
                    fontWeight: "bolder",
                    fontSize: "25px",
                    color: "#F8F0E5",
                  }}
                >
                  Welcome to CineKraft
                </center>
                <center
                  style={{
                    fontWeight: "bolder",
                    fontSize: "13px",
                    color: "#F8F0E5",
                  }}
                >
                  <p>
                    Back to Login ?{" "}
                    <Link to="/login" className="LoginSingupBtn_clss">
                      Login
                    </Link>
                  </p>
                </center>
                <div>
                    <form>
                  <div className="Singup_OptionDropdown">
                    <label
                      className="Singup_optionDropdown_label"
                      htmlFor="dropdown"
                    >
                      I'm
                    </label>
                    &nbsp;&nbsp;
                    <select
                      id="dropdown"
                      value={selectedOption}
                      className="Singup_OptionDropdown_field"
                      onChange={handleDropdownChange}
                    >
                      {/* <option value="">Select Your category</option> */}
                      <option value="userSingup">User</option>
                      <option value="CelebritySingup">Celebrity</option>
                      <option value="ProductionCompanySingup">
                        Production Company
                      </option>

                      {/* Add options for other components as needed */}
                    </select>
                  </div>
                  {selectedOption === "userSingup" && <UserSingup />}
                  {selectedOption === "CelebritySingup" && <CelebritySingup />}
                  {selectedOption === "ProductionCompanySingup" && (
                    <ProductionCompanySingup />
                  )}
                  </form>
                </div>

                <center
                  style={{
                    fontWeight: "bolder",
                    fontSize: "16px",
                    color: "#F8F0E5",
                    marginTop: "50px",
                  }}
                >
                  Or sign up with:
                </center>
                <div className="signupOptions">
                  <center>
                    <div>
                      <SocialIcon
                        network="facebook"
                        url="https://facebook.com"
                        style={{ width: "40px", height: "40px", margin: "8px" }}
                      />
                      <SocialIcon
                        network="instagram"
                        url="https://instagram.com"
                        style={{ width: "40px", height: "40px", margin: "8px" }}
                      />
                      <SocialIcon
                        network="twitter"
                        url="https://twitter.com"
                        style={{ width: "40px", height: "40px", margin: "8px" }}
                      />
                      <SocialIcon
                        network="email"
                        url="https://gmail.com"
                        bgColor="red"
                        style={{ width: "40px", height: "40px", margin: "8px" }}
                      />
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignupPage;
