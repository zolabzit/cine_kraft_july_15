import React, { useState } from "react";
import { Button, Card, Col, Input, Modal, Row, Select, Form} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import "../../../Css/Admin.css";

const { Option } = Select;

const eventTypes = [
  "Award Show",
  "Music Concert",
  "Audio Launch",
  "Pre Release Event",
];

const Add = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    type: null,
    name: "",
    date: "",
    location: "",
    // ... (other content elements)
  });

  const [editEvent, setEditEvent] = useState({});
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const showEditModal = (event) => {
    setEditEvent(event);
    setIsEditModalVisible(true);
  };

  const handleEdit = () => {
    const updatedEvents = [...events];
    const index = updatedEvents.findIndex((event) => event === editEvent);
    updatedEvents[index] = editEvent;
    setEvents(updatedEvents);
    setIsEditModalVisible(false);
  };

  const handleDelete = (eventToDelete) => {
    const updatedEvents = events.filter((event) => event !== eventToDelete);
    setEvents(updatedEvents);
  };

  const handleAddEvent = () => {
    if (
      newEvent.type &&
      newEvent.name &&
      newEvent.date &&
      newEvent.location
      // Add conditions for other required content elements here
    ) {
      // Check if the type is "Award Show" and all award show specific fields are filled
      if (
        newEvent.type === "Award Show" &&
        !inputFields.some((field) => !newEvent[field.key])
      ) {
        setEvents([...events, newEvent]);
        setNewEvent({
          type: null,
          name: "",
          date: "",
          location: "",
          // Reset other content elements to default values here
        });
      } else if (
        // Check if the type is "Music Concert" and all music concert specific fields are filled
        newEvent.type === "Music Concert" &&
        !musicConcertFields.some((field) => !newEvent[field.key])
      ) {
        setEvents([...events, newEvent]);
        setNewEvent({
          type: null,
          name: "",
          date: "",
          location: "",
          // Reset other content elements to default values here
        });
      } else if (
        // Check if the type is "Audio Launch" and all audio launch specific fields are filled
        newEvent.type === "Audio Launch" &&
        !AudioLaunchFields.some((field) => !newEvent[field.key])
      ) {
        setEvents([...events, newEvent]);
        setNewEvent({
          type: null,
          name: "",
          date: "",
          location: "",
          // Reset other content elements to default values here
        });
      } else if (
        // Check if the type is "Pre Release Event" and all pre-release event specific fields are filled
        newEvent.type === "Pre Release Event" &&
        !PreReleaseEventsFields.some((field) => !newEvent[field.key])
      ) {
        setEvents([...events, newEvent]);
        setNewEvent({
          type: null,
          name: "",
          date: "",
          location: "",
          // Reset other content elements to default values here
        });
      } else {
        // Display an error message or handle the case where required fields are missing
        alert(
          "Please fill in all required fields for the selected event type."
        );
      }
    } else {
      // Display an error message or handle the case where required fields are missing
      alert("Please fill in all required fields.");
    }
  };

  const [selectedBornInCountry, setSelectedBornInCountry] = useState('');
  const [selectedBornInState, setSelectedBornInState] = useState('');
  const [selectedBornInDistrict, setSelectedBornInDistrict] = useState('');
  const [selectedBornInArea, setSelectedBornInArea] = useState('');

  const handleBornInCountryChange = (value) => {
    setSelectedBornInCountry(value);
    // Reset state, district, and area when country changes
    setSelectedBornInState('');
    setSelectedBornInDistrict('');
    setSelectedBornInArea('');
  };
  
  const handleBornInStateChange = (value) => {
    setSelectedBornInState(value);
    // Reset district and area when state changes
    setSelectedBornInDistrict('');
    setSelectedBornInArea('');
  };
  
  const handleBornInDistrictChange = (value) => {
    setSelectedBornInDistrict(value);
    // Reset area when district changes
    setSelectedBornInArea('');
  };
  
  const handleBornInAreaChange = (value) => {
    setSelectedBornInArea(value);
  };

  const [bornInCountries, setBornInCountries] = useState([
    { 
      id: 1, 
      name: 'India', 
      states: [
        { 
          name: 'Tamil Nadu', 
          districts: [
            { 
              name: 'Chennai', 
              areas: ['Saidapet', 'Nungambakkam', 'Velachery'] 
            }, 
            { 
              name: 'Tutucorin', 
              areas: ['Kalugumalai', 'Vilathikulam', 'Srivaikundam'] 
            }, 
            { 
              name: 'Tenkasi', 
              areas: ['Kadayanallur', 'Kadayanallur', 'Kadayanallur'] 
            }
          ] 
        }, 
        { 
          name: 'Karanataka', 
          districts: [
            { 
              name: 'Bengaluru', 
              areas: ['Koramangala', 'Majestic', 'Kudlu Gate'] 
            }, 
            { 
              name: 'Anekal', 
              areas: ['Byagadadenahalli', 'Hebbagodi', 'Jigani'] 
            }, 
            { 
              name: 'Mysuru', 
              areas: ['Tirumakudalu', 'Nanjangud', 'Hunsur'] 
            }
          ] 
        }
      ] 
    },
    { 
      id: 2, 
      name: 'United States', 
      states: [
        { 
          name: 'California', 
          districts: [
            { 
              name: 'Los Angeles County', 
              areas: ['Area19', 'Area20', 'Area21'] 
            }, 
            { 
              name: 'San Francisco County', 
              areas: ['Area22', 'Area23', 'Area24'] 
            }, 
            { 
              name: 'San Diego County', 
              areas: ['Area25', 'Area26', 'Area27'] 
            }
          ] 
        }, 
        { 
          name: 'Texas', 
          districts: [
            { 
              name: 'Harris County', 
              areas: ['Area28', 'Area29', 'Area30'] 
            }, 
            { 
              name: 'Dallas County', 
              areas: ['Area31', 'Area32', 'Area33'] 
            }, 
            { 
              name: 'Travis County', 
              areas: ['Area34', 'Area35', 'Area36'] 
            }
          ] 
        }, 
        { 
          name: 'New York', 
          districts: [
            { 
              name: 'New York County', 
              areas: ['Area37', 'Area38', 'Area39'] 
            }, 
            { 
              name: 'Kings County', 
              areas: ['Area40', 'Area41', 'Area42'] 
            }, 
            { 
              name: 'Queens County', 
              areas: ['Area43', 'Area44', 'Area45'] 
            }
          ] 
        }
      ]
    }
    // Add more countries with their states, districts, and areas here
  ]);

  const musicConcertFields = [
    { key: "musicDirector", placeholder: "Music Director" },
    { key: "artist", placeholder: "Artist/Band" },
    { key: "genre", placeholder: "Genre" },
    { key: "ticketPrice", placeholder: "Ticket Price" },
    { key: "Host", placeholder: "Host" },
    { key: "eventOrganizers", placeholder: "Event Organizers" },
    { key: "contactInfo", placeholder: "Contact Information" },
    { key: "foodAndBeverages", placeholder: "Food & Beverages" },
    { key: "description", placeholder: "Description" },
  ];

  const AudioLaunchFields = [
    { key: "movieName", placeholder: "Movie Name" },
    { key: "movieCast", placeholder: "Movie Cast" },
    { key: "movieCrew", placeholder: "Movie Crew" },
    { key: "musicDirector", placeholder: "Music Director" },
    { key: "artistCrew", placeholder: "Artist/Band" },
    { key: "production", placeholder: "Production" },
    { key: "specialGuest", placeholder: "SpecialGuest" },
    { key: "performance", placeholder: "Performances" },
    { key: "specialMoments", placeholder: "SpecialMoments" },
    { key: "broadCasting", placeholder: "Broadcasting" },
    { key: "ticketPrice", placeholder: "Ticket Price" },
    { key: "Host", placeholder: "Host" },
    { key: "eventOrganizers", placeholder: "Event Organizers" },
    { key: "contactInfo", placeholder: "Contact Information" },
    { key: "foodAndBeverages", placeholder: "Food & Beverages" },
    { key: "description", placeholder: "Description" },
  ];

  const PreReleaseEventsFields = [
    { key: "movieName", placeholder: "Movie Name" },
    { key: "movieCast", placeholder: "Movie Cast" },
    { key: "movieCrew", placeholder: "Movie Crew" },
    { key: "musicDirector", placeholder: "Music Director" },
    { key: "production", placeholder: "Production" },
    { key: "specialGuest", placeholder: "SpecialGuest" },
    { key: "Host", placeholder: "Host" },
    { key: "eventOrganizers", placeholder: "Event Organizers" },
    { key: "contactInfo", placeholder: "Contact Information" },
  ];

  const inputFields = [
    { key: "host", placeholder: "Host" },
    { key: "categories", placeholder: "Categories" },
    { key: "nominees", placeholder: "Nominees" },
    { key: "winners", placeholder: "Winners" },
    { key: "performances", placeholder: "Performances" },
    { key: "specialMoments", placeholder: "Special Moments" },
    { key: "organizers", placeholder: "Organizers" },
    { key: "sponsors", placeholder: "Sponsors" },
    { key: "broadcastInfo", placeholder: "Broadcast Info" },
    { key: "images", placeholder: "Images" },
    { key: "previousEditions", placeholder: "Previous Editions" },
    { key: "socialMediaLinks", placeholder: "Social Media Links" },
  ];

  const renderAwardShowFields = () => {
    return (
      <div>
        <Row>
          {inputFields.map((field) => (
            <Col lg={8} style={{ padding: "10px" }}>
              <Input
              className="philosopher-font" 
                key={field.key}
                placeholder={field.placeholder}
                value={newEvent[field.key]}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, [field.key]: e.target.value })
                }
                style={{ marginBottom: "10px" }}
              />
            </Col>
          ))}
        </Row>
      <div>
      <Form>
        <Row gutter={16}>
        <Col span={24}>
     
        <Form.Item  >
          <Row gutter={16}>
            <Col span={6}>
            <Select className="philosopher-font" value={selectedBornInCountry} onChange={handleBornInCountryChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select Country</span>}</Option>
  {bornInCountries.map(country => (
    <Option className="philosopher-font" key={country.id} value={country.name}>{country.name}</Option>
  ))}
</Select>
            </Col>
            <Col span={6}>
            <Select className="philosopher-font" value={selectedBornInState} onChange={handleBornInStateChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select State</span>}</Option>
  {selectedBornInCountry && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.map(state => (
    <Option className="philosopher-font" key={state.name} value={state.name}>{state.name}</Option>
  ))}
</Select>
              </Col>
              <Col span={6}>
              <Select className="philosopher-font" value={selectedBornInDistrict} onChange={handleBornInDistrictChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select District</span>}</Option>
  {selectedBornInState && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.find(state => state.name === selectedBornInState)?.districts.map(district => (
    <Option className="philosopher-font" key={district.name} value={district.name}>{district.name}</Option>
  ))}
</Select>
              </Col>
              <Col span={6}>
              <Select className="philosopher-font" value={selectedBornInArea} onChange={handleBornInAreaChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select Area</span>}</Option>
  {selectedBornInDistrict && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.find(state => state.name === selectedBornInState)?.districts.find(district => district.name === selectedBornInDistrict)?.areas.map(area => (
    <Option className="philosopher-font" key={area} value={area}>{area}</Option>
  ))}
</Select>
              </Col>
          </Row>
        </Form.Item>
        
        </Col>
       </Row>
       <Row>
       <Col span={12}>
       <Form.Item
        label={<span className="philosopher-font">Address</span>}
        name="address"
        rules={[
          { required: true, message: <span className="philosopher-font">Please enter the celebrity bio</span> },
        ]}
      >
        <Input.TextArea className="philosopher-font"/>
      </Form.Item>
       </Col>
       </Row>
       </Form>
      </div>
      </div>
    );
  };

  const renderMusicConcertFields = () => {
    return (
      <div>
        <Row>
          {musicConcertFields.map((field) => (
            <Col lg={8} style={{ padding: "10px" }}>
              <Input
              className="philosopher-font"
                key={field.key}
                placeholder={field.placeholder}
                value={newEvent[field.key]}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, [field.key]: e.target.value })
                }
                style={{ marginBottom: "10px" }}
              />
            </Col>
          ))}
        </Row>
        <div>
      <Form>
        <Row gutter={16}>
        <Col span={24}>
     
        <Form.Item  >
          <Row gutter={16}>
            <Col span={6}>
            <Select className="philosopher-font" value={selectedBornInCountry} onChange={handleBornInCountryChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select Country</span>}</Option>
  {bornInCountries.map(country => (
    <Option className="philosopher-font" key={country.id} value={country.name}>{country.name}</Option>
  ))}
</Select>
            </Col>
            <Col span={6}>
            <Select className="philosopher-font" value={selectedBornInState} onChange={handleBornInStateChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select State</span>}</Option>
  {selectedBornInCountry && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.map(state => (
    <Option className="philosopher-font" key={state.name} value={state.name}>{state.name}</Option>
  ))}
</Select>
              </Col>
              <Col span={6}>
              <Select className="philosopher-font" value={selectedBornInDistrict} onChange={handleBornInDistrictChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select District</span>}</Option>
  {selectedBornInState && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.find(state => state.name === selectedBornInState)?.districts.map(district => (
    <Option className="philosopher-font" key={district.name} value={district.name}>{district.name}</Option>
  ))}
</Select>
              </Col>
              <Col span={6}>
              <Select className="philosopher-font" value={selectedBornInArea} onChange={handleBornInAreaChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select Area</span>}</Option>
  {selectedBornInDistrict && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.find(state => state.name === selectedBornInState)?.districts.find(district => district.name === selectedBornInDistrict)?.areas.map(area => (
    <Option className="philosopher-font" key={area} value={area}>{area}</Option>
  ))}
</Select>
              </Col>
          </Row>
        </Form.Item>
        
        </Col>
       </Row>
       <Row>
       <Col span={12}>
       <Form.Item
        label={<span className="philosopher-font">Address</span>}
        name="address"
        rules={[
          { required: true, message: <span className="philosopher-font">Please enter the celebrity bio</span> },
        ]}
      >
        <Input.TextArea className="philosopher-font"/>
      </Form.Item>
       </Col>
       </Row>
       </Form>
      </div>
      </div>
    );
  };

  const renderAudioLaunchFields = () => {
    return (
      <div>
        <Row>
          {AudioLaunchFields.map((field) => (
            <Col lg={8} style={{ padding: "10px" }}>
              <Input
              className="philosopher-font"
                key={field.key}
                placeholder={field.placeholder}
                value={newEvent[field.key]}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, [field.key]: e.target.value })
                }
                style={{ marginBottom: "10px" }}
              />
            </Col>
          ))}
        </Row>
        <div>
      <Form>
        <Row gutter={16}>
        <Col span={24}>
     
        <Form.Item  >
          <Row gutter={16}>
            <Col span={6}>
            <Select className="philosopher-font" value={selectedBornInCountry} onChange={handleBornInCountryChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select Country</span>}</Option>
  {bornInCountries.map(country => (
    <Option className="philosopher-font" key={country.id} value={country.name}>{country.name}</Option>
  ))}
</Select>
            </Col>
            <Col span={6}>
            <Select className="philosopher-font" value={selectedBornInState} onChange={handleBornInStateChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select State</span>}</Option>
  {selectedBornInCountry && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.map(state => (
    <Option className="philosopher-font" key={state.name} value={state.name}>{state.name}</Option>
  ))}
</Select>
              </Col>
              <Col span={6}>
              <Select className="philosopher-font" value={selectedBornInDistrict} onChange={handleBornInDistrictChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select District</span>}</Option>
  {selectedBornInState && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.find(state => state.name === selectedBornInState)?.districts.map(district => (
    <Option className="philosopher-font" key={district.name} value={district.name}>{district.name}</Option>
  ))}
</Select>
              </Col>
              <Col span={6}>
              <Select className="philosopher-font" value={selectedBornInArea} onChange={handleBornInAreaChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select Area</span>}</Option>
  {selectedBornInDistrict && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.find(state => state.name === selectedBornInState)?.districts.find(district => district.name === selectedBornInDistrict)?.areas.map(area => (
    <Option className="philosopher-font" key={area} value={area}>{area}</Option>
  ))}
</Select>
              </Col>
          </Row>
        </Form.Item>
        
        </Col>
       </Row>
       <Row>
       <Col span={12}>
       <Form.Item
        label={<span className="philosopher-font">Address</span>}
        name="address"
        rules={[
          { required: true, message: <span className="philosopher-font">Please enter the celebrity bio</span> },
        ]}
      >
        <Input.TextArea className="philosopher-font"/>
      </Form.Item>
       </Col>
       </Row>
       </Form>
      </div>
      </div>
    );
  };

  const renderPreReleaseEventsFields = () => {
    return (
      <div>
        <Row>
          {PreReleaseEventsFields.map((field) => (
            <Col lg={8} style={{ padding: "10px" }}>
              <Input
              className="philosopher-font"
                key={field.key}
                placeholder={field.placeholder}
                value={newEvent[field.key]}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, [field.key]: e.target.value })
                }
                style={{ marginBottom: "10px" }}
              />
            </Col>
          ))}
        </Row>
        <div>
      <Form>
        <Row gutter={16}>
        <Col span={24}>
     
        <Form.Item  >
          <Row gutter={16}>
            <Col span={6}>
            <Select className="philosopher-font" value={selectedBornInCountry} onChange={handleBornInCountryChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select Country</span>}</Option>
  {bornInCountries.map(country => (
    <Option className="philosopher-font" key={country.id} value={country.name}>{country.name}</Option>
  ))}
</Select>
            </Col>
            <Col span={6}>
            <Select className="philosopher-font" value={selectedBornInState} onChange={handleBornInStateChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select State</span>}</Option>
  {selectedBornInCountry && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.map(state => (
    <Option className="philosopher-font" key={state.name} value={state.name}>{state.name}</Option>
  ))}
</Select>
              </Col>
              <Col span={6}>
              <Select className="philosopher-font" value={selectedBornInDistrict} onChange={handleBornInDistrictChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select District</span>}</Option>
  {selectedBornInState && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.find(state => state.name === selectedBornInState)?.districts.map(district => (
    <Option className="philosopher-font" key={district.name} value={district.name}>{district.name}</Option>
  ))}
</Select>
              </Col>
              <Col span={6}>
              <Select className="philosopher-font" value={selectedBornInArea} onChange={handleBornInAreaChange}>
  <Option className="philosopher-font" value="">{<span className="philosopher-font">Select Area</span>}</Option>
  {selectedBornInDistrict && bornInCountries.find(country => country.name === selectedBornInCountry)?.states.find(state => state.name === selectedBornInState)?.districts.find(district => district.name === selectedBornInDistrict)?.areas.map(area => (
    <Option className="philosopher-font" key={area} value={area}>{area}</Option>
  ))}
</Select>
              </Col>
          </Row>
        </Form.Item>
        
        </Col>
       </Row>
       <Row>
       <Col span={12}>
       <Form.Item
        label={<span className="philosopher-font">Address</span>}
        name="address"
        rules={[
          { required: true, message: <span className="philosopher-font">Please enter the celebrity bio</span> },
        ]}
      >
        <Input.TextArea className="philosopher-font"/>
      </Form.Item>
       </Col>
       </Row>
       </Form>
      </div>
      </div>
    );
  };

  return (
    <Container>
      <div>
        <h4 className="mt-3 mb-3">Event Manager</h4>
        <hr />

        <Row gutter={16} style={{ paddingTop: "3%", textAlign: "center" }}>
          <Col>
            <Card
              title="Add New Event"
              className="philosopher-font"
              style={{}}
              //   boxShadow: "2px 3px 3px 4px grey"
            >
              <Row>
                <Col  className="philosopher-font">
                  <Select
                  className="philosopher-font"
                    style={{ marginBottom: "10px", width: "100%", fontFamily:"'Philosopher', sans-serif"}}
                    placeholder="Select Event Type"
                    onChange={(value) =>
                      setNewEvent({ ...newEvent, type: value })
                    }
                    value={newEvent.type}
                  >
                    {eventTypes.map((eventType) => (
                      <Option className="philosopher-font" key={eventType} value={eventType}>
                        {eventType}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>

              <Row>
                {["name", "date", "location"].map((field) => (
                  <Col lg={8} style={{ padding: "10px" }}>
                    <Input
                    className="philosopher-font"
                      key={field}
                      type={field === "date" ? "date" : "text"}
                      placeholder={`Event ${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }`}
                      value={newEvent[field]}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, [field]: e.target.value })
                      }
                      style={{ marginBottom: "10px", width: "100%", fontFamily:"'Philosopher', sans-serif" }}
                    />
                  </Col>
                ))}
              </Row>
              {/* Conditionally render Award Show specific fields */}
              {newEvent.type === "Award Show" && renderAwardShowFields()}
              {/* Conditionally render Music Concert specific fields */}
              {newEvent.type === "Music Concert" && renderMusicConcertFields()}
              {/* Conditionally render Audio Launch specific fields */}
              {newEvent.type === "Audio Launch" && renderAudioLaunchFields()}
              {/* Conditionally render Pre Release Events specific fields */}
              {newEvent.type === "Pre Release Event" &&
                renderPreReleaseEventsFields()}

              <Button className="philosopher-font" type="primary" danger onClick={handleAddEvent}>
                Add
              </Button>
            </Card>
          </Col>
          {events.map((event, index) => (
            <Col span={8} key={index} style={{ paddingTop: "3%" }}>
              <Card
              className="philosopher-font"
                title={event.type}
                extra={event.date}
                style={{ margin: "10px", boxShadow: "2px 5px 3px 3px grey" }}
                actions={[
                  <Button className="philosopher-font"
                    type="primary"
                    danger
                    icon={<EditOutlined />}
                    onClick={() => showEditModal(event)}
                  >
                    Edit
                  </Button>,
                  <Button className="philosopher-font"
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(event)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <p>
                  <strong>Name:</strong> {event.name}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
        <Modal className="philosopher-font"
          title="Edit Event"
          visible={isEditModalVisible}
          onOk={handleEdit}
          onCancel={() => setIsEditModalVisible(false)}
        >
          <Select className="philosopher-font"
            style={{ marginBottom: "10px", width: "100%" }}
            placeholder="Select Event Type"
            onChange={(value) => setEditEvent({ ...editEvent, type: value })}
            value={editEvent.type}
          >
            {eventTypes.map((eventType) => (
              <Option key={eventType} value={eventType}>
                {eventType}
              </Option>
            ))}
          </Select>
          <Input
          className="philosopher-font"
            placeholder="Event Name"
            value={editEvent.name}
            onChange={(e) =>
              setEditEvent({ ...editEvent, name: e.target.value })
            }
            style={{ marginBottom: "10px" }}
          />
          <Input
          className="philosopher-font"
            type="date"
            placeholder="Event Date"
            value={editEvent.date}
            onChange={(e) =>
              setEditEvent({ ...editEvent, date: e.target.value })
            }
            style={{ marginBottom: "10px" }}
          />
          <Input
            placeholder="Event Location"
            value={editEvent.location}
            onChange={(e) =>
              setEditEvent({ ...editEvent, location: e.target.value })
            }
            style={{ marginBottom: "10px" }}
          />
          {/* Conditionally render Award Show specific fields in Edit Modal */}
          {editEvent.type === "Award Show" && renderAwardShowFields()}
        </Modal>
      </div>
    </Container>
  );
};

export default Add;