import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Col,
  Row,
  Rate,
  Space,
  Checkbox,
  Tabs,
} from "antd";
import { InboxOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import "../../../Css/Admin.css";
import axios from "axios";

const { Option } = Select;
const { TabPane } = Tabs;

const AddProductionHouse = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedLanguageType, setSelectedLanguageType] = useState(null);
  const [showSocialMediaLinks, setShowSocialMediaLinks] = useState(true);
  const [socialPlatforms, setSocialPlatforms] = useState([{ platform: "", link: "" }]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [areas, setAreas] = useState([]);
  const [cities, setCities] = useState([]);

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post("/api/movies", values);
      if (response.status === 200) {
        console.log("Production House successfully:", response.data);
      } else {
        console.error("Failed to save movie:", response.data);
      }
    } catch (error) {
      console.error("Error saving Production House:", error);
    }
    const formData = new FormData();
    imageFiles.forEach((file, index) => {
      formData.append(`image${index}`, file);
    });
    for (const key in values) {
      formData.append(key, values[key]);
    }
    onSubmit(formData);
    form.resetFields();
  };

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess();
      setImageFiles([...imageFiles, file]);
      setUploadedImages([...uploadedImages, { file, url: URL.createObjectURL(file) }]);
    }, 1000);
  };

  const removeImage = (fileToRemove) => {
    const updatedFiles = imageFiles.filter((file) => file !== fileToRemove);  
    const updatedImages = uploadedImages.filter((image) => image.file !== fileToRemove);
    setImageFiles(updatedFiles);
    setUploadedImages(updatedImages);
  };

  const handleLanguageTypeChange = (value) => {
    setSelectedLanguageType(value);
    form.setFieldsValue({ languages: [] });
  };

  const handleCheckboxSocialChange = (e) => {
    setShowSocialMediaLinks(e.target.checked);
  };

  const handleAddPlatform = () => {
    setSocialPlatforms([...socialPlatforms, { platform: "", link: "" }]);
  };

  const handleStateChange = (value) => {
    switch (value) {
      case "Karnataka":
        setCities(["Bengaluru", "Mangaluru", "Udupi"]);
        break;
      case "TamilNadu":
        setCities(["Chennai", "Tutucorin", "Kanyakumari", "Coimbatore"]);
        break;
      case "Kerala":
        setCities(["Thiruvananthapuram", "Kochi", "Kollam"]);
        break;
      case "Telangana":
        setCities(["Hyderabad", "Medak", "Warangal", "Bhuvanagiri"]);
        break;
      default:
        setCities([]);
        break;
    }
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
    switch (value) {
      case "Bengaluru":
        setAreas(["Majestic", "Silk Board", "Koramangala"]);
        break;
      case "Chennai":
        setAreas(["Saidapet", "Nungambakkam", "Guindy", "Velacherry", "Vadapalani"]);
        break;
      default:
        setAreas([]);
        break;
    }
  };

  const handleAreaChange = (value) => {
    setSelectedArea(value);
  };


  
  
  const formFields = [
    {
      label: "Production Name",
      name: "productionName",
      rules: [{ required: true, message: <span className="philosopher-font">Please enter the production name</span> }],
      component: <Input className="philosopher-font" />,
    },
    {
      label: "Producer",
      name: "producer",
      rules: [{ required: true, message: <span className="philosopher-font">Please enter the producer</span> }],
      component: <Input className="philosopher-font" />,
    },
    {
      label: "Established On",
      name: "establishedYear",
      rules: [{ required: true, message: <span className="philosopher-font">Please enter the established year</span> }],
      component: <Input className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Company Type</span>,
      name: "cmpnyType",
      rules: [{ required: true, message: <span className="philosopher-font">Please select company type</span> }],
      component: (
        <Select
          className="philosopher-font"
          placeholder={<span style={{ fontFamily: "'Philosopher', sans-serif" }}>Select Company Type</span>}
      
        >
         <Option className="philosopher-font" value="Private Limited Company (Pvt Ltd)">Private Limited Company (Pvt Ltd)</Option>
          <Option className="philosopher-font" value="Public Limited Company (PLC)">Public Limited Company (PLC)</Option>
          <Option className="philosopher-font" value="Sole Proprietorship">Sole Proprietorship</Option>
          <Option className="philosopher-font" value="Partnership">Partnership</Option>
          <Option className="philosopher-font" value="Limited Liability Partnership (LLP)">Limited Liability Partnership (LLP)</Option>
          <Option className="philosopher-font" value="Non-Profit Organization (NPO) / Non-Governmental Organization (NGO)">Non-Profit Organization (NPO) / Non-Governmental Organization (NGO)</Option>
          <Option className="philosopher-font" value="Cooperative (Co-op)">Cooperative (Co-op)</Option>
          <Option className="philosopher-font" value="One Person Company (OPC)">One Person Company (OPC)</Option>
          <Option className="philosopher-font" value="Joint Venture (JV)">Joint Venture (JV)</Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Country</span>,
      name: "country",
      rules: [{ required: true, message: "" }],
      component: <Input disabled placeholder="India" className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">State</span>,
      name: "state",
      rules: [{ required: true, message: <span className="philosopher-font">Please select state</span> }],
      component: (
        <Select
          className="philosopher-font"
          placeholder={<span style={{ fontFamily: "'Philosopher', sans-serif" }}>Select State</span>}
          onChange={handleStateChange}
        >
          <Option className="philosopher-font" value="Karnataka">Karnataka</Option>
          <Option className="philosopher-font" value="TamilNadu">TamilNadu</Option>
          <Option className="philosopher-font" value="Kerala">Kerala</Option>
          <Option className="philosopher-font" value="Telangana">Telangana</Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">City</span>,
      name: "city",
      rules: [{ required: true, message: <span className="philosopher-font">Please select city</span> }],
      component: (
        <Select
          className="philosopher-font"
          placeholder={<span style={{ fontFamily: "'Philosopher', sans-serif" }}>Select City</span>}
          onChange={handleCityChange}
          value={selectedCity}
        >
          {cities.map((city) => (
            <Option className="philosopher-font" key={city} value={city}>
              <span className="philosopher-font" style={{ fontSize: "16px" }}>{city}</span>
            </Option>
          ))}
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Area</span>,
      name: "area",
      rules: [{ required: true, message: <span className="philosopher-font">Please select area</span> }],
      component: (
        <Select
          className="philosopher-font"
          placeholder={<span style={{ fontFamily: "'Philosopher', sans-serif" }}>Select Area</span>}
          onChange={handleAreaChange}
          value={selectedArea}
        >
          {areas.map((area) => (
            <Option className="philosopher-font" key={area} value={area}>
              <span className="philosopher-font" style={{ fontSize: "16px" }}>{area}</span>
            </Option>
          ))}
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Address</span>,
      name: "address",
      rules: [{ required: true, message: <span className="philosopher-font">Please enter theatre address</span> }],
      component: <Input.TextArea placeholder="Building No, Street, Area" className="philosopher-font" />,
    },
    {
      label: "Language Type",
      name: "languageType",
      rules: [{ required: true, message: <span className="philosopher-font">Please select the language type</span> }],
      component: (
        <Select className="philosopher-font" placeholder={<span className="philosopher-font">Select language type</span>} onChange={handleLanguageTypeChange}>
          <Option className="philosopher-font" value="lingual">Lingual</Option>
          <Option className="philosopher-font" value="multilingual">Multilingual</Option>
        </Select>
      ),
    },
    {
      label: "Languages",
      name: "languages",
      rules: [{ required: true, message: <span className="philosopher-font">Please select the language(s)</span> }],
      component: (
        <Select className="philosopher-font"
          mode={selectedLanguageType === "lingual" ? "single" : "multiple"}
          placeholder={<span className="philosopher-font">{selectedLanguageType === "lingual" ? "Select language" : "Select language(s)"}</span>}
          disabled={!selectedLanguageType}
        >
          {["Tamil", "Kannada", "Malayalam", "Telugu"].map((lang) => (
            <Option className="philosopher-font" key={lang} value={lang}>{lang}</Option>
          ))}
        </Select>
      ),
    },
    {
      label: "Awards",
      name: "awards",
      component: (
        <Select className="philosopher-font" mode="multiple" placeholder={<span className="philosopher-font">Select award(s)</span>}>
          {["Vijay Awards", "SIIMA Awards", "Vikatan Awards"].map((award) => (
            <Option className="philosopher-font" key={award} value={award}>{award}</Option>
          ))}
        </Select>
      ),
    },
    {
      label: "Logo",
      name: "images",
      rules: [{ required: true, message: <span className="philosopher-font">Please upload logo</span> }],
      component: (
        <Upload customRequest={customRequest} accept=".jpg, .jpeg, .png, .gif" multiple showUploadList={false}>
          <Button icon={<InboxOutlined />}><span className="philosopher-font">Click or drag files to upload</span></Button>
        </Upload>
      ),
    },
    {
      label: "Description",
      name: "description",
      rules: [{ required: true, message: <span className="philosopher-font">Please enter details about production house</span> }],
      component: <Input.TextArea className="philosopher-font"/>,
    },
    {
      label: "Rating",
      name: "rating",
      rules: [{ required: true, message: <span className="philosopher-font">Please rate the production house</span> }],
      component: <Rate />,
    },
  ];

  return (
    <div className="philosopher-font" style={{ padding: "1%" }}>
      <h2 className="mt-3 mb-3">Add Production House</h2>
      <hr />
      <Form className="philosopher-font" form={form} onFinish={handleFormSubmit} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
        <Row gutter={16}>
          {formFields.map((field, index) => (
            <Col key={field.name} md={12} lg={12}>
              <Form.Item label={<span className="philosopher-font">{field.label}</span>} name={field.name} rules={field.rules}>
                {<span className="philosopher-font">{field.component}</span>}
              </Form.Item>
            </Col>
          ))}
        </Row>

        <Tabs>

          <TabPane tab={<span className="philosopher-font">Team</span>}>
          <Row>
            <Col lg={12}>
            <Form.Item
              label={<span className="philosopher-font">Name</span>}
              name="teamName"
              rules={[
                { required: true, message: <span className="philosopher-font">Please enter the name</span> },
              ]}
            >
              <Input className="philosopher-font" />
            </Form.Item>
            </Col>
            <Col lg={12}>
 
            <Form.Item
              label={<span className="philosopher-font">Designation</span>}
              name="teamDesignation"
              rules={[
                { required: true, message: <span className="philosopher-font">Please enter the designation</span> },
              ]}
            >
              <Input className="philosopher-font" />
            </Form.Item>
            </Col>
          </Row>
         
          </TabPane>
          </Tabs>
        <div>
          <Form.Item>
            <Checkbox className="philosopher-font" style={{ fontSize: "18px", fontWeight: "bold" }} checked={showSocialMediaLinks} onChange={handleCheckboxSocialChange}>
              Social Media Links
            </Checkbox>
          </Form.Item>
          {showSocialMediaLinks && socialPlatforms.map((platform, index) => (
            <Space key={index} style={{ display: "flex", marginBottom: 8 }} align="baseline">
              <Row>
                <Col md={24}>
                  <Form.Item
                    label={<span className="philosopher-font">Platform</span>}
                    name={["socialPlatforms", index, "platform"]}
                    rules={[{ required: true, message: <span className="philosopher-font">Please select platform</span> }]}
                  >
                    <Select className="philosopher-font" placeholder={<span className="philosopher-font">Platform</span>}>
                      {["Facebook", "Twitter", "Instagram", "Youtube", "Web"].map((platform) => (
                        <Option className="philosopher-font" key={platform} value={platform}>{platform}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Form.Item
                  label={<span className="philosopher-font">Link</span>}
                  name={["socialPlatforms", index, "link"]}
                  rules={[{ required: true, message: <span className="philosopher-font">Please input the link!</span> }]}
                >
                  <Input className="philosopher-font" />
                </Form.Item>

                {index === socialPlatforms.length - 1 && (
                  <DeleteOutlined style={{ color: "red", marginBottom: "20px" }} onClick={() => setSocialPlatforms(socialPlatforms.slice(0, -1))} />
                )}
              </Row>
            </Space>
          ))}

          <Form.Item>
            <Button className="philosopher-font" type="dashed" onClick={handleAddPlatform} icon={<PlusOutlined />}>
              Add More
            </Button>
          </Form.Item>
        </div>

        <div style={{ display: "flex", justifyContent: "center", padding: "2%" }}>
          <Form.Item>
            <Button className="philosopher-font" style={{ backgroundColor: "#022135", color: "white" }} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>

      </Form>

      <div className="picture-wall">
        {uploadedImages.map((image, index) => (
          <div key={index} className="picture-wall-item">
            <img src={image.url} alt={`Uploaded ${index}`} className="picture-wall-image-small" />
            <Button style={{ display: "flex", alignItems: "center" }} icon={<DeleteOutlined />} onClick={() => removeImage(image.file)}>
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProductionHouse;

