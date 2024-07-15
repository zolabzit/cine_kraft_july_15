import React, { useState } from 'react'
import { Row, Col, Input, Select } from "antd";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import "../../Css/Login&signup/LoginPage.scss";
import "../../Css/Login&signup/SingupPage.scss";


const UserSingup = () => {
  const [showFields, setShowFields] = useState(true);
 const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const toggleFields = () => {
    setShowFields(!showFields);
  };
  return (
    <div>
         <div className="loginField_booking">
          <form>
                  <Row>
                    <Col lg={12}>
                      {showFields ? (
                        <>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="first"
                              className="Singup_Input_field"
                              placeholder="First Name"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="lastName"
                              className="Singup_Input_field"
                              placeholder="Last Name"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="mobileNumber"
                              className="Singup_Input_field"
                              placeholder="Mobile Number"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="email"
                              className="Singup_Input_field"
                              placeholder="Email"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          
                        </>
                      ) : (
                        <>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="favDirector"
                              className="Singup_Input_field"
                              placeholder="Favourite Director"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="favEditor"
                              className="Singup_Input_field"
                              placeholder="Favourite Editor"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="favMusicComposer"
                              className="Singup_Input_field"
                              placeholder="Favourite Music Composer"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="favLyricist"
                              className="Singup_Input_field"
                              placeholder="Favourite Lyricist"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          
                        </>
                      )}
                    </Col>
                    <Col lg={12}>
                      {showFields ? (
                        <>
                          <div className='SingupInput_div_clss'>
                            <Input.Password
                              id="Createpassword"
                              className="Singup_Input_field"
                              placeholder="Create  Password"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input.Password
                              id="Confirmpassword"
                              className="Singup_Input_field"
                              placeholder="Confirm Password"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="favActor"
                              className="Singup_Input_field"
                              placeholder="Favourite Actor"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="favactress"
                              className="Singup_Input_field"
                              placeholder="Favourite actress"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                         
                        </>
                      ) : (
                        <>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="favSinger"
                              className="Singup_Input_field"
                              placeholder="Favourite Singer"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="favCameraMan"
                              className="Singup_Input_field"
                              placeholder="Favourite CameraMan"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          <div className='SingupInput_div_clss'>
                            <Input
                              id="favMovie"
                              className="Singup_Input_field"
                              placeholder="Favourite movie"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                          
                        </>
                      )}
                    </Col>
                  </Row>
                  <div>
                    {showFields ? (
                      <div className="loginPage_button">
                        <RxDoubleArrowRight
                          className="SingupArrow_btn"
                          onClick={toggleFields}
                          style={{ paddingBottom: "10px" }}
                        />
                      </div>
                    ) : (
                      <div className="loginPage_button_backIcon">
                        <RxDoubleArrowLeft
                          className="SingupArrow_btn"
                          onClick={toggleFields}
                          style={{ paddingBottom: "10px" }}
                        />
                      </div>
                    )}
                  </div>
                  <center>
                    <div className="loginPage_button">
                      <button className="loginBackgroundStyle">SignUp</button>
                    </div>
                    
                  </center>
                  </form>
                </div>
    </div>
  )
}

export default UserSingup