import React, { useState } from "react";
import { Form, Input, Button, Select, Upload, Col, Row, Rate, Space, Tabs } from "antd";
import { InboxOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import "../../../Css/Admin.css";
import AddCelebrity from "../Celebrity/AddCelebrity";
import axios from "axios";

const { TabPane } = Tabs;
const { Option } = Select;

const AddMovieForm = () => {
  const [form] = Form.useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedLanguageType, setSelectedLanguageType] = useState(null);
  const [platform, setPlatform] = useState("theatres");
  const [ottOptions, setOttOptions] = useState([]);
  const [satelliteOptions, setSatelliteOptions] = useState([]);
  const [formData, setFormData] = useState({
    movieName: "",
    genre: [],
    production: "",
    producer: [],
    languages: [],
    runtime: "",
    budget: "",
    awards: [],
    description: "",
    movieSpeciality: "",
    inspired: "",
    movieCensorCertificate: "",
    oldName: "",
    images: [],
    rating: 0,
    cast: [
      {
        castDesignation: "",
        castName: "",
        castRole: "",
        castCharacterName: "",
        castRemarks: "",
      },
    ],
    crew: [
      { department: "", crewDesignation: "", crewName: "", crewRemarks: "" },
    ],
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Define handleProductionCompanyChange function
  const handleProductionCompanyChange = (value) => {
    console.log("Selected production company:", value);
  };

  // Define producers array
  const producers = ["Producer 1", "Producer 2", "Producer 3"];

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:8080/movies", values);
      console.log("Movie saved successfully:", response.data);
      // Optionally, reset form state or show success message
    } catch (error) {
      console.error("Error saving movie:", error);
      // Handle error cases
    }
  };

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess();
      setImageFiles([...imageFiles, file]);
      setUploadedImages([
        ...uploadedImages,
        {
          file,
          url: URL.createObjectURL(file),
        },
      ]);
      setFormData({
        ...formData,
        images: [...formData.images, file],
      });
    }, 1000);
  };

  const handleLanguageTypeChange = (value) => {
    setSelectedLanguageType(value);
    form.setFieldsValue({ languages: [] });
  };

  const removeImage = (fileToRemove) => {
    const updatedFiles = imageFiles.filter((file) => file !== fileToRemove);
    const updatedImages = uploadedImages.filter(
      (image) => image.file !== fileToRemove
    );
    setImageFiles(updatedFiles);
    setUploadedImages(updatedImages);
  };

  const handleAddMember = (type) => {
    if (type === "cast") {
      setFormData({
        ...formData,
        cast: [
          ...formData.cast,
          {
            castDesignation: "",
            castName: "",
            castRole: "",
            castCharacterName: "",
            castRemarks: "",
          },
        ],
      });
    } else if (type === "crew") {
      setFormData({
        ...formData,
        crew: [
          ...formData.crew,
          { department: "", crewDesignation: "", name: "", remarks: "" },
        ],
      });
    }
  };

  const handleRemoveMember = (index, type) => {
    if (type === "cast") {
      const updatedCast = [...formData.cast];
      updatedCast.splice(index, 1);
      setFormData({ ...formData, cast: updatedCast });
    } else if (type === "crew") {
      const updatedCrew = [...formData.crew];
      updatedCrew.splice(index, 1);
      setFormData({ ...formData, crew: updatedCrew });
    }
  };

  const handleMemberChange = (value, index, fieldName) => {
    if (fieldName === "castDesignation") {
      const updatedCast = [...formData.cast];
      updatedCast[index].castDesignation = value;
      setFormData({ ...formData, cast: updatedCast });
    } else if (fieldName === "castName") {
      const updatedCast = [...formData.cast];
      updatedCast[index].castName = value;
      setFormData({ ...formData, cast: updatedCast });
    } else if (fieldName === "castRole") {
      const updatedCast = [...formData.cast];
      updatedCast[index].castRole = value;
      setFormData({ ...formData, cast: updatedCast });
    } else if (fieldName === "castCharacterName") {
      const updatedCast = [...formData.cast];
      updatedCast[index].castCharacterName = value;
      setFormData({ ...formData, cast: updatedCast });
    } else if (fieldName === "castRemarks") {
      const updatedCast = [...formData.cast];
      updatedCast[index].castRemarks = value;
      setFormData({ ...formData, cast: updatedCast });
    } else if (fieldName === "department") {
      const updatedCrew = [...formData.crew];
      updatedCrew[index].department = value;
      setFormData({ ...formData, crew: updatedCrew });
    } else if (fieldName === "crewDesignation") {
      const updatedCrew = [...formData.crew];
      updatedCrew[index].crewDesignation = value;
      setFormData({ ...formData, crew: updatedCrew });
    } else if (fieldName === "crewName") {
      const updatedCrew = [...formData.crew];
      updatedCrew[index].crewName = value;
      setFormData({ ...formData, crew: updatedCrew });
    } else if (fieldName === "crewRemarks") {
      const updatedCrew = [...formData.crew];
      updatedCrew[index].crewRemarks = value;
      setFormData({ ...formData, crew: updatedCrew });
    }
  };

  const handlePlatformChange = (value) => {
    setPlatform(value);
    if (value === "ott") {
      setOttOptions(["Netflix", "Amazon Prime", "Disney+", "Hulu"]);
      setSatelliteOptions([]);
    } else if (value === "satellite") {
      setSatelliteOptions(["SunTV", "Ktv"]);
      setOttOptions([]);
    } else {
      setOttOptions([]);
      setSatelliteOptions([]);
    }
  };

  const handleProducerChange = (value) => {
    setFormData({ ...formData, producer: value });
  };

  const handleGenreChange = (value) => {
    setFormData({ ...formData, genre: value });
  };

  const formFields = [
    {
      label: "Movie Name",
      name: "movieName",
      rules: [{ required: true, message: "Please enter the movie name" }],
      component: <Input placeholder="Movie Name" />,
    },
    {
      label: "Genre",
      name: "genre",
      rules: [{ required: true, message: "Please select at least one genre" }],
      component: (
        <Select mode="multiple" placeholder="Select genre(s)">
          <Option value="Action">Action</Option>
          <Option value="Adventure">Adventure</Option>
          <Option value="Comedy">Comedy</Option>
          <Option value="Drama">Drama</Option>
          <Option value="Fantasy">Fantasy</Option>
          <Option value="Horror">Horror</Option>
          <Option value="Romance">Romance</Option>
          <Option value="Sci-Fi">Sci-Fi</Option>
          <Option value="Thriller">Thriller</Option>
        </Select>
      ),
    },
    {
      label: "Production Company",
      name: "production",
      rules: [{ required: true, message: "Please select a production company" }],
      component: (
        <Select onChange={handleProductionCompanyChange} placeholder="Select production company">
          <Option value="Company A">Company A</Option>
          <Option value="Company B">Company B</Option>
          <Option value="Company C">Company C</Option>
        </Select>
      ),
    },
    {
      label: "Producer(s)",
      name: "producer",
      rules: [{ required: true, message: "Please select at least one producer" }],
      component: (
        <Select mode="multiple" placeholder="Select producer(s)" onChange={handleProducerChange}>
          {producers.map((producer) => (
            <Option key={producer} value={producer}>
              {producer}
            </Option>
          ))}
        </Select>
      ),
    },
    {
      label: "Languages",
      name: "languages",
      rules: [
        { required: true, message: "Please select at least one language" },
      ],
      component: (
        <Select mode="multiple" placeholder="Select language(s)">
          <Option value="Tamil">Tamil</Option>
          <Option value="English">English</Option>
          <Option value="Hindi">Hindi</Option>
          <Option value="Telugu">Telugu</Option>
          <Option value="Malayalam">Malayalam</Option>
          <Option value="Kannada">Kannada</Option>
          <Option value="Bengali">Bengali</Option>
          <Option value="Punjabi">Punjabi</Option>
        </Select>
      ),
    },
    {
      label: "Runtime (in minutes)",
      name: "runtime",
      rules: [{ required: true, message: "Please enter the runtime" }],
      component: <Input placeholder="Runtime" />,
    },
    {
      label: "Budget (in million USD)",
      name: "budget",
      rules: [{ required: true, message: "Please enter the budget" }],
      component: <Input placeholder="Budget" />,
    },
    {
      label: "Awards",
      name: "awards",
      component: (
        <Select mode="multiple" placeholder="Select award(s)">
          <Option value="National Award">National Award</Option>
          <Option value="Filmfare Award">Filmfare Award</Option>
          <Option value="Oscar">Oscar</Option>
          <Option value="Golden Globe">Golden Globe</Option>
          <Option value="Bafta">Bafta</Option>
          <Option value="Critics Choice Award">Critics Choice Award</Option>
          <Option value="Zee Cine Award">Zee Cine Award</Option>
          <Option value="Guild Award">Guild Award</Option>
          <Option value="Screen Award">Screen Award</Option>
        </Select>
      ),
    },
    {
      label: "Description",
      name: "description",
      rules: [{ required: true, message: "Please enter the description" }],
      component: <Input.TextArea rows={4} placeholder="Description" />,
    },
    {
      label: "Movie Speciality",
      name: "movieSpeciality",
      component: (
        <Select mode="single" placeholder="Select speciality">
          <Option value="3D">3D</Option>
          <Option value="4D">4D</Option>
          <Option value="IMAX">IMAX</Option>
          <Option value="Dolby Atmos">Dolby Atmos</Option>
          <Option value="ScreenX">ScreenX</Option>
          <Option value="MX4D">MX4D</Option>
          <Option value="DTS:X">DTS:X</Option>
        </Select>
      ),
    },
    {
      label: "Inspired By",
      name: "inspired",
      component: <Input placeholder="Inspired By" />,
    },
    {
      label: "Censor Certificate",
      name: "movieCensorCertificate",
      rules: [{ required: true, message: "Please select a certificate" }],
      component: (
        <Select mode="single" placeholder="Select certificate">
          <Option value="U">U</Option>
          <Option value="U/A">U/A</Option>
          <Option value="A">A</Option>
        </Select>
      ),
    },
    {
      label: "Old Name",
      name: "oldName",
      component: <Input placeholder="Name" />,
    },
    {
      label: "Rating",
      name: "rating",
      component: <Rate />,
    },
  ];

  return (
    <div>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={formData}
        className="add_movie_form"
      >
        <Row gutter={16}>
          {formFields.map((field) => (
            <Col span={12} key={field.name}>
              <Form.Item
                label={field.label}
                name={field.name}
                rules={field.rules}
              >
                {field.component}
              </Form.Item>
            </Col>
          ))}
        </Row>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Cast Details" key="1">
            <Row gutter={16}>
              {formData.cast.map((member, index) => (
                <Col span={12} key={`cast-${index}`}>
                  <Space>
                    <Input
                      placeholder="Designation"
                      value={member.castDesignation}
                      onChange={(e) =>
                        handleMemberChange(e.target.value, index, "castDesignation")
                      }
                    />
                    <Input
                      placeholder="Name"
                      value={member.castName}
                      onChange={(e) => handleMemberChange(e.target.value, index, "castName")}
                    />
                    <Input
                      placeholder="Role"
                      value={member.castRole}
                      onChange={(e) => handleMemberChange(e.target.value, index, "castRole")}
                    />
                    <Input
                      placeholder="Character Name"
                      value={member.castCharacterName}
                      onChange={(e) =>
                        handleMemberChange(e.target.value, index, "castCharacterName")
                      }
                    />
                    <Input
                      placeholder="Remarks"
                      value={member.castRemarks}
                      onChange={(e) =>
                        handleMemberChange(e.target.value, index, "castRemarks")
                      }
                    />
                    <DeleteOutlined
                      onClick={() => handleRemoveMember(index, "cast")}
                    />
                  </Space>
                </Col>
              ))}
            </Row>
            <Button
              type="dashed"
              onClick={() => handleAddMember("cast")}
              style={{ width: "100%" }}
            >
              <PlusOutlined /> Add Cast Member
            </Button>
          </TabPane>

          <TabPane tab="Crew Details" key="2">
            <Row gutter={16}>
              {formData.crew.map((member, index) => (
                <Col span={12} key={`crew-${index}`}>
                  <Space>
                    <Input
                      placeholder="Department"
                      value={member.department}
                      onChange={(e) =>
                        handleMemberChange(e.target.value, index, "department")
                      }
                    />
                    <Input
                      placeholder="Designation"
                      value={member.crewDesignation}
                      onChange={(e) =>
                        handleMemberChange(e.target.value, index, "crewDesignation")
                      }
                    />
                    <Input
                      placeholder="Name"
                      value={member.crewName}
                      onChange={(e) => handleMemberChange(e.target.value, index, "crewName")}
                    />
                    <Input
                      placeholder="Remarks"
                      value={member.crewRemarks}
                      onChange={(e) =>
                        handleMemberChange(e.target.value, index, "crewRemarks")
                      }
                    />
                    <DeleteOutlined
                      onClick={() => handleRemoveMember(index, "crew")}
                    />
                  </Space>
                </Col>
              ))}
            </Row>
            <Button
              type="dashed"
              onClick={() => handleAddMember("crew")}
              style={{ width: "100%" }}
            >
              <PlusOutlined /> Add Crew Member
            </Button>
          </TabPane>
        </Tabs>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMovieForm;
