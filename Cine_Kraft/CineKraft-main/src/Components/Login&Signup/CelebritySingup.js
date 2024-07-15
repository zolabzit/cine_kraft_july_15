import React, { useState } from "react";
import { Row, Col, Input, Select, Space } from "antd";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

const CelebritySingup = () => {
  const options = [
    {
      value: "Actor",
    },
    {
      value: "Actress",
    },
    {
      value: "Director",
    },
    {
      value: "Music Director",
    },
    {
      value: "Singer",
    },
    {
      value: "Camera Man(Dop)",
    },
    {
      value: "Editor",
    },
    {
      value: "Choreographer(Dance master)",
    },
    {
      value: "Lyricist",
    },
    {
      value: "Assistant Director",
    },
    {
      value: "Assistant camera man",
    },
    {
      value: "Child Artist",
    },
    {
      value: "Character Artist",
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [showFields, setShowFields] = useState(true);

  const toggleFields = () => {
    setShowFields(!showFields);
  };
  return (
    <div>
      <div className="loginField_booking">
        <form>
          <Row>
            <Col lg={12}>
              {/* {showFields ? ( */}
                <>
                  <div className="SingupInput_div_clss">
                    <Space
                      style={{
                        width: "90%",
                      }}
                      direction="vertical"
                    >
                      <Select
                        className="Singup_Input_field"
                        mode="multiple"
                        allowClear
                        style={{
                          width: "100%",
                          marginBottom: "20px",
                        }}
                        placeholder="Please select your Categories"
                        // defaultValue={["green"]}
                        onChange={handleChange}
                        options={options}
                      />
                    </Space>
                  </div>

                  <div className="SingupInput_div_clss">
                    <Input
                      id="first"
                      className="Singup_Input_field"
                      placeholder="First Name"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="lastName"
                      className="Singup_Input_field"
                      placeholder="Last Name"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="mobileNumber"
                      className="Singup_Input_field"
                      placeholder="Mobile Number"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  {/* <div className='SingupInput_div_clss'>
                            <Input
                              id="email"
                              className="Singup_Input_field"
                              placeholder="Email"
                              style={{ marginBottom: "20px" }}
                            />
                          </div> */}
                </>
              {/* ) : ( */}
                {/* <>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="favDirector"
                      className="Singup_Input_field"
                      placeholder="Favourite Director"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="favEditor"
                      className="Singup_Input_field"
                      placeholder="favourite Editor"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="favMusicComposer"
                      className="Singup_Input_field"
                      placeholder="favourite Music Composer"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="favLyricist"
                      className="Singup_Input_field"
                      placeholder="favourite Lyricist"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                </> */}
              {/* )} */}
            </Col>
            <Col lg={12}>
              {/* {showFields ? ( */}
                <>
                 <div className='SingupInput_div_clss'>
                            <Input
                              id="email"
                              className="Singup_Input_field"
                              placeholder="Email"
                              style={{ marginBottom: "20px" }}
                            />
                          </div>
                  <div className="SingupInput_div_clss">
                    <Input.Password
                      id="Createpassword"
                      className="Singup_Input_field"
                      placeholder="Create  Password"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input.Password
                      id="Confirmpassword"
                      className="Singup_Input_field"
                      placeholder="Confirm Password"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  
                  <div className="SingupInput_div_clss">
                    <Input
                      id="noOfMovies"
                      className="Singup_Input_field"
                      placeholder="No of Movies Done"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                </>
              {/* ) : ( */}
                {/* <>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="favSinger"
                      className="Singup_Input_field"
                      placeholder="favourite Singer"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="favCameraMan"
                      className="Singup_Input_field"
                      placeholder="favourite CameraMan"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="favMovie"
                      className="Singup_Input_field"
                      placeholder="favourite movie"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                </> */}
              {/* )} */}
            </Col>
          </Row>
          {/* <div>
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
          </div> */}
          <center>
            <div className="loginPage_button" >
              <button className="loginBackgroundStyle">SignUp</button>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default CelebritySingup;
