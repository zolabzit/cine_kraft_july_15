import React, { useState } from "react";
import { Row, Col, Input, Select } from "antd";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

const ProductionCompany = () => {
  const [showFields, setShowFields] = useState(true);
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  // const handleChange = (selectedValues) => {
  //   console.log(selectedValues); // Handle the selected values as needed
  // };

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
                  <div className="SingupInput_div_clss">
                    <Input
                      id="ProductionCompanyName"
                      className="Singup_Input_field"
                      placeholder="Production Company Name"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="emailid"
                      type="email"
                      className="Singup_Input_field"
                      placeholder="Email Id"
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
                  <div className="SingupInput_div_clss">
                    <Input
                      id="producerName"
                      className="Singup_Input_field"
                      placeholder="Producer Name"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="noofmoviesProduced"
                      className="Singup_Input_field"
                      placeholder="No of Movies Produced"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="currentlyProdcuing "
                      className="Singup_Input_field"
                      placeholder="Currently Prodcuing "
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="upcomingProduction "
                      className="Singup_Input_field"
                      placeholder="Upcoming Production "
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                </>
              )}
            </Col>
            <Col lg={12}>
              {showFields ? (
                <>
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
                      id="executiveProducer"
                      className="Singup_Input_field"
                      placeholder="Executive Producer"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="ProductionManager"
                      className="Singup_Input_field"
                      placeholder="Production Manager"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="headAccountant"
                      className="Singup_Input_field"
                      placeholder="Head Accountant"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Select
                      className="Singup_Input_field"
                      style={{ marginBottom: "20px" }}
                      showSearch
                      placeholder="Type Of Production Company"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={filterOption}
                      options={[
                        {
                          value: "shortfilm",
                          label: "Shortfilm",
                        },
                        {
                          value: "movies",
                          label: "Movies",
                        },
                        {
                          value: "webseries",
                          label: "Webseries",
                        },
                        {
                          value: "Documentary",
                          label: "Documentary",
                        },
                        {
                          value: "music",
                          label: "Music",
                        },
                        {
                          value: "tvSerials",
                          label: "Tv Serials",
                        },
                      ]}
                    />
                  </div>
                  <div className="SingupInput_div_clss">
                    <Input
                      id="movieType"
                      className="Singup_Input_field"
                      placeholder="Movie Type"
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
  );
};

export default ProductionCompany;
