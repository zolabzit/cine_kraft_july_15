import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Row,
  Col,
  Space,
  Checkbox,
  Radio,
} from "antd";
import { Container } from "react-bootstrap";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const AddCelebrityForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
    console.log("Social media links:", values);
 
    
    // Make a POST request to the backend API endpoint  
    axios.post('/api/postCelebrities', values)
      .then(response => {
        console.log('Celebrity added successfully:', response.data);
        // Optionally, you can perform additional actions after successful addition
      })
      .catch(error => {
        console.error('Error adding celebrity:', error);
        // Handle error cases
      });
  };
  

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [bornInCountries, setBornInCountries] = useState([
    {
      id: 1,
      name: "India",
      states: [
        {
          name: "Tamil Nadu",
          districts: [
            {
              name: "Chennai",
              areas: ["Saidapet", "Nungambakkam", "Velachery"],
            },
            {
              name: "Tutucorin",
              areas: ["Kalugumalai", "Vilathikulam", "Srivaikundam"],
            },
            {
              name: "Tenkasi",
              areas: ["Kadayanallur", "Kadayanallur", "Kadayanallur"],
            },
          ],
        },
        {
          name: "Karanataka",
          districts: [
            {
              name: "Bengaluru",
              areas: ["Koramangala", "Majestic", "Kudlu Gate"],
            },
            {
              name: "Anekal",
              areas: ["Byagadadenahalli", "Hebbagodi", "Jigani"],
            },
            {
              name: "Mysuru",
              areas: ["Tirumakudalu", "Nanjangud", "Hunsur"],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "United States",
      states: [
        {
          name: "California",
          districts: [
            {
              name: "Los Angeles County",
              areas: ["Area19", "Area20", "Area21"],
            },
            {
              name: "San Francisco County",
              areas: ["Area22", "Area23", "Area24"],
            },
            {
              name: "San Diego County",
              areas: ["Area25", "Area26", "Area27"],
            },
          ],
        },
        {
          name: "Texas",
          districts: [
            {
              name: "Harris County",
              areas: ["Area28", "Area29", "Area30"],
            },
            {
              name: "Dallas County",
              areas: ["Area31", "Area32", "Area33"],
            },
            {
              name: "Travis County",
              areas: ["Area34", "Area35", "Area36"],
            },
          ],
        },
        {
          name: "New York",
          districts: [
            {
              name: "New York County",
              areas: ["Area37", "Area38", "Area39"],
            },
            {
              name: "Kings County",
              areas: ["Area40", "Area41", "Area42"],
            },
            {
              name: "Queens County",
              areas: ["Area43", "Area44", "Area45"],
            },
          ],
        },
      ],
    },
    // Add more countries with their states, districts, and areas here
  ]);

  const [broughtUpCountries, setBroughtUpCountries] = useState([
    {
      id: 1,
      name: "India",
      states: [
        {
          name: "Tamil Nadu",
          districts: [
            {
              name: "Chennai",
              areas: ["Saidapet", "Nungambakkam", "Velachery"],
            },
            {
              name: "Tutucorin",
              areas: ["Kalugumalai", "Vilathikulam", "Srivaikundam"],
            },
            {
              name: "Tenkasi",
              areas: ["Kadayanallur", "Kadayanallur", "Kadayanallur"],
            },
          ],
        },
        {
          name: "Karanataka",
          districts: [
            {
              name: "Bengaluru",
              areas: ["Koramangala", "Majestic", "Kudlu Gate"],
            },
            {
              name: "Anekal",
              areas: ["Byagadadenahalli", "Hebbagodi", "Jigani"],
            },
            {
              name: "Mysuru",
              areas: ["Tirumakudalu", "Nanjangud", "Hunsur"],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "United States",
      states: [
        {
          name: "California",
          districts: [
            {
              name: "Los Angeles County",
              areas: ["Area19", "Area20", "Area21"],
            },
            {
              name: "San Francisco County",
              areas: ["Area22", "Area23", "Area24"],
            },
            {
              name: "San Diego County",
              areas: ["Area25", "Area26", "Area27"],
            },
          ],
        },
        {
          name: "Texas",
          districts: [
            {
              name: "Harris County",
              areas: ["Area28", "Area29", "Area30"],
            },
            {
              name: "Dallas County",
              areas: ["Area31", "Area32", "Area33"],
            },
            {
              name: "Travis County",
              areas: ["Area34", "Area35", "Area36"],
            },
          ],
        },
        {
          name: "New York",
          districts: [
            {
              name: "New York County",
              areas: ["Area37", "Area38", "Area39"],
            },
            {
              name: "Kings County",
              areas: ["Area40", "Area41", "Area42"],
            },
            {
              name: "Queens County",
              areas: ["Area43", "Area44", "Area45"],
            },
          ],
        },
      ],
    },
    // Add more countries with their states, districts, and areas here
  ]);
  const [presentCountries, setPresentCountries] = useState([
    {
      id: 1,
      name: "India",
      states: [
        {
          name: "Tamil Nadu",
          districts: [
            {
              name: "Chennai",
              areas: ["Saidapet", "Nungambakkam", "Velachery"],
            },
            {
              name: "Tutucorin",
              areas: ["Kalugumalai", "Vilathikulam", "Srivaikundam"],
            },
            {
              name: "Tenkasi",
              areas: ["Kadayanallur", "Kadayanallur", "Kadayanallur"],
            },
          ],
        },
        {
          name: "Karanataka",
          districts: [
            {
              name: "Bengaluru",
              areas: ["Koramangala", "Majestic", "Kudlu Gate"],
            },
            {
              name: "Anekal",
              areas: ["Byagadadenahalli", "Hebbagodi", "Jigani"],
            },
            {
              name: "Mysuru",
              areas: ["Tirumakudalu", "Nanjangud", "Hunsur"],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "United States",
      states: [
        {
          name: "California",
          districts: [
            {
              name: "Los Angeles County",
              areas: ["Area19", "Area20", "Area21"],
            },
            {
              name: "San Francisco County",
              areas: ["Area22", "Area23", "Area24"],
            },
            {
              name: "San Diego County",
              areas: ["Area25", "Area26", "Area27"],
            },
          ],
        },
        {
          name: "Texas",
          districts: [
            {
              name: "Harris County",
              areas: ["Area28", "Area29", "Area30"],
            },
            {
              name: "Dallas County",
              areas: ["Area31", "Area32", "Area33"],
            },
            {
              name: "Travis County",
              areas: ["Area34", "Area35", "Area36"],
            },
          ],
        },
        {
          name: "New York",
          districts: [
            {
              name: "New York County",
              areas: ["Area37", "Area38", "Area39"],
            },
            {
              name: "Kings County",
              areas: ["Area40", "Area41", "Area42"],
            },
            {
              name: "Queens County",
              areas: ["Area43", "Area44", "Area45"],
            },
          ],
        },
      ],
    },
    // Add more countries with their states, districts, and areas here
  ]);

  const [selectedBornInCountry, setSelectedBornInCountry] = useState("");
  const [selectedBornInState, setSelectedBornInState] = useState("");
  const [selectedBornInDistrict, setSelectedBornInDistrict] = useState("");
  const [selectedBornInArea, setSelectedBornInArea] = useState("");
  const [selectedBroughtUpCountry, setSelectedBroughtUpCountry] = useState("");
  const [selectedBroughtUpState, setSelectedBroughtUpState] = useState("");
  const [selectedBroughtUpDistrict, setSelectedBroughtUpDistrict] =
    useState("");
  const [selectedBroughtUpArea, setSelectedBroughtUpArea] = useState("");
  const [selectedPresentCountry, setSelectedPresentCountry] = useState("");
  const [selectedPresentState, setSelectedPresentState] = useState("");
  const [selectedPresentDistrict, setSelectedPresentDistrict] = useState("");
  const [selectedPresentArea, setSelectedPresentArea] = useState("");

  const handleBornInCountryChange = (value) => {
    setSelectedBornInCountry(value);
    // Reset state, district, and area when country changes
    setSelectedBornInState("");
    setSelectedBornInDistrict("");
    setSelectedBornInArea("");
  };

  const handleBornInStateChange = (value) => {
    setSelectedBornInState(value);
    // Reset district and area when state changes
    setSelectedBornInDistrict("");
    setSelectedBornInArea("");
  };

  const handleBornInDistrictChange = (value) => {
    setSelectedBornInDistrict(value);
    // Reset area when district changes
    setSelectedBornInArea("");
  };

  const handleBornInAreaChange = (value) => {
    setSelectedBornInArea(value);
  };

  const handleBroughtUpCountryChange = (value) => {
    setSelectedBroughtUpCountry(value);
    // Reset state, district, and area when country changes
    setSelectedBroughtUpState("");
    setSelectedBroughtUpDistrict("");
    setSelectedBroughtUpArea("");
  };

  const handleBroughtUpStateChange = (value) => {
    setSelectedBroughtUpState(value);
    // Reset district and area when state changes
    setSelectedBroughtUpDistrict("");
    setSelectedBroughtUpArea("");
  };

  const handleBroughtUpDistrictChange = (value) => {
    setSelectedBroughtUpDistrict(value);
    // Reset area when district changes
    setSelectedBroughtUpArea("");
  };

  const handleBroughtUpAreaChange = (value) => {
    setSelectedBroughtUpArea(value);
  };

  const handlePresentCountryChange = (value) => {
    setSelectedPresentCountry(value);
    // Reset state, district, and area when country changes
    setSelectedPresentState("");
    setSelectedPresentDistrict("");
    setSelectedPresentArea("");
  };

  const handlePresentStateChange = (value) => {
    setSelectedPresentState(value);
    // Reset district and area when state changes
    setSelectedPresentDistrict("");
    setSelectedPresentArea("");
  };

  const handlePresentDistrictChange = (value) => {
    setSelectedPresentDistrict(value);
    // Reset area when district changes
    setSelectedPresentArea("");
  };

  const handlePresentAreaChange = (value) => {
    setSelectedPresentArea(value);
  };

  const [isAlive, setIsAlive] = useState(true);
  const [dateOfDeath, setDateOfDeath] = useState(new Date());

  const handleCheckboxChange = (e) => {
    setIsAlive(e.target.checked);
  };

  const handleDateChange = (date) => {
    setDateOfDeath(date);
  };

  const [relationshipType, setRelationshipType] = useState(null);

  const handleRelationshipTypeChange = (value) => {
    setRelationshipType(value);
  };

  const [relations, setRelations] = useState([]);

  const handleAddRelation = () => {
    setRelations([...relations, { relationshipType: "" }]);
  };

  const handleRelationTypeChange = (index, value) => {
    const updatedRelations = [...relations];
    updatedRelations[index] = {
      ...updatedRelations[index],
      relationshipType: value,
    };
    setRelations(updatedRelations);
  };

  const handleDivorceChange = (index, value) => {
    const updatedRelations = [...relations];
    updatedRelations[index] = { ...updatedRelations[index], divorce: value };
    setRelations(updatedRelations);
  };

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

  const [socialPlatforms, setSocialPlatforms] = useState([
    { platform: "", link: "" },
  ]);
  const [showSocialMediaLinks, setShowSocialMediaLinks] = useState(true);

  const handleAddPlatform = () => {
    setSocialPlatforms([...socialPlatforms, { platform: "", link: "" }]);
  };

  const handleCheckboxSocialChange = (e) => {
    setShowSocialMediaLinks(e.target.checked);
  };

  const [fields, setFields] = useState([
    { id: 1, favoriteOption: "", selectedOption: "" },
  ]);
  const [nextId, setNextId] = useState(2); // To generate unique ids for new fields

  const handleOptionChange = (value, id) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, favoriteOption: value } : field
    );
    setFields(updatedFields);
  };

  const handleInputChange = (e, id) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, selectedOption: e.target.value } : field
    );
    setFields(updatedFields);
  };

  const handleAddField = () => {
    const newField = { id: nextId, favoriteOption: "", selectedOption: "" };
    setFields([...fields, newField]);
    setNextId((prevId) => prevId + 1);
  };

  const handleRemoveField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);
  };

  const handleSubmit = () => {
    // You can handle the form submission here
    console.log("Fields:", fields);
  };

  return (
    <Container>
      <div>
        <h2 className="mt-3 mb-3 philosopher-font">Add Celebrity</h2>
        <hr />

        <Form
          style={{ paddingTop: "3%" }}
          form={form}
          name="addCelebrity"
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <div className="SingupInput_div_clss">
            <Space
              style={{
                width: "90%",
              }}
              direction="vertical"
            >
              <Select
                className="Singup_Input_field philosopher-font"
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
                placeholder={
                  <span className="philosopher-font">
                    Please select your Categories
                  </span>
                }
                // defaultValue={["green"]}
                onChange={handleChange}
                options={options}
              />
            </Space>
          </div>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Original Name</span>}
                name="originalName"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="philosopher-font">
                        Please enter original name
                      </span>
                    ),
                  },
                ]}
              >
                <Input className="philosopher-font" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Full Name</span>}
                name="name"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="philosopher-font">
                        Please enter the celebrity's full name
                      </span>
                    ),
                  },
                ]}
              >
                <Input className="philosopher-font" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Nick Name</span>}
                name="nick"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="philosopher-font">
                        Please enter the celebrity's nick name
                      </span>
                    ),
                  },
                ]}
              >
                <Input className="philosopher-font" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Industry</span>}
                name="industry"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="philosopher-font">
                        Please select the industry
                      </span>
                    ),
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  className="philosopher-font"
                  placeholder={
                    <span className="philosopher-font">Select industry</span>
                  }
                >
                  <Option className="philosopher-font" value="Kollywood">
                    Kollywood
                  </Option>
                  <Option className="philosopher-font" value="Tollywood">
                    Tollywood
                  </Option>
                  <Option className="philosopher-font" value="Mollywood">
                    Mollywood
                  </Option>
                  <Option className="philosopher-font" value="Sandalwood">
                    Sandalwood
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Date of Birth</span>}
                name="dob"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="philosopher-font">
                        Please select the date of birth
                      </span>
                    ),
                  },
                ]}
              >
                <DatePicker className="philosopher-font" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Gender</span>}
                name="gender"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="philosopher-font">
                        Please enter gender
                      </span>
                    ),
                  },
                ]}
              >
                <Select
                  className="philosopher-font"
                  mode="tags single"
                  tokenSeparators={[","]}
                  style={{ width: "100%" }}
                >
                  <Option value="Male" className="philosopher-font">
                    Male
                  </Option>
                  <Option value="Female" className="philosopher-font">
                    Female
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          {/* Born in */}
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label={<span className="philosopher-font">Born In </span>}
              >
                <Row gutter={16}>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedBornInCountry}
                      onChange={handleBornInCountryChange}
                    >
                      <Option className="philosopher-font" value="">
                        {
                          <span className="philosopher-font">
                            Select Country
                          </span>
                        }
                      </Option>
                      {bornInCountries.map((country) => (
                        <Option
                          className="philosopher-font"
                          key={country.id}
                          value={country.name}
                        >
                          {country.name}
                        </Option>
                      ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedBornInState}
                      onChange={handleBornInStateChange}
                    >
                      <Option className="philosopher-font" value="">
                        {<span className="philosopher-font">Select State</span>}
                      </Option>
                      {selectedBornInCountry &&
                        bornInCountries
                          .find(
                            (country) => country.name === selectedBornInCountry
                          )
                          ?.states.map((state) => (
                            <Option
                              className="philosopher-font"
                              key={state.name}
                              value={state.name}
                            >
                              {state.name}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedBornInDistrict}
                      onChange={handleBornInDistrictChange}
                    >
                      <Option className="philosopher-font" value="">
                        {
                          <span className="philosopher-font">
                            Select District
                          </span>
                        }
                      </Option>
                      {selectedBornInState &&
                        bornInCountries
                          .find(
                            (country) => country.name === selectedBornInCountry
                          )
                          ?.states.find(
                            (state) => state.name === selectedBornInState
                          )
                          ?.districts.map((district) => (
                            <Option
                              className="philosopher-font"
                              key={district.name}
                              value={district.name}
                            >
                              {district.name}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedBornInArea}
                      onChange={handleBornInAreaChange}
                    >
                      <Option className="philosopher-font" value="">
                        {<span className="philosopher-font">Select Area</span>}
                      </Option>
                      {selectedBornInDistrict &&
                        bornInCountries
                          .find(
                            (country) => country.name === selectedBornInCountry
                          )
                          ?.states.find(
                            (state) => state.name === selectedBornInState
                          )
                          ?.districts.find(
                            (district) =>
                              district.name === selectedBornInDistrict
                          )
                          ?.areas.map((area) => (
                            <Option
                              className="philosopher-font"
                              key={area}
                              value={area}
                            >
                              {area}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>

          {/* Brought up */}
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label={<span className="philosopher-font">Brought Up</span>}
              >
                <Row gutter={16}>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedBroughtUpCountry}
                      onChange={handleBroughtUpCountryChange}
                    >
                      <Option className="philosopher-font" value="">
                        {
                          <span className="philosopher-font">
                            Select Country
                          </span>
                        }
                      </Option>
                      {broughtUpCountries.map((country) => (
                        <Option
                          className="philosopher-font"
                          key={country.id}
                          value={country.name}
                        >
                          {country.name}
                        </Option>
                      ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedBroughtUpState}
                      onChange={handleBroughtUpStateChange}
                    >
                      <Option className="philosopher-font" value="">
                        {<span className="philosopher-font">Select State</span>}
                      </Option>
                      {selectedBroughtUpCountry &&
                        broughtUpCountries
                          .find(
                            (country) =>
                              country.name === selectedBroughtUpCountry
                          )
                          ?.states.map((state) => (
                            <Option
                              className="philosopher-font"
                              key={state.name}
                              value={state.name}
                            >
                              {state.name}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedBroughtUpDistrict}
                      onChange={handleBroughtUpDistrictChange}
                    >
                      <Option className="philosopher-font" value="">
                        {
                          <span className="philosopher-font">
                            Select District
                          </span>
                        }
                      </Option>
                      {selectedBroughtUpState &&
                        broughtUpCountries
                          .find(
                            (country) =>
                              country.name === selectedBroughtUpCountry
                          )
                          ?.states.find(
                            (state) => state.name === selectedBroughtUpState
                          )
                          ?.districts.map((district) => (
                            <Option
                              className="philosopher-font"
                              key={district.name}
                              value={district.name}
                            >
                              {district.name}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedBroughtUpArea}
                      onChange={handleBroughtUpAreaChange}
                    >
                      <Option className="philosopher-font" value="">
                        {<span className="philosopher-font">Select Area</span>}
                      </Option>
                      {selectedBroughtUpDistrict &&
                        broughtUpCountries
                          .find(
                            (country) =>
                              country.name === selectedBroughtUpCountry
                          )
                          ?.states.find(
                            (state) => state.name === selectedBroughtUpState
                          )
                          ?.districts.find(
                            (district) =>
                              district.name === selectedBroughtUpDistrict
                          )
                          ?.areas.map((area) => (
                            <Option
                              className="philosopher-font"
                              key={area}
                              value={area}
                            >
                              {area}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>

          {/* Present */}
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label={<span className="philosopher-font">Present</span>}
              >
                <Row gutter={16}>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedPresentCountry}
                      onChange={handlePresentCountryChange}
                    >
                      <Option className="philosopher-font" value="">
                        {
                          <span className="philosopher-font">
                            Select Country
                          </span>
                        }
                      </Option>
                      {presentCountries.map((country) => (
                        <Option
                          className="philosopher-font"
                          key={country.id}
                          value={country.name}
                        >
                          {country.name}
                        </Option>
                      ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedPresentState}
                      onChange={handlePresentStateChange}
                    >
                      <Option className="philosopher-font" value="">
                        {<span className="philosopher-font">Select State</span>}
                      </Option>
                      {selectedPresentCountry &&
                        presentCountries
                          .find(
                            (country) => country.name === selectedPresentCountry
                          )
                          ?.states.map((state) => (
                            <Option
                              className="philosopher-font"
                              key={state.name}
                              value={state.name}
                            >
                              {state.name}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedPresentDistrict}
                      onChange={handlePresentDistrictChange}
                    >
                      <Option className="philosopher-font" value="">
                        {
                          <span className="philosopher-font">
                            Select District
                          </span>
                        }
                      </Option>
                      {selectedPresentState &&
                        presentCountries
                          .find(
                            (country) => country.name === selectedPresentCountry
                          )
                          ?.states.find(
                            (state) => state.name === selectedPresentState
                          )
                          ?.districts.map((district) => (
                            <Option
                              className="philosopher-font"
                              key={district.name}
                              value={district.name}
                            >
                              {district.name}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Select
                      className="philosopher-font"
                      value={selectedPresentArea}
                      onChange={handlePresentAreaChange}
                    >
                      <Option className="philosopher-font" value="">
                        {<span className="philosopher-font">Select Area</span>}
                      </Option>
                      {selectedPresentDistrict &&
                        presentCountries
                          .find(
                            (country) => country.name === selectedPresentCountry
                          )
                          ?.states.find(
                            (state) => state.name === selectedPresentState
                          )
                          ?.districts.find(
                            (district) =>
                              district.name === selectedPresentDistrict
                          )
                          ?.areas.map((area) => (
                            <Option
                              className="philosopher-font"
                              key={area}
                              value={area}
                            >
                              {area}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>

          {/* education and live */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Education</span>}
                name="education"
              >
                <Input type="tags" className="philosopher-font" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Alive?</span>}
                name="isAlive"
                valuePropName="checked"
              >
                <Row>
                  <Col span={12}>
                    <Checkbox checked={isAlive} onChange={handleCheckboxChange}>
                      Yes
                    </Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox
                      checked={!isAlive}
                      onChange={() => setIsAlive(!isAlive)}
                    >
                      No
                    </Checkbox>
                  </Col>
                </Row>
              </Form.Item>
              {!isAlive && (
                <Form.Item
                  label={
                    <span className="philosopher-font">Date of Death</span>
                  }
                  name="dateOfDeath"
                >
                  <DatePicker
                    value={dateOfDeath}
                    onChange={handleDateChange}
                    format="DD/MM/YYYY"
                  />
                </Form.Item>
              )}
            </Col>
          </Row>

          <Row>
            <Col span={13}>
              <Form.Item
                label={
                  <span className="philosopher-font">Celebrity Speciality</span>
                }
                name="celebritySpeciality"
              >
                <Input.TextArea className="philosopher-font" />
              </Form.Item>
            </Col>
          </Row>

          {/* Favourites  */}
          <Row>
            <h4 className="philosopher-font" style={{ fontWeight: "bold" }}>
              Favourites
            </h4>
            <Col span={24}>
              {fields.map((field) => (
                <div key={field.id}>
                  <Row>
                    <Col span={11}>
                      <Form.Item
                        label={
                          <span className="philosopher-font">Favorite</span>
                        }
                      >
                        <Select
                          value={field.favoriteOption}
                          onChange={(value) =>
                            handleOptionChange(value, field.id)
                          }
                          placeholder={
                            <span className="philosopher-font">
                              Select favourites
                            </span>
                          }
                        >
                          <Option className="philosopher-font" value="food">
                            Food
                          </Option>
                          <Option className="philosopher-font" value="actor">
                            Actor
                          </Option>
                          <Option className="philosopher-font" value="actress">
                            Actress
                          </Option>
                          <Option className="philosopher-font" value="singer">
                            Singer
                          </Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={11}>
                      <Form.Item label="">
                        <Input
                          className="philosopher-font"
                          placeholder="Enter your favourites"
                          value={field.selectedOption}
                          onChange={(e) => handleInputChange(e, field.id)}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={2}>
                      <Button
                        style={{ color: "red" }}
                        type="text"
                        onClick={() => handleRemoveField(field.id)}
                        icon={<DeleteOutlined />}
                        className="delete-button"
                      />
                    </Col>
                  </Row>
                </div>
              ))}
              <Form.Item>
                <Button
                  className="philosopher-font"
                  type="primary"
                  onClick={handleAddField}
                >
                  Add Favourites
                </Button>
              </Form.Item>
            </Col>
          </Row>
          {/* Family  */}
          <div>
            <h4 className="philosopher-font" style={{ fontWeight: "bold" }}>
              Family
            </h4>
            {relations.map((relation, index) => (
              <Row gutter={16} key={index}>
                <Col span={8}>
                  <Form.Item
                    label={<span className="philosopher-font">Relation</span>}
                    name={["relations", index, "relationshipType"]}
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="philosopher-font">
                            Please select the relationship type
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Select
                      className="philosopher-font"
                      placeholder="Select relationship type"
                      onChange={(value) =>
                        handleRelationTypeChange(index, value)
                      }
                    >
                      <Select.Option value="father">Father</Select.Option>
                      <Select.Option value="mother">Mother</Select.Option>
                      <Select.Option value="spouse">Spouse</Select.Option>
                      <Select.Option value="guru">Guru</Select.Option>
                      <Select.Option value="sisyan">Sisyan</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label={<span className="philosopher-font">Name</span>}
                    name={["relations", index, "name"]}
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="philosopher-font">
                            Please enter the name
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Input className="philosopher-font" inputMode="tag" />
                  </Form.Item>
                </Col>
                {relation.relationshipType === "spouse" && (
                  <>
                    <Col span={8}>
                      <Form.Item
                        label={
                          <span className="philosopher-font">Marriage</span>
                        }
                        name={["relations", index, "marriageDate"]}
                        rules={[
                          {
                            required: true,
                            message: (
                              <span className="philosopher-font">
                                Please enter marriage date
                              </span>
                            ),
                          },
                        ]}
                      >
                        <Input className="philosopher-font" type="date" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label={
                          <span className="philosopher-font">Divorce</span>
                        }
                        name={["relations", index, "divorce"]}
                        initialValue="no"
                      >
                        <Radio.Group
                          onChange={(e) =>
                            handleDivorceChange(index, e.target.value)
                          }
                        >
                          <Radio value="yes">Yes</Radio>
                          <Radio value="no">No</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    {relation.divorce === "yes" && (
                      <>
                        <Col span={8}>
                          <Form.Item
                            label={
                              <span className="philosopher-font">Date</span>
                            }
                            name={["relations", index, "dateOfDivorce"]}
                            rules={[
                              {
                                required: true,
                                message: (
                                  <span className="philosopher-font">
                                    Please enter date of divorce
                                  </span>
                                ),
                              },
                            ]}
                          >
                            <Input className="philosopher-font" type="date" />
                          </Form.Item>
                        </Col>
                      </>
                    )}

                    <Col span={8}>
                      <Form.Item
                        label={<span className="philosopher-font">Kids</span>}
                        name={["relations", index, "kids"]}
                      >
                        <Input className="philosopher-font" />
                      </Form.Item>
                    </Col>
                  </>
                )}
                <Col span={8}>
                  <Form.Item
                    label={<span className="philosopher-font">Remarks</span>}
                    name={["relations", index, "remarks"]}
                  >
                    <Input.TextArea className="philosopher-font" />
                  </Form.Item>
                </Col>
              </Row>
            ))}
            <Button className="philosopher-font" onClick={handleAddRelation}>
              Add Relation
            </Button>
          </div>
          {/* Social Media Links  */}
          <div style={{ paddingTop: "2%" }}>
            <Form.Item>
              <Checkbox
                style={{ fontSize: "18px", fontWeight: "bold" }}
                className="philosopher-font"
                checked={showSocialMediaLinks}
                onChange={handleCheckboxSocialChange}
              >
                Social Media Links
              </Checkbox>
            </Form.Item>
            {showSocialMediaLinks &&
              socialPlatforms.map((platform, index) => (
                <Space
                  key={index}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Row>
                    <Col md={24}>
                      <Form.Item
                        className="philosopher-font"
                        {...platform}
                        label={
                          <span className="philosopher-font">Platform</span>
                        }
                        name={["socialPlatforms", index, "platform"]}
                        fieldKey={[index, "platform"]}
                        rules={[
                          {
                            required: true,
                            message: (
                              <span className="philosopher-font">
                                Please select platform
                              </span>
                            ),
                          },
                        ]}
                      >
                        <Select
                          className="philosopher-font"
                          placeholder={
                            <span className="philosopher-font">Platform</span>
                          }
                        >
                          <Option className="philosopher-font" value="Facebook">
                            Facebook
                          </Option>
                          <Option className="philosopher-font" value="Twitter">
                            Twitter
                          </Option>
                          <Option
                            className="philosopher-font"
                            value="Instagram"
                          >
                            Instagram
                          </Option>
                          <Option className="philosopher-font" value="Youtube">
                            Youtube
                          </Option>
                          <Option
                            className="philosopher-font"
                            value="Pinterest"
                          >
                            Pinterest
                          </Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Form.Item
                      {...platform}
                      label={<span className="philosopher-font">Link</span>}
                      name={["socialPlatforms", index, "link"]}
                      fieldKey={[index, "link"]}
                      rules={[
                        {
                          required: true,
                          message: (
                            <span className="philosopher-font">
                              Please input the link!
                            </span>
                          ),
                        },
                      ]}
                    >
                      <Input className="philosopher-font" placeholder="Link" />
                    </Form.Item>

                    {index === socialPlatforms.length - 1 && (
                      <DeleteOutlined
                        style={{ color: "red", marginBottom: "20px" }}
                        onClick={() =>
                          setSocialPlatforms(socialPlatforms.slice(0, -1))
                        }
                      />
                    )}
                  </Row>
                </Space>
              ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={handleAddPlatform}
                icon={<PlusOutlined />}
              >
                Add More
              </Button>
            </Form.Item>
          </div>

          {/*  cases  */}
          <div style={{ paddingTop: "2%" }}>
            <h4 className="philosopher-font" style={{ fontWeight: "bold" }}>
              Criminal Cases
            </h4>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={<span className="philosopher-font">Case Name</span>}
                  name="caseName"
                >
                  <Input className="philosopher-font" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={
                    <span className="philosopher-font">Case Description</span>
                  }
                  name="description"
                >
                  <Input.TextArea className="philosopher-font" />
                </Form.Item>
              </Col>
            </Row>
          </div>

          {/* Bio  */}
          <Row>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Bio</span>}
                name="bio"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="philosopher-font">
                        Please enter the celebrity bio
                      </span>
                    ),
                  },
                ]}
              >
                <Input.TextArea className="philosopher-font" />
              </Form.Item>
            </Col>
          </Row>

          <Row
            gutter={16}
            style={{
              paddingTop: "3%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col span={12}>
              <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                <div style={{}}>
                  <Button
                    className="philosopher-font"
                    type="primary"
                    htmlType="submit"
                    style={{
                      margin: "0 auto",
                      backgroundColor: "#022135",
                      textAlign: "center",
                    }}
                  >
                    Add Celebrity
                  </Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default AddCelebrityForm;
