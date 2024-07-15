import React, { useState } from "react";
import { Form, Input, Button, Select, Upload, Col, Row, Rate } from "antd";
import { Container } from "react-bootstrap";
import { InboxOutlined, DeleteOutlined } from "@ant-design/icons";
import "../../../Css/Admin.css";

const { Option } = Select;

const AddTheatres = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [areas, setAreas] = useState([]);
  const [cities, setCities] = useState([]); 
 



  const handleFormSubmit = (values) => {
    // Include the image files in the form data
    const formData = new FormData();
    imageFiles.forEach((file, index) => {
      formData.append(`image${index}`, file);
    });
    for (const key in values) {
      formData.append(key, values[key]);
    }

    // Handle form submission with formData
    onSubmit(formData);
    form.resetFields();
  };

  const customRequest = ({ file, onSuccess, onError }) => {
    // You can handle the file upload here, for example, using Axios or Fetch.
    // Once the upload is successful, call onSuccess, and if there's an error, call onError.
    // Here, we simulate a successful upload.
    setTimeout(() => {
      onSuccess();
      setImageFiles([...imageFiles, file]); // Add the uploaded file to the imageFiles array
      setUploadedImages([
        ...uploadedImages,
        {
          file,
          url: URL.createObjectURL(file),
        },
      ]); // Set the uploaded images for rendering
    }, 1000);
  };

  const handleAreaChange = (value) => {
    // Your logic to handle selected area
  };

  const removeImage = (fileToRemove) => {
    const updatedFiles = imageFiles.filter((file) => file !== fileToRemove);
    const updatedImages = uploadedImages.filter(
      (image) => image.file !== fileToRemove
    );
    setImageFiles(updatedFiles);
    setUploadedImages(updatedImages);
  };

  const handleCityChange = (value) => {
    // Update the selected city
    setSelectedCity(value);
    switch (value) {
      case "Bengaluru":
        setAreas(["Majestic", "Silk Board", "Koramangala"]); // Example areas for Bengaluru
        break;
      case "Chennai":
        setAreas(["Saidapet", "Nungambakkam", "Guindy","Velacherry", "Vadapalani"]); // Example areas for Chennai
        break;
      // Add cases for other cities as needed
      default:
        setAreas([]);
        break;
    }
  };


 
  // Define an array of field configurations
  const formFields = [
    {
      label: <span className="philosopher-font">Select</span>,
      name: "type",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please select tv show type</span>,
        },
      ],
      component: (
        <Select mode="multiple"
          className="philosopher-font"
          placeholder={<span className="philosopher-font">Select IMAX / 2D / 3D</span>}
        >
          <Option className="philosopher-font" value="IMAX">
            IMAX
          </Option>
          <Option className="philosopher-font" value="2D">
            2D
          </Option>
          <Option className="philosopher-font" value="3D">
            3D
          </Option>
        </Select>
      ),
    },    
    {
      label: <span className="philosopher-font">Theatre Name</span>,
      name: "tvShowTitle",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please enter the theatre name</span>,
        },
      ],
      component: <Input className="philosopher-font"/>,
    },
    {
      label: <span className="philosopher-font">Country</span>,
      name: "country",
      rules: [
        {
          required: true,
          message: "",
        },
      ],
      component: <Input disabled placeholder="India" className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">State</span>,
      name: "state",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please select state</span>,
        },
      ],
      component: (
        <Select
          className="philosopher-font"
          placeholder={<span style={{ fontFamily: "'Philosopher', sans-serif" }}>Select State</span>}
          onChange={(value) => handleStateChange(value)}
        >
          <Option className="philosopher-font" value="Karnataka">
            Karnataka
          </Option>
          <Option className="philosopher-font" value="TamilNadu">
            TamilNadu
          </Option>
          <Option className="philosopher-font" value="Kerala">
            Kerala
          </Option>
          <Option className="philosopher-font" value="Telangana">
            Telangana
          </Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">City</span>,
      name: "city",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please select city</span>,
        },
      ],
      component: (
        <Select
          className="philosopher-font"
          placeholder={<span style={{ fontFamily: "'Philosopher', sans-serif" }}>Select City</span>}
          onChange={handleCityChange} // Add onChange event to handle city selection
          value={selectedCity} // Bind selectedCity to the value prop to control selection
        >
          {cities.map((city) => (
            <Option className="philosopher-font" key={city} value={city}>
              {city}
            </Option>
          ))}
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Area</span>,
      name: "area",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please select area</span>,
        },
      ],
      component: (
        <Select
          className="philosopher-font"
          placeholder={<span style={{ fontFamily: "'Philosopher', sans-serif" }}>Select Area</span>}
          value={selectedArea} // Bind selectedArea to the value prop to control selection
        >
          {areas.map((area) => (
            <Option className="philosopher-font" key={area} value={area}>
              {area}
            </Option>
          ))}
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Address</span>,
      name: "address",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please enter theatre address</span>,
        },
      ],
      component: <Input.TextArea placeholder="Building No, Street, Area" className="philosopher-font"/>,
    },
    {
      label: <span className="philosopher-font">Capacity</span>,
      name: "capacity",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please enter the capacity</span>,
        },
      ],
      component: <Input placeholder="e.g., 200" className="philosopher-font"/>,
    },
    {
      label: <span className="philosopher-font">Ticket Price</span>,
      name: "ticketPrice",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please select ticket price</span>,
        },
      ],
      component: (
        <Select className="philosopher-font" mode="multiple" placeholder="Select Ticket Price(s)">
          <Option className="philosopher-font" value="₹100">₹100</Option>
          <Option className="philosopher-font" value="₹150">₹150</Option>
          <Option className="philosopher-font" value="₹200">₹200</Option>
          <Option className="philosopher-font" value="₹250">₹250</Option>
          <Option className="philosopher-font" value="₹300">₹300</Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Show Times</span>,
      name: "showTimes",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please select show times</span>,
        },
      ],
      component: (
        <Select className="philosopher-font" mode="multiple" placeholder="Select Show Time(s)">
          <Option className="philosopher-font" value="10:00Am">10:00Am</Option>
          <Option className="philosopher-font" value="01:00Pm">01:00Pm</Option>
          <Option className="philosopher-font" value="04:00Pm">04:00Pm</Option>
          <Option className="philosopher-font" value="07:00Pm">07:00Pm</Option>
          <Option className="philosopher-font" value="10:00Pm">10:00Pm</Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Facilities</span>,
      name: "facilities",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please select facilities</span>,
        },
      ],
      component: (
        <Select className="philosopher-font" mode="multiple" placeholder="Select facilitie(s)">
          <Option className="philosopher-font" value="Air Contioning">Air Contioning</Option>
          <Option className="philosopher-font" value="Digital Projection">Digital Projection</Option>
          <Option className="philosopher-font" value="Reclining Seats">Reclining Seats</Option>
          <Option className="philosopher-font" value="Premium or VIP Seating">Premium or VIP Seating</Option>
          <Option className="philosopher-font" value="Online and Mobile App Ticket Purchases">
            Online and Mobile App Ticket Purchases
          </Option>
          <Option className="philosopher-font" value="On-Site Parking Facilities">
            On-Site Parking Facilities
          </Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Amenities</span>,
      name: "amenities",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please select amenities</span>,
        },
      ],
      component: (
        <Select className="philosopher-font" mode="multiple" placeholder="Select amenitie(s)">
          <Option className="philosopher-font" value="Food & Beverages">Food & Beverages</Option>
          <Option className="philosopher-font" value="In-Seat Food and Beverage Service">
            In-Seat Food and Beverage Service
          </Option>
          <Option className="philosopher-font" value="Game Arcades">Game Arcades</Option>
          <Option className="philosopher-font" value="Wi-Fi Access">Wi-Fi Access</Option>
          <Option className="philosopher-font" value="Security and Staff">Security and Staff</Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Description</span>,
      name: "description",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please enter about theatre</span>,
        },
      ],
      component: <Input.TextArea className="philosopher-font"/>,
    },
    {
      label: <span className="philosopher-font">Images</span>,
      name: "images",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please upload at least one image</span>,
        },
      ],
      component: (
        <Upload
        className="philosopher-font"
          customRequest={customRequest}
          accept=".jpg, .jpeg, .png, .gif"
          multiple
          showUploadList={false}
        >
          <Button className="philosopher-font" icon={<InboxOutlined />}>
            Click or drag files to upload
          </Button>
        </Upload>
      ),
    },
    {
      label: <span className="philosopher-font">Rating</span>,
      name: "rating",
      rules: [
        {
          required: true,
          message: <span className="philosopher-font">Please rate the web series</span>,
        },
      ],
      component: <Rate className="philosopher-font"/>,
    },

    // Add more field configurations here
  ];

  const handleStateChange = (value) => {
    // Update the available cities based on the selected state
    switch (value) {
      case "Karnataka":
        setCities([
          "Bengaluru",
          "Mangaluru",
          "Udupi" /* Add more Karnataka cities here */,
        ]);
        break;
      case "TamilNadu":
        setCities([
          "Chennai",
          "Tutucorin",
          "Kanyakumari",
          "Coimbatore"   
          /* Add more Tamil Nadu cities here */,
        ]);
        break;
      case "Kerala":
        setCities([
          "Thiruvananthapuram",
          "Kochi",
          "Kollam"
          /* Add more Kerala cities here */,
        ]);
        break;
        case "Telangana":
        setCities([
          "Hyderabad",
          "Medak",
          "Warangal",
          "Bhuvanagiri"   
          /* Add more Tamil Nadu cities here */,
        ]);
        break;
      default:
        setCities([]); // Clear the city options if no state is selected
        break;
    }
  };


  return (
    <div>
      <Container>
        <h4 className="mt-3 mb-3">Add Theatres</h4>
        <hr />

        <Form
          style={{ paddingTop: "3%" }}
          form={form}
          onFinish={handleFormSubmit}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Row gutter={16}>
            <Col md={12} lg={12}>
              {formFields.slice(0, 7).map((field) => (
                <Form.Item
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  rules={field.rules}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  {field.component}
                </Form.Item>
              ))}
            </Col>
            <Col md={12} lg={12}>
              {formFields.slice(7).map((field) => (
                <Form.Item
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  rules={field.rules}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  {field.component}
                </Form.Item>
              ))}
            </Col>
          </Row>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 8,
              style: { textAlign: "center", paddingTop: "3%" },
            }}
          >
            <Button type="primary" danger htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div className="picture-wall">
          {uploadedImages.map((image, index) => (
            <div key={index} className="picture-wall-item">
              <img
                src={image.url}
                alt={`Uploaded ${index}`}
                className="picture-wall-image-small"
              />
              <Button
                icon={<DeleteOutlined />}
                onClick={() => removeImage(image.file)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AddTheatres;
