import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Modal,
  Radio,
  Select,
  Checkbox,
  Upload,
  Col,
  Row,
  Rate,
  Tabs,
  Space,
} from "antd";
import { InboxOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import "../../../Css/Admin.css";
import AddCelebrity from "../Celebrity/AddCelebrity";
import axios from "axios";

const { TabPane } = Tabs;
const { Option } = Select;

const AddMovieForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedLanguageType, setSelectedLanguageType] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [platform, setPlatform] = useState('theatres'); // Default platform state
  const [ottOptions, setOttOptions] = useState([]); // State to manage OTT options
  const [satelliteOptions, setSatelliteOptions] = useState([]); // State to manage Satellite options

  const handleOTTSelection = (selectedOptions) => {
    setSelectedPlatforms(selectedOptions);
  };

  // State variables for dubbed section
  const [dubbed, setDubbed] = useState(false);
  const [dubbedMovieOptions, setDubbedMovieOptions] = useState([]);
  const [selectedDubbedLanguages, setSelectedDubbedLanguages] = useState([]);
  const [dubbedRows, setDubbedRows] = useState([
    { movieName: "", languages: [] },
  ]);
  // State variables for remake section
  const [remake, setRemake] = useState(false);
  const [remakeMovieOptions, setRemakeMovieOptions] = useState([]);
  const [remakeMovieName, setRemakeMovieName] = useState("");
  const [selectedRemakeLanguages, setSelectedRemakeLanguages] = useState([]);
  const [remakeRows, setRemakeRows] = useState([
    { movieName: "", languages: [] },
  ]);
  const [formData, setFormData] = useState({
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
  const handleFormSubmit = async (values) => {
    try {
      // Make a POST request to your server with the form data
      const response = await axios.post("/api/movies", values);

      // Check if the request was successful
      if (response.status === 200) {
        console.log("Movie saved successfully:", response.data);
        // Optionally, you can perform any actions after successful save
      } else {
        console.error("Failed to save movie:", response.data);
        // Handle the failure case
      }
    } catch (error) {
      console.error("Error saving movie:", error);
      // Handle any errors that occur during the request
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

  const handleInputChange = (index, key, value, type) => {
    if (type === "cast") {
      const updatedcast = [...formData.cast];
      updatedcast[index][key] = value;
      setFormData({ ...formData, cast: updatedcast });
    } else if (type === "crew") {
      const updatedcrew = [...formData.crew];
      updatedcrew[index][key] = value;
      setFormData({ ...formData, crew: updatedcrew });
    }
  };

  const handleAddMember = (type) => {
    // Add new member to cast or crew
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
    // Remove member from cast or crew
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

  const handleLanguageTypeChange = (value) => {
    setSelectedLanguageType(value);
    form.setFieldsValue({ languages: [] }); // Clear selected languages
  };

  const removeImage = (fileToRemove) => {
    const updatedFiles = imageFiles.filter((file) => file !== fileToRemove);
    const updatedImages = uploadedImages.filter(
      (image) => image.file !== fileToRemove
    );
    setImageFiles(updatedFiles);
    setUploadedImages(updatedImages);
  };

  const handleAddCelebrity = () => {
    // Show the popup
    setIsPopupVisible(true);
  };

  // Function to handle closing the popup
  const handleClosePopup = () => {
    // Close the popup
    setIsPopupVisible(false);
  };

  // Handlers for Dubbed section
  const handleDubbedChange = (e) => {
    setDubbed(e.target.checked);
    setSelectedDubbedLanguages([]); // Reset selected languages when changing dubbed status
  };

  const handleDubbedMovieChange = (value, index) => {
    const updatedRows = [...dubbedRows];
    updatedRows[index].movieName = value;
    setDubbedRows(updatedRows);
  };

  const handleDubbedLanguageChange = (values, index) => {
    const updatedRows = [...dubbedRows];
    updatedRows[index].languages = values;
    setDubbedRows(updatedRows);
  };

  const handleAddDubbedRow = () => {
    setDubbedRows([...dubbedRows, { movieName: "", languages: [] }]);
  };

  const handleRemoveDubbedRow = (index) => {
    const updatedRows = [...dubbedRows];
    updatedRows.splice(index, 1);
    setDubbedRows(updatedRows);
  };

  const handleAddDubbedMovie = (index) => {
    const newMovie = prompt("Enter new movie name:");
    if (newMovie) {
      setDubbedMovieOptions([...dubbedMovieOptions, newMovie]);
      handleDubbedMovieChange(newMovie, index);
    }
  };

  // Handlers for Remake section
  const handleRemakeChange = (e) => {
    setRemake(e.target.checked);
    if (!e.target.checked) {
      setRemakeMovieName("");
      setSelectedRemakeLanguages([]);
      setRemakeRows([{ movieName: "", languages: [] }]);
    }
  };

  const handleAddRemakeMovie = () => {
    const newMovie = prompt("Enter new movie name:");
    if (newMovie) {
      setRemakeMovieOptions([...remakeMovieOptions, newMovie]);
      handleRemakeMovieNameChange(remakeRows.length - 1, newMovie);
    }
  };

  const handleRemakeMovieNameChange = (index, value) => {
    const updatedRows = [...remakeRows];
    updatedRows[index].movieName = value;
    setRemakeRows(updatedRows);
    setRemakeMovieName(value);
  };

  const handleRemakeLanguagesChange = (index, values) => {
    const updatedRows = [...remakeRows];
    updatedRows[index].languages = values;
    setRemakeRows(updatedRows);
  };

  const handleAddRemakeRow = () => {
    setRemakeRows([...remakeRows, { movieName: "", languages: [] }]);
  };

  const handleRemoveRemakeRow = (index) => {
    const updatedRows = [...remakeRows];
    updatedRows.splice(index, 1);
    setRemakeRows(updatedRows);
  };

  const [links, setLinks] = useState([{ type: "", url: "" }]);
  const [importantLinks, setImportantLinks] = useState(false);

  const handleTypeChange = (value, index) => {
    const updatedLinks = [...links];
    updatedLinks[index].type = value;
    setLinks(updatedLinks);
  };

  const handleUrlChange = (e, index) => {
    const updatedLinks = [...links];
    updatedLinks[index].url = e.target.value;
    setLinks(updatedLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { type: "", url: "" }]);
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const handleCheckboxChange = (e) => {
    setImportantLinks(e.target.checked);
  };

  const [songs, setSongs] = useState([{ key: 0 }]);

  const addSong = () => {
    const newKey = songs[songs.length - 1].key + 1;
    setSongs([...songs, { key: newKey }]);
  };

  const removeSong = (keyToRemove) => {
    setSongs(songs.filter((song) => song.key !== keyToRemove));
  };

  const handleAddOption = (fieldName, songKey) => {
    const option = window.prompt(`Enter new ${fieldName}:`);
    if (option) {
      // Update the songs state to include the new option
      setSongs((prevSongs) => {
        const updatedSongs = prevSongs.map((song) => {
          if (song.key === songKey) {
            return {
              ...song,
              [fieldName]: [...(song[fieldName] || []), option],
            };
          }
          return song;
        });
        return updatedSongs;
      });
    }
  };

  const [hasSongs, setHasSongs] = useState(true); // Initially set to true assuming there are songs

  const handleRadioChange = (e) => {
    setHasSongs(e.target.value === "songs");
  };

  const [releaseStatus, setReleaseStatus] = useState("");

  const handleReleaseStatusChange = (e) => {
    setReleaseStatus(e.target.value);
  };

  const [productionCompany, setProductionCompany] = useState(""); // State to track selected production company
  const [producers, setProducers] = useState([]); // State to store available producers based on the selected production company

  // Function to handle change in production company selection
  const handleProductionCompanyChange = (value) => {
    setProductionCompany(value); // Update selected production company

    // Reset the selected producer when the production company changes
    form.setFieldsValue({ producer: [] });

    // Logic to set available producers based on the selected production company
    switch (value) {
      case "Geminin Production":
        setProducers([" S. S. Vasan"]);
        break;
      case "Red Giant Movies":
        setProducers(["Udhayanidhi Stalin"]);
        break;
      case "AVM Production":
        setProducers([
          "A. V. Meiyappa Chettiar",
          "Aruna Guhan",
          "Aparna Guhan",
        ]);
        break;
      default:
        setProducers([]);
        break;
    }
  };

  const [socialPlatforms, setSocialPlatforms] = useState([
    { platform: "", link: "" },
  ]);
  const [showSocialMediaLinks, setShowSocialMediaLinks] = useState(true);

  const onFinish = (values) => {
    console.log("Social media links:", values);
  };

  const handleAddPlatform = () => {
    setSocialPlatforms([...socialPlatforms, { platform: "", link: "" }]);
  };

  const handleCheckboxSocialChange = (e) => {
    setShowSocialMediaLinks(e.target.checked);
  };

  const formFields = [
    {
      label: <span className="philosopher-font">Movie Title</span>,
      name: "movieName",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the movie name
            </span>
          ),
        },
      ],
      component: <Input className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Genre</span>,
      name: "genre",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please select at least one genre
            </span>
          ),
        },
      ],
      component: (
        <Select
          mode="multiple"
          placeholder="Select genre(s)"
          className="philosopher-font"
        >
          <Option value="Action" className="philosopher-font">
            Action
          </Option>
          <Option value="Drama" className="philosopher-font">
            Drama
          </Option>
          <Option value="Comedy" className="philosopher-font">
            Comedy
          </Option>
          <Option value="Horror" className="philosopher-font">
            Horror
          </Option>
          <Option value="Romance" className="philosopher-font">
            Romance
          </Option>
          <Option value="Science Fiction" className="philosopher-font">
            Science Fiction
          </Option>
          <Option value="Adventure" className="philosopher-font">
            Adventure
          </Option>
          <Option value="Fantasy" className="philosopher-font">
            Fantasy
          </Option>
          <Option value="Documentry" className="philosopher-font">
            Horror
          </Option>
          <Option value="Thriller" className="philosopher-font">
            Thriller
          </Option>
          <Option value="Crime" className="philosopher-font">
            Crime
          </Option>
          <Option value="Mystery" className="philosopher-font">
            Mystery
          </Option>
          <Option value="Animation" className="philosopher-font">
            Animation
          </Option>
          <Option value="War" className="philosopher-font">
            War
          </Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Production Company</span>,
      name: "production",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the Production Company
            </span>
          ),
        },
      ],
      component: (
        <Select
          mode="single"
          placeholder={<span className="philosopher-font">Select company</span>}
          className="philosopher-font"
          onChange={handleProductionCompanyChange} // Call the function when production company selection changes
        >
          <Select.Option
            value="Geminin Production"
            className="philosopher-font"
          >
            Geminin Production
          </Select.Option>
          <Select.Option value="Red Giant Movies" className="philosopher-font">
            Red Giant Movies
          </Select.Option>
          <Select.Option value="Sk Productions" className="philosopher-font">
            Sk Productions
          </Select.Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Producer</span>,
      name: "producer",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the producer name
            </span>
          ),
        },
      ],
      component: (
        <Select
          mode="multiple"
          placeholder={
            <span className="philosopher-font">Select producer</span>
          }
          className="philosopher-font"
          disabled={!productionCompany} // Disable the field if no production company is selected
        >
          {producers.map((producer) => (
            <Select.Option
              key={producer}
              value={producer}
              className="philosopher-font"
            >
              {producer}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    // {
    //   label: <span className="philosopher-font">Language Type</span>,
    //   name: "languageType",
    //   rules: [
    //     {
    //       required: true,
    //       message: (
    //         <span className="philosopher-font">
    //           Please select the language type
    //         </span>
    //       ),
    //     },
    //   ],
    //   component: (
    //     <Select
    //       className="philosopher-font"
    //       placeholder={
    //         <span className="philosopher-font">Select language type</span>
    //       }
    //       onChange={handleLanguageTypeChange}
    //     >
    //       <Option className="philosopher-font" value="lingual">
    //         Lingual
    //       </Option>
    //       <Option className="philosopher-font" value="bilingual">
    //         Bilingual
    //       </Option>
    //       <Option className="philosopher-font" value="multilingual">
    //         Multilingual
    //       </Option>
    //     </Select>
    //   ),
    // },
    // {
    //   label: <span className="philosopher-font">Languages</span>,
    //   name: "languages",
    //   rules: [
    //     {
    //       required: true,
    //       message: (
    //         <span className="philosopher-font">
    //           Please select the language(s)
    //         </span>
    //       ),
    //     },
    //   ],
    //   component: (
    //     <Select
    //       mode={selectedLanguageType === "lingual" ? "single" : "multiple"} // Set mode based on language type
    //       className="philosopher-font"
    //       placeholder={
    //         selectedLanguageType === "lingual"
    //           ? "Select language"
    //           : "Select language(s)"
    //       }
    //       disabled={!selectedLanguageType}
    //     >
    //       {selectedLanguageType === "lingual" ? (
    //         <>
    //           <Option className="philosopher-font" value="Tamil">
    //             Tamil
    //           </Option>
    //           <Option className="philosopher-font" value="Kannada">
    //             Kannada
    //           </Option>
    //           <Option className="philosopher-font" value="Malayalam">
    //             Malayalam
    //           </Option>
    //           <Option className="philosopher-font" value="Telugu">
    //             Telugu
    //           </Option>
    //         </>
    //       ) : selectedLanguageType === "bilingual" ? (
    //         <>
    //           <Option className="philosopher-font" value="Tamil">
    //             Tamil
    //           </Option>
    //           <Option className="philosopher-font" value="Kannada">
    //             Kannada
    //           </Option>
    //           <Option className="philosopher-font" value="Malayalam">
    //             Malayalam
    //           </Option>
    //           <Option className="philosopher-font" value="Telugu">
    //             Telugu
    //           </Option>
    //         </>
    //       ) : (
    //         <>
    //           <Option className="philosopher-font" value="Tamil">
    //             Tamil
    //           </Option>
    //           <Option className="philosopher-font" value="Kannada">
    //             Kannada
    //           </Option>
    //           <Option className="philosopher-font" value="Malayalam">
    //             Malayalam
    //           </Option>
    //           <Option className="philosopher-font" value="Telugu">
    //             Telugu
    //           </Option>
    //         </>
    //       )}
    //     </Select>
    //   ),
    // },

    {
      label: <span className="philosopher-font">Languages</span>,
      name: "languages",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please select the language(s)
            </span>
          ),
        },
      ],
      component: (
        <Select
          mode={selectedLanguageType === "lingual" ? "single" : "multiple"} // Set mode based on language type
          className="philosopher-font"
          placeholder={
            selectedLanguageType === "lingual"
              ? "Select language"
              : "Select language(s)"
          }
        >
          <Option className="philosopher-font" value="Tamil">
            Tamil
          </Option>
          <Option className="philosopher-font" value="Kannada">
            Kannada
          </Option>
          <Option className="philosopher-font" value="Malayalam">
            Malayalam
          </Option>
          <Option className="philosopher-font" value="Telugu">
            Telugu
          </Option>
        </Select>
      ),
    },
    
    {
      label: <span className="philosopher-font">Runtime</span>,
      name: "runtime",
      // rules: [
      //   {
      //     required: true,
      //     message: (
      //       <span className="philosopher-font">Please enter the runtime</span>
      //     ),
      //   },
      //   {
      //     pattern: /^(\d+)h (\d+)min$/,
      //     message: (
      //       <span className="philosopher-font">
      //         Invalid runtime format. Please use the format "2h 45min".
      //       </span>
      //     ),
      //   },
      // ],
      component: (
        <Input placeholder="e.g., 2h 45min" className="philosopher-font" />
      ),
    },
    {
      label: <span className="philosopher-font">Budget</span>,
      name: "budget",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">Please enter the budget</span>
          ),
        },
      ],
      component: (
        <Input placeholder="e.g., 100 crore" className="philosopher-font" />
      ),
    },
    {
      label: <span className="philosopher-font">Awards</span>,
      name: "awards",
      rules: [
        {
          required: false,
          message: (
            <span className="philosopher-font">Please select awards</span>
          ),
        },
      ],
      component: (
        <Select
          mode="multiple"
          placeholder="Select award(s)"
          className="philosopher-font"
        >
          <Option value="Vijay Awards" className="philosopher-font">
            Vijay Awards
          </Option>
          <Option value="SIIMA Awards" className="philosopher-font">
            SIIMA Awards
          </Option>
          <Option value="Vikatan Awards" className="philosopher-font">
            Vikatan Awards
          </Option>
        </Select>
      ),
    },
    // Inside the formFields array, modify the Cast section like this:

    {
      label: <span className="philosopher-font">Description</span>,
      name: "description",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the movie description
            </span>
          ),
        },
      ],
      component: <Input.TextArea className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Movie Speciality</span>,
      name: "movieSpeciality",
      rules: [
        {
          required: false,
        },
      ],
      component: <Input.TextArea className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">Inspired By</span>,
      name: "inspired",
      rules: [
        {
          required: false,
        },
      ],
      component: (
        <Input className="philosopher-font" placeholder="Books/Characters" />
      ),
    },
    {
      label: <span className="philosopher-font">Broadcast Channel</span>,
      name: "broadcastChannel",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please select broadcast channel
            </span>
          ),
        },
      ],
      component: (
        <Select
          mode="multiple"
          placeholder="Select Broadcast Channel"
          className="philosopher-font"
        >
          <Option value="Sun TV" className="philosopher-font">
            Sun TV
          </Option>
          <Option value="KTV" className="philosopher-font">
            KTV
          </Option>
          <Option value="Vijay TV" className="philosopher-font">
            Vijay TV
          </Option>
          <Option value="Kalaignar TV" className="philosopher-font">
            Kalaignar TV
          </Option>
          <Option value="Jaya TV" className="philosopher-font">
            Jaya TV
          </Option>
        </Select>
      ),
    },
    
    {
      label: <span className="philosopher-font">Movie Certificate</span>,
      name: "movieCensorCertificate",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the movie certificate
            </span>
          ),
        },
      ],
      component: (
        <Select
          mode="single"
          placeholder={
            <span className="philosopher-font">Select certificate</span>
          }
          className="philosopher-font"
        >
          <Option value="U" className="philosopher-font">
            U
          </Option>
          <Option value="U/A" className="philosopher-font">
            U/A
          </Option>
          <Option value="A" className="philosopher-font">
            A
          </Option>
          <Option value="S" className="philosopher-font">
            S
          </Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">Old Name</span>,
      name: "oldName",

      component: (
        <Input
          className="philosopher-font"
          placeholder="Old movie name if any"
        />
      ),
    },
    {
      label: <span className="philosopher-font">Images</span>,
      name: "images",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please upload at least one image
            </span>
          ),
        },
      ],
      component: (
        <Upload
          customRequest={customRequest}
          accept=".jpg, .jpeg, .png, .gif"
          multiple
          showUploadList={false}
          className="philosopher-font"
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
          message: (
            <span className="philosopher-font">Please rate the movies</span>
          ),
        },
      ],
      component: <Rate className="philosopher-font" />,
    },
  ];


  const handlePlatformChange = (value) => {
    setPlatform(value);
    // Set options based on selected platform
    if (value === 'ott') {
      setOttOptions(['Netflix', 'Amazon Prime', 'Disney+', 'Hulu']); // Example OTT options
      setSatelliteOptions([]); // Clear satellite options
    } else if (value === 'satellite') {
      setSatelliteOptions(['SunTV', 'Ktv']); // Example satellite options
      setOttOptions([]); // Clear OTT options
    } else {
      setOttOptions([]); // Clear OTT options
      setSatelliteOptions([]); // Clear satellite options
    }
  };
  return (
    <div style={{ padding: "1%" }}>
      <h2 className="mt-3 mb-3">Add Movies</h2>
      
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
            {formFields.slice(0, 10).map((field) => (
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
            {formFields.slice(10).map((field) => (
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

        {/* Release status */}
        <div>
        <hr />
        <h4 className="philosopher-font" style={{ fontWeight: "bold" }}>
            Rights
          </h4>

          <Form.Item>
  <Radio.Group onChange={handleReleaseStatusChange} value={releaseStatus}>
    <Row>
      <Col span={24}>
        <Radio
          className="philosopher-font"
          style={{ fontSize: "18px" }}
          value="audioRights"  // Changed value to "audioRights"
        >
          Audio Rights
        </Radio>
      </Col>
      <Col span={24}>
        <Radio
          className="philosopher-font"
          style={{ fontSize: "18px" }}
          value="satelliteRights"  // Changed value to "satelliteRights"
        >
          Satellite Rights
        </Radio>
      </Col>
      <Col span={24}>
        <Radio
          className="philosopher-font"
          style={{ fontSize: "18px" }} 
          value="ottRights"  // Changed value to "ottRights"
        >
          OTT Rights
        </Radio>
      </Col>
    </Row>
  </Radio.Group>
</Form.Item>

{releaseStatus === "ottRights" && (
  <>
    <Form.Item
      label={<span className="philosopher-font">OTT Rights</span>}
      name="ottRights"
      rules={[
        {
          required: true,
          message: <span className="philosopher-font">Please select OTT rights</span>,
        },
      ]}
    >
      <Select
        mode="multiple"
        placeholder="Select OTT rights"
        className="philosopher-font"
        onChange={handleOTTSelection}
      >
        <Option value="Netflix" className="philosopher-font">
          Netflix
        </Option>
        <Option value="Disney+Hotstar" className="philosopher-font">
          Disney+Hotstar
        </Option>
        <Option value="Amazon Prime" className="philosopher-font">
          Amazon Prime
        </Option>
        <Option value="Aha" className="philosopher-font">
          Aha
        </Option>
        <Option value="Zee5" className="philosopher-font">
          Zee5
        </Option>
        <Option value="SonyLiv" className="philosopher-font">
          SonyLiv
        </Option>
        <Option value="JioCinema" className="philosopher-font">
          JioCinema
        </Option>
      </Select>
    </Form.Item>

    <Form.Item
      label={<span className="philosopher-font">OTT Links</span>}
      name="links"
      rules={[
        {
          required: true,
          message: <span className="philosopher-font">Please enter link for each selected platform</span>,
        },
      ]}
    >
      {selectedPlatforms.map((platform) => (
        <Input
          key={platform}
          placeholder={`Link for ${platform}`}
          className="philosopher-font"
        />
      ))}
    </Form.Item>
  </>
)}

          <h4 className="philosopher-font" style={{ fontWeight: "bold" }}>
            Release Status
          </h4>
          <Form.Item>
            <Radio.Group
              onChange={handleReleaseStatusChange}
              value={releaseStatus}
            >
              <Row>
                <Col span={24}>
                  <Radio
                    className="philosopher-font"
                    style={{ fontSize: "18px" }}
                    value="released"
                  >
                    Released On
                  </Radio>
                </Col>
                <Col span={24}>
                  <Radio
                    className="philosopher-font"
                    style={{ fontSize: "18px" }}
                    value="yetToBeReleased"
                  >
                    Yet to be Released
                  </Radio>
                </Col>
                <Col span={24}>
                  <Radio
                    className="philosopher-font"
                    style={{ fontSize: "18px" }}
                    value="dropped"
                  >
                    Dropped
                  </Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>

          {releaseStatus === "released" && (
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
        label={<span className="philosopher-font">Platform</span>}
        name="platform"
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
          placeholder={<span className="philosopher-font">Select platform</span>}
          style={{ width: "100%" }}
          onChange={handlePlatformChange}
          value={platform}
        >
          <Select.Option className="philosopher-font" value="theatres">
            Theatres
          </Select.Option>
          <Select.Option className="philosopher-font" value="ott">
            OTT
          </Select.Option>
          <Select.Option className="philosopher-font" value="satellite">
            Satellite
          </Select.Option>
        </Select>
      </Form.Item>

      {/* Conditional rendering of OTT options */}
      {platform === 'ott' && ottOptions.length > 0 && (
        <Form.Item
          label={<span className="philosopher-font">OTT Options</span>}
          name="ottOptions"
          rules={[
            {
              required: true,
              message: <span className="philosopher-font">Please select an OTT option</span>,
            },
          ]}
        >
          <Select
            className="philosopher-font"
            placeholder={<span className="philosopher-font">Select OTT option</span>}
            style={{ width: "100%" }}
          >
            {ottOptions.map(option => (
              <Select.Option key={option} className="philosopher-font" value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      )}

      {/* Conditional rendering of Satellite options */}
      {platform === 'satellite' && satelliteOptions.length > 0 && (
        <Form.Item
          label={<span className="philosopher-font">Satellite Options</span>}
          name="satelliteOptions"
          rules={[
            {
              required: true,
              message: <span className="philosopher-font">Please select a Satellite option</span>,
            },
          ]}
        >
          <Select
            className="philosopher-font"
            placeholder={<span className="philosopher-font">Select Satellite option</span>}
            style={{ width: "100%" }}
          >
            {satelliteOptions.map(option => (
              <Select.Option key={option} className="philosopher-font" value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      )}
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<span className="philosopher-font">Release Date</span>}
                  name="releaseDate"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="philosopher-font">
                          Please enter release date
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input
                    className="philosopher-font"
                    type="date"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>
          )}
          {releaseStatus === "yetToBeReleased" && (
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={<span className="philosopher-font">Platform</span>}
                  name="platform"
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
                      <span className="philosopher-font">Select platform</span>
                    }
                    style={{ width: "100%" }}
                  >
                    <Select.Option
                      className="philosopher-font"
                      value="theatres"
                    >
                      Theatres
                    </Select.Option>
                    <Select.Option className="philosopher-font" value="ott">
                      OTT
                    </Select.Option>
                    <Select.Option
                      className="philosopher-font"
                      value="satellite"
                    >
                      Satellite
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={
                    <span className="philosopher-font">Expected Release</span>
                  }
                  name="expectedReleaseDate"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="philosopher-font">
                          Please enter expected release date
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input
                    className="philosopher-font"
                    type="date"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>
          )}
          {releaseStatus === "dropped" && (
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label={<span className="philosopher-font">Status</span>}
                  name="dropStatus"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="philosopher-font">
                          Please select status
                        </span>
                      ),
                    },
                  ]}
                >
                  <Select
                    className="philosopher-font"
                    placeholder="Select status"
                  >
                    <Select.Option value="complete">Complete</Select.Option>
                    <Select.Option value="incomplete">Incomplete</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<span className="philosopher-font">Remarks</span>}
                  name="droppedRemarks"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="philosopher-font">
                          Please enter remarks
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input.TextArea className="philosopher-font" />
                </Form.Item>
              </Col>
            </Row>
          )}
        </div>

        {/* cast and crew tab */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Row>
            <Col>
              <Tabs className="philosopher-font" defaultActiveKey="1" centered>
                <TabPane
                  className="philosopher-font"
                  tab={<span style={{ fontSize: "20px" }}>Cast</span>}
                  key="1"
                >
                  <Form
                    style={{ paddingTop: "3%" }}
                    form={form}
                    onFinish={handleFormSubmit}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                  >
                    {/* Cast section */}
                    <Form.List name="cast">
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(
                            ({ key, name, fieldKey, ...restField }) => (
                              <div
                                className="philosopher-font"
                                key={key}
                                style={{ display: "flex", marginBottom: 8 }}
                              >
                                <Form.Item
                                  style={{ width: "25%" }}
                                  {...restField}
                                  name={[name, "castDesignation"]}
                                  fieldKey={[fieldKey, "castDesignation"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: (
                                        <span className="philosopher-font">
                                          Designation is required
                                        </span>
                                      ),
                                    },
                                  ]}
                                >
                                  <Select
                                    className="philosopher-font"
                                    placeholder={
                                      <span className="philosopher-font">
                                        Role 
                                      </span>
                                    }
                                    onChange={(value) =>
                                      handleInputChange(
                                        fieldKey,
                                        "castDesignation",
                                        value,
                                        "cast"
                                      )
                                    }
                                  >
                                    <Option
                                      value="Actor"
                                      className="philosopher-font"
                                    >
                                      Actor
                                    </Option>
                                    <Option
                                      value="Actress"
                                      className="philosopher-font"
                                    >
                                      Actress
                                    </Option>
                                    <Option
                                      value="Character Artist"
                                      className="philosopher-font"
                                    >
                                      Character Artist
                                    </Option>
                                    <Option
                                      value="Child Artist"
                                      className="philosopher-font"
                                    >
                                      Child Artist
                                    </Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  {...restField}
                                  name={[name, "castName"]}
                                  fieldKey={[fieldKey, "castName"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: (
                                        <span className="philosopher-font">
                                          Name is required
                                        </span>
                                      ),
                                    },
                                  ]}
                                  style={{ marginLeft: 8, width: "25%" }}
                                >
                                  {/* Your Select component for name */}
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Select
                                      className="philosopher-font"
                                      placeholder={
                                        <span className="philosopher-font">
                                          Name
                                        </span>
                                      }
                                    >
                                      {/* Render options based on designation */}
                                      {formData.cast[fieldKey]
                                        ?.castDesignation === "Actor" && (
                                        <>
                                          <Option
                                            className="philosopher-font"
                                            value="Rajinikanth"
                                          >
                                            Rajinikanth
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Vijay"
                                          >
                                            Vijay
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Ajith"
                                          >
                                            Ajith
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Surya"
                                          >
                                            Surya
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Mohanlal"
                                          >
                                            Mohanlal
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Prithiviraj"
                                          >
                                            Prithiviraj
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Mammooty"
                                          >
                                            Mammooty
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Sudeep"
                                          >
                                            Sudeep
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Shiva Rajkumar"
                                          >
                                            Shiva Rajkumar
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Puneeth Rajkumar"
                                          >
                                            Puneeth Rajkumar
                                          </Option>
                                          {/* Add more options based on designation */}
                                        </>
                                      )}
                                      {formData.cast[fieldKey]
                                        ?.castDesignation === "Actress" && (
                                        <>
                                          <Option
                                            className="philosopher-font"
                                            value="Sneha"
                                          >
                                            Sneha
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Samantha"
                                          >
                                            Samantha
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Nayanthara"
                                          >
                                            Nayanthara
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Trisha"
                                          >
                                            Trisha
                                          </Option>
                                          {/* Add more options based on designation */}
                                        </>
                                      )}
                                      {/* Your existing code for options */}
                                    </Select>

                                    {/* Custom button */}
                                    {!form.getFieldValue(
                                      `cast[${fieldKey}].name`
                                    ) && (
                                      <Button
                                        type="dashed"
                                        onClick={handleAddCelebrity} // Call the function to handle adding celebrity
                                        style={{ marginLeft: 8 }}
                                        icon={<PlusOutlined />}
                                      >
                                        Add
                                      </Button>
                                    )}

                                    {/* Popup for adding celebrity */}
                                    <Modal
                                      title=""
                                      visible={isPopupVisible}
                                      onCancel={handleClosePopup}
                                      footer={[
                                        <Button
                                          key="cancel"
                                          onClick={handleClosePopup}
                                        >
                                          Cancel
                                        </Button>,
                                        /* Add additional buttons for save, etc. if needed */
                                      ]}
                                      width={1300}
                                    >
                                      {/* Content of the popup */}
                                      <AddCelebrity />
                                      {/* Include form fields to add celebrity */}
                                    </Modal>
                                  </div>
                                </Form.Item>

                                <Form.Item
                                  {...restField}
                                  name={[name, "castRole"]}
                                  fieldKey={[fieldKey, "castRole"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: (
                                        <span className="philosopher-font">
                                          Role is required
                                        </span>
                                      ),
                                    },
                                  ]}
                                  style={{ marginLeft: 8, width: "25%" }}
                                >
                                  <Input
                                    className="philosopher-font"
                                    placeholder="Role"
                                  />
                                </Form.Item>

                                <Form.Item
        {...restField}
        name={[name, "debuteOption"]}
        fieldKey={[fieldKey, "debuteOption"]}
        style={{ marginLeft: 3, width: "30%" }}
        rules={[
          {
            required: true,
            message: (
              <span className="philosopher-font">
                Debute option is required
              </span>
            ),
          },
        ]}
      >
        <Select
          className="philosopher-font"
          placeholder="Select Debute Option"
        >
          <Select.Option className="philosopher-font" value="yes">
            Yes
          </Select.Option>
          <Select.Option className="philosopher-font" value="no">
            No
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        {...restField}
        name={[name, "whichMovieNumber"]}
        fieldKey={[fieldKey, "whichMovieNumber"]}
        style={{ marginLeft: 3, width: "30%" }}
        rules={[
          {
            required: true,
            message: (
              <span className="philosopher-font">
                Which Movie Number is required
              </span>
            ),
          },
        ]}
      >
        <Input
          className="philosopher-font"
          placeholder="Which Movie Number"
          type="number"
        />
      </Form.Item>                
                      
                                <Form.Item
                                  {...restField}
                                  name={[name, "castCharacterName"]}
                                  fieldKey={[fieldKey, "castCharacterName"]}
                                  rules={[
                                    {
                                      required: true, 
                                      message: (
                                        <span className="philosopher-font">
                                          Character name is required
                                        </span>
                                      ),
                                    },
                                  ]}
                                  style={{ marginLeft: 8, width: "25%" }}
                                >
                                  <Input
                                    className="philosopher-font"
                                    placeholder="Character Name"
                                  />
                                </Form.Item>
                                <Form.Item
                                  {...restField}
                                  name={[name, "remarkscast"]}
                                  fieldKey={[fieldKey, "castRemarks"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: (
                                        <span className="philosopher-font">
                                          Remarks is required
                                        </span>
                                      ),
                                    },
                                  ]}
                                  style={{ marginLeft: 8, width: "25%" }}
                                >
                                  <Input
                                    className="philosopher-font"
                                    placeholder="Remarks"
                                  />
                                </Form.Item>
                                <Button
                                  type="danger"
                                  onClick={() => remove(name)}
                                  style={{ marginLeft: 8, color: "red" }}
                                  icon={<DeleteOutlined />}
                                />
                              </div>
                            )
                          )}

                          <Form.Item
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              style={{ width: "auto" }}
                              className="philosopher-font"
                              type="dashed"
                              onClick={() => add()}
                              block
                              icon={<PlusOutlined />}
                            >
                              Add Cast Member
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Form> 
                </TabPane>
                <TabPane
                  tab={<span style={{ fontSize: "20px" }}>Crew</span>}
                  key="2"
                >
                  <Form
                    style={{ paddingTop: "3%" }}
                    form={form}
                    onFinish={handleFormSubmit}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                  >
                    {/* Crew section */}
                    <Form.List name="crew">
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(
                            ({ key, name, fieldKey, ...restField }) => (
                              <div
                                key={key}
                                style={{ display: "flex", marginBottom: 8 }}
                              >
                                <Form.Item
                                  style={{ width: "25%" }}
                                  {...restField}
                                  name={[name, "department"]}
                                  fieldKey={[fieldKey, "department"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: (
                                        <span className="philosopher-font">
                                          Department is required
                                        </span>
                                      ),
                                    },
                                  ]}
                                >
                                  <Select
                                    className="philosopher-font"
                                    placeholder={
                                      <span className="philosopher-font">
                                        Department
                                      </span>
                                    }
                                    onChange={(value) =>
                                      handleInputChange(
                                        fieldKey,
                                        "department",
                                        value,
                                        "cast"
                                      )
                                    }
                                  >
                                    <Option
                                      value="Direction"
                                      className="philosopher-font"
                                    >
                                      Direction
                                    </Option>
                                    <Option
                                      value="Cinematography"
                                      className="philosopher-font"
                                    >
                                      Cinematography
                                    </Option>
                                    <Option
                                      value="Music"
                                      className="philosopher-font"
                                    >
                                      Music
                                    </Option>
                                    <Option
                                      value="Art"
                                      className="philosopher-font"
                                    >
                                      Art
                                    </Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  style={{ width: "25%" }}
                                  {...restField}
                                  name={[name, "crewDesignation"]}
                                  fieldKey={[fieldKey, "crewDesignation"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: (
                                        <span className="philosopher-font">
                                          Designation is required
                                        </span>
                                      ),
                                    },
                                  ]}
                                >
                                  <Select
                                    className="philosopher-font"
                                    placeholder={
                                      <span className="philosopher-font">
                                        Designation
                                      </span>
                                    }
                                    onChange={(value) =>
                                      handleInputChange(
                                        fieldKey,
                                        "crewDesignation",
                                        value,
                                        "crew"
                                      )
                                    }
                                  >
                                    <Option
                                      value="Director"
                                      className="philosopher-font"
                                    >
                                      Director
                                    </Option>
                                    <Option
                                      value="Assistant Director"
                                      className="philosopher-font"
                                    >
                                      Assistant Director
                                    </Option>
                                    <Option
                                      value="Cinematographer"
                                      className="philosopher-font"
                                    >
                                      Cinematographer
                                    </Option>
                                    <Option
                                      value="Music Director"
                                      className="philosopher-font"
                                    >
                                      Music Director
                                    </Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  {...restField}
                                  name={[name, "crewName"]}
                                  fieldKey={[fieldKey, "crewName"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: (
                                        <span className="philosopher-font">
                                          Name is required
                                        </span>
                                      ),
                                    },
                                  ]}
                                  style={{ marginLeft: 8, width: "30%" }}
                                >
                                  {/* Your Select component for name */}
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Select
                                      className="philosopher-font"
                                      placeholder={
                                        <span className="philosopher-font">
                                          Name
                                        </span>
                                      }
                                    >
                                      {/* Render options based on designation */}
                                      {formData.cast[fieldKey]
                                        ?.crewDesignation === "Director" && (
                                        <>
                                          <Option
                                            className="philosopher-font"
                                            value="Maniratnam"
                                          >
                                            Maniratnam
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Shankar"
                                          >
                                            Shankar
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Lokesh"
                                          >
                                            Lokesh
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Nelson"
                                          >
                                            Nelson
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Dhanush"
                                          >
                                            Dhanush
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Prithiviraj"
                                          >
                                            Prithiviraj
                                          </Option>

                                          {/* Add more options based on designation */}
                                        </>
                                      )}
                                      {formData.cast[fieldKey]
                                        ?.crewDesignation ===
                                        "Assistant Director" && (
                                        <>
                                          <Option
                                            className="philosopher-font"
                                            value="Kamal"
                                          >
                                            Kamal
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Bala"
                                          >
                                            Bala
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Sasikumar"
                                          >
                                            Sasikumar
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Nelson"
                                          >
                                            Nelson
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Dhanush"
                                          >
                                            Dhanush
                                          </Option>
                                          <Option
                                            className="philosopher-font"
                                            value="Prithiviraj"
                                          >
                                            Prithiviraj
                                          </Option>
                                          {/* Add more options based on designation */}
                                        </>
                                      )}
                                      {/* Your existing code for options */}
                                    </Select>
                                    <div>
                                      {/* Custom button */}
                                      {!form.getFieldValue(
                                        `cast[${fieldKey}].name`
                                      ) && (
                                        <Button
                                          type="dashed"
                                          onClick={handleAddCelebrity} // Call the function to handle adding celebrity
                                          style={{ marginLeft: 8 }}
                                          icon={<PlusOutlined />}
                                        >
                                          Add
                                        </Button>
                                      )}
                                    </div>

                                    {/* Popup for adding celebrity */}
                                    <Modal
                                      title=""
                                      visible={isPopupVisible}
                                      onCancel={handleClosePopup}
                                      footer={[
                                        <Button
                                          key="cancel"
                                          onClick={handleClosePopup}
                                        >
                                          Cancel
                                        </Button>,
                                        /* Add additional buttons for save, etc. if needed */
                                      ]}
                                      width={1300}
                                    >
                                      {/* Content of the popup */}
                                      <AddCelebrity />
                                      {/* Include form fields to add celebrity */}
                                    </Modal>
                                  </div>
                                </Form.Item>


                                <Form.Item
        {...restField}
        name={[name, "debuteOption"]}
        fieldKey={[fieldKey, "debuteOption"]}
        style={{ marginLeft: 3, width: "30%" }}
        rules={[
          {
            required: true,
            message: (
              <span className="philosopher-font">
                Debute option is required
              </span>
            ),
          },
        ]}
      >
        <Select
          className="philosopher-font"
          placeholder="Select Debute Option"
        >
          <Select.Option className="philosopher-font" value="yes">
            Yes
          </Select.Option>
          <Select.Option className="philosopher-font" value="no">
            No
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        {...restField}
        name={[name, "whichMovieNumber"]}
        fieldKey={[fieldKey, "whichMovieNumber"]}
        style={{ marginLeft: 3, width: "30%" }}
        rules={[
          {
            required: true,
            message: (
              <span className="philosopher-font">
                Which Movie Number is required
              </span>
            ),
          },
        ]}
      >
        <Input
          className="philosopher-font"
          placeholder="Which Movie Number"
          type="number"
        />
      </Form.Item>
      
                                <Form.Item
                                  {...restField}
                                  name={[name, "crewRemarks"]}
                                  fieldKey={[fieldKey, "crewRemarks"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: (
                                        <span className="philosopher-font">
                                          Remarks is required
                                        </span>
                                      ),
                                    },
                                  ]}
                                  style={{ marginLeft: 8, width: "20%" }}
                                >
                                  <Input
                                    className="philosopher-font"
                                    placeholder="Remarks"
                                  />
                                </Form.Item>
                                <Button
                                  type="danger"
                                  onClick={() => remove(name)}
                                  style={{ marginLeft: 8, color: "red" }}
                                  icon={<DeleteOutlined />}
                                />
                              </div>
                            )
                          )}
                          <Form.Item
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              style={{ width: "auto" }}
                              className="philosopher-font"
                              type="dashed"
                              onClick={() => add()}
                              block
                              icon={<PlusOutlined />}
                            >
                              Add Crew Member
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Form>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>

        {/* songs */}

        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Radio.Group onChange={handleRadioChange} defaultValue="songs">
              <Radio
                className="philosopher-font"
                value="songs"
                style={{ fontSize: "18px" }}
              >
                Songs
              </Radio>
              <Radio
                className="philosopher-font"
                value="no-songs"
                style={{ fontSize: "18px" }}
              >
                No Songs
              </Radio>
            </Radio.Group>
          </div>
          {hasSongs && (
            <div>
              <Form
                style={{ padding: "3%" }}
                form={form}
                onFinish={handleFormSubmit}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {songs.map((song, index) => (
                  <div key={song.key} style={{ marginBottom: "20px" }}>
                    <Row align="middle">
                      <Col span={8}>
                        <Form.Item
                          label={
                            <span className="philosopher-font">Song No.</span>
                          }
                          name={`songNum_${song.key}`}
                          rules={[
                            {
                              required: true,
                              message: "Please select song number",
                            },
                          ]}
                        >
                          <Select
                            mode="single"
                            placeholder={
                              <span className="philosopher-font">
                                Select song number
                              </span>
                            }
                            className="philosopher-font"
                          >
                            <Option className="philosopher-font" value="1">
                              1
                            </Option>
                            <Option className="philosopher-font" value="2">
                              2
                            </Option>
                            <Option className="philosopher-font" value="3">
                              3
                            </Option>
                            <Option className="philosopher-font" value="4">
                              4
                            </Option>
                            <Option className="philosopher-font" value="5">
                              5
                            </Option>
                            <Option className="philosopher-font" value="6">
                              6
                            </Option>
                            <Option className="philosopher-font" value="7">
                              7
                            </Option>
                            <Option className="philosopher-font" value="8">
                              8
                            </Option>
                            <Option className="philosopher-font" value="9">
                              9
                            </Option>
                            <Option className="philosopher-font" value="10">
                              10
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label={<span className="philosopher-font">Name</span>}
                          name={`songName_${song.key}`}
                          rules={[
                            {
                              required: true,
                              message: "Please enter the song name",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Enter song name"
                            className="philosopher-font"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label={<span className="philosopher-font">Male</span>}
                          name={`singerMale_${song.key}`}
                          rules={[
                            {
                              required: true,
                              message: "Please select at least one male singer",
                            },
                          ]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Select male singer(s)"
                            className="philosopher-font"
                            value={song.singerMale || []} // Set the value to include newly added options
                            onChange={(value) =>
                              form.setFieldsValue({
                                [`singerMale_${song.key}`]: value,
                              })
                            }
                          >
                            <Option className="philosopher-font" value="Mano">
                              Mano
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Karthik"
                            >
                              Karthik
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Narsh Iyer"
                            >
                              Naresh Iyer
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Pradeep Kumar"
                            >
                              Pradeep Kumar
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Vijay Antony"
                            >
                              Vijay Antony
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Sid Sriram"
                            >
                              Sid Sriram
                            </Option>
                          </Select>
                          {!form.getFieldValue(`song[${song.key}].name`) && (
                            <Button
                              className="philosopher-font"
                              type="dashed"
                              onClick={handleAddCelebrity} // Call the function to handle adding celebrity
                              style={{ marginLeft: 8 }}
                              icon={<PlusOutlined />}
                            >
                              Add
                            </Button>
                          )}

                          {/* Popup for adding celebrity */}
                          <Modal
                            title=""
                            visible={isPopupVisible}
                            onCancel={handleClosePopup}
                            footer={[
                              <Button key="cancel" onClick={handleClosePopup}>
                                Cancel
                              </Button>,
                              /* Add additional buttons for save, etc. if needed */
                            ]}
                            width={1300}
                          >
                            {/* Content of the popup */}
                            <AddCelebrity />
                            {/* Include form fields to add celebrity */}
                          </Modal>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row align="middle">
                      <Col span={8}>
                        <Form.Item
                          label={
                            <span className="philosopher-font">Female</span>
                          }
                          name={`singerFemale_${song.key}`}
                          rules={[
                            {
                              required: true,
                              message: "Please select one Female singer",
                            },
                          ]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Select female singer(s)"
                            className="philosopher-font"
                          >
                            <Option
                              className="philosopher-font"
                              value="Shreya Ghosal"
                            >
                              Shreya Ghosal
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Shwetha Mohan"
                            >
                              Shwetha Mohan
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="K.S. Chitra"
                            >
                              K.S. Chitra
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Andrea Jeremiah"
                            >
                              Andrea Jeremiah
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Anuradha Sriram"
                            >
                              Anuradha Sriram
                            </Option>
                          </Select>
                          {!form.getFieldValue(`song[${song.key}].name`) && (
                            <Button
                              className="philosopher-font"
                              type="dashed"
                              onClick={handleAddCelebrity} // Call the function to handle adding celebrity
                              style={{ marginLeft: 8 }}
                              icon={<PlusOutlined />}
                            >
                              Add
                            </Button>
                          )}

                          {/* Popup for adding celebrity */}
                          <Modal
                            title=""
                            visible={isPopupVisible}
                            onCancel={handleClosePopup}
                            footer={[
                              <Button key="cancel" onClick={handleClosePopup}>
                                Cancel
                              </Button>,
                              /* Add additional buttons for save, etc. if needed */
                            ]}
                            width={1300}
                          >
                            {/* Content of the popup */}
                            <AddCelebrity />
                            {/* Include form fields to add celebrity */}
                          </Modal>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label={
                            <span className="philosopher-font">
                              Lyricist(s)
                            </span>
                          }
                          name={`lyricist_${song.key}`}
                          rules={[
                            {
                              required: true,
                              message: "Please select lyricist",
                            },
                          ]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Select lyricist(s)"
                            className="philosopher-font"
                          >
                            <Option className="philosopher-font" value="Vaali">
                              Vaali
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Kannadasan"
                            >
                              Kannadasan
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Na. Muthukumar"
                            >
                              Na. Muthukumar
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Yugabharathi"
                            >
                              Yugabharathi
                            </Option>
                            <Option className="philosopher-font" value="Vivek">
                              Vivek
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Thamarai"
                            >
                              Thamarai
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Vairamuthu"
                            >
                              Vairamuthu
                            </Option>
                          </Select>
                          {!form.getFieldValue(`song[${song.key}].name`) && (
                            <Button
                              className="philosopher-font"
                              type="dashed"
                              onClick={handleAddCelebrity} // Call the function to handle adding celebrity
                              style={{ marginLeft: 8 }}
                              icon={<PlusOutlined />}
                            >
                              Add
                            </Button>
                          )}

                          {/* Popup for adding celebrity */}
                          <Modal
                            title=""
                            visible={isPopupVisible}
                            onCancel={handleClosePopup}
                            footer={[
                              <Button key="cancel" onClick={handleClosePopup}>
                                Cancel
                              </Button>,
                              /* Add additional buttons for save, etc. if needed */
                            ]}
                            width={1300}
                          >
                            {/* Content of the popup */}
                            <AddCelebrity />
                            {/* Include form fields to add celebrity */}
                          </Modal>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label={
                            <span className="philosopher-font">Music</span>
                          }
                          name={`music${song.key}`}
                          rules={[
                            {
                              required: true,
                              message: "Please select music director",
                            },
                          ]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Select music director(s)"
                            className="philosopher-font"
                          >
                            <Option
                              className="philosopher-font"
                              value="A.R.Rahman"
                            >
                              A.R.Rahman
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Vijay Antony"
                            >
                              Vijay Antony
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Anirudh"
                            >
                              Anirudh
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Hiphop Tamizha"
                            >
                              Hiphop Tamizha
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Vidyasagar"
                            >
                              Vidyasagar
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="G. V. Prakash Kumar"
                            >
                              G. V. Prakash Kumar
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Harris Jayaraj"
                            >
                              Harris Jayaraj
                            </Option>
                          </Select>
                          {!form.getFieldValue(`song[${song.key}].name`) && (
                            <Button
                              className="philosopher-font"
                              type="dashed"
                              onClick={handleAddCelebrity} // Call the function to handle adding celebrity
                              style={{ marginLeft: 8 }}
                              icon={<PlusOutlined />}
                            >
                              Add
                            </Button>
                          )}

                          {/* Popup for adding celebrity */}
                          <Modal
                            title=""
                            visible={isPopupVisible}
                            onCancel={handleClosePopup}
                            footer={[
                              <Button key="cancel" onClick={handleClosePopup}>
                                Cancel
                              </Button>,
                              /* Add additional buttons for save, etc. if needed */
                            ]}
                            width={1300}
                          >
                            {/* Content of the popup */}
                            <AddCelebrity />
                            {/* Include form fields to add celebrity */}
                          </Modal>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row align="middle">
                      <Col span={8}>
                        <Form.Item
                          label={
                            <span className="philosopher-font">Choreo</span>
                          }
                          name={`choreographer${song.key}`}
                          rules={[
                            {
                              required: true,
                              message: "Please select choreographer",
                            },
                          ]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Select choreographer(s)"
                            className="philosopher-font"
                          >
                            <Option
                              className="philosopher-font"
                              value="Prabhu Deva"
                            >
                              Prabhu Deva
                            </Option>
                            <Option className="philosopher-font" value="Brinda">
                              Brinda
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="
Dinesh Kumar"
                            >
                              Dinesh Kumar
                            </Option>
                            <Option className="philosopher-font" value="Kala">
                              Kala
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Baba Baskar"
                            >
                              Baba Baskar
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Raghava Lawrence"
                            >
                              Raghava Lawrence
                            </Option>
                          </Select>
                          {!form.getFieldValue(`song[${song.key}].name`) && (
                            <Button
                              className="philosopher-font"
                              type="dashed"
                              onClick={handleAddCelebrity} // Call the function to handle adding celebrity
                              style={{ marginLeft: 8 }}
                              icon={<PlusOutlined />}
                            >
                              Add
                            </Button>
                          )}

                          {/* Popup for adding celebrity */}
                          <Modal
                            title=""
                            visible={isPopupVisible}
                            onCancel={handleClosePopup}
                            footer={[
                              <Button key="cancel" onClick={handleClosePopup}>
                                Cancel
                              </Button>,
                              /* Add additional buttons for save, etc. if needed */
                            ]}
                            width={1300}
                          >
                            {/* Content of the popup */}
                            <AddCelebrity />
                            {/* Include form fields to add celebrity */}
                          </Modal>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label={
                            <span className="philosopher-font">Award(s)</span>
                          }
                          name={`SongAwards${song.key}`}
                          rules={[{ required: false }]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Select award(s)"
                            className="philosopher-font"
                          >
                            <Option
                              className="philosopher-font"
                              value="Vijay Awards"
                            >
                              Vijay Awards
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="SIIMA Awards"
                            >
                              SIIMA Awards
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Viakatan Awards"
                            >
                              Vikatan Awards
                            </Option>
                            <Option
                              className="philosopher-font"
                              value="Behindwoods Gold Medals"
                            >
                              Behindwoods Gold Medals
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label={
                            <span className="philosopher-font">Remarks</span>
                          }
                          name={`remarks${song.key}`}
                          rules={[{ required: false }]}
                        >
                          <Input
                            placeholder="Enter remarks"
                            className="philosopher-font"
                          />
                        </Form.Item>
                      </Col>
                      {/* Add similar Form.Item for Female, Lyricist, Music, Choreo, Awards, Remarks */}
                      <Col span={2}>
                        <Space>
                          {index > 0 && (
                            <Button
                              style={{
                                color: "red",
                                fontSize: "20px",
                                marginBottom: "40px",
                              }}
                              type="link"
                              onClick={() => removeSong(song.key)}
                            >
                              <DeleteOutlined />
                            </Button>
                          )}
                        </Space>
                      </Col>
                    </Row>
                  </div>
                ))}
                <div style={{ textAlign: "center" }}>
                  <Button
                    className="philosopher-font"
                    type="dashed"
                    onClick={addSong}
                    icon={<PlusOutlined />}
                  >
                    Add Song
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </div>

        {/* dubbed remake and important links */}
        <div>
          {/* Dubbed and Remake  */}
          <div>
            <Row gutter={16}>
              <Col md={24} lg={24}>
                <Checkbox
                  style={{ fontSize: "18px" }}
                  className="philosopher-font"
                  checked={dubbed}
                  onChange={handleDubbedChange}
                  iconStyle={{ color: "red" }}
                >
                  Dubbed :
                </Checkbox>
                {dubbed && (
                  <>
                    {dubbedRows.map((row, index) => (
                      <div
                        key={index}
                        style={{ marginBottom: "16px", paddingTop: "1%" }}
                      >
                        <Select
                          style={{ width: "40%", marginBottom: "8px" }}
                          className="philosopher-font"
                          placeholder="Select movie name"
                          value={row.movieName}
                          onChange={(value) =>
                            handleDubbedMovieChange(value, index)
                          }
                        >
                          {dubbedMovieOptions.map((movie) => (
                            <Option
                              key={movie}
                              className="philosopher-font"
                              value={movie}
                            >
                              {movie}
                            </Option>
                          ))}
                        </Select>
                        <Button
                          style={{ marginLeft: "8px" }}
                          type="default"
                          onClick={() => handleAddDubbedMovie(index)}
                        >
                          Add Movie
                        </Button>

                        <Select
                          style={{
                            width: "50%",
                            height: "5vh",
                            marginBottom: "8px",
                          }}
                          className="philosopher-font"
                          mode="multiple"
                          placeholder="Select dubbed language(s)"
                          value={row.languages}
                          onChange={(values) =>
                            handleDubbedLanguageChange(values, index)
                          }
                        >
                          <Option className="philosopher-font" value="Tamil">
                            Tamil
                          </Option>
                          <Option className="philosopher-font" value="Kannada">
                            Kannada
                          </Option>
                          <Option
                            className="philosopher-font"
                            value="Malayalam"
                          >
                            Malayalam
                          </Option>
                          <Option className="philosopher-font" value="Telugu">
                            Telugu
                          </Option>
                        </Select>
                        <DeleteOutlined
                          style={{
                            color: "red",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleRemoveDubbedRow(index)}
                        />
                      </div>
                    ))}
                    <Button type="primary" onClick={handleAddDubbedRow}>
                      Add More
                    </Button>
                  </>
                )}
              </Col>
            </Row>

            <Row style={{ paddingTop: "2%" }}>
              <Col md={24} lg={24}>
                <Checkbox
                  style={{ fontSize: "18px" }}
                  className="philosopher-font"
                  checked={remake}
                  onChange={handleRemakeChange}
                >
                  Remake :
                </Checkbox>
                {remake && (
                  <>
                    {remakeRows.map((row, index) => (
                      <div
                        key={index}
                        style={{ marginBottom: "16px", paddingTop: "1%" }}
                      >
                        <Select
                          style={{ width: "40%", marginBottom: "8px" }}
                          className="philosopher-font"
                          placeholder="Select movie name"
                          value={row.movieName}
                          onChange={(value) =>
                            handleRemakeMovieNameChange(index, value)
                          }
                        >
                          {remakeMovieOptions.map((movie) => (
                            <Option
                              key={movie}
                              className="philosopher-font"
                              value={movie}
                            >
                              {movie}
                            </Option>
                          ))}
                        </Select>
                        &nbsp;
                        <Button
                          style={{}}
                          type="dashed"
                          onClick={handleAddRemakeMovie}
                        >
                          Add Movie
                        </Button>
                        <Select
                          style={{
                            width: "50%",
                            height: "5vh",
                            marginBottom: "8px",
                          }}
                          className="philosopher-font"
                          mode="multiple"
                          placeholder="Select remake language(s)"
                          value={row.languages}
                          onChange={(values) =>
                            handleRemakeLanguagesChange(index, values)
                          }
                        >
                          <Option className="philosopher-font" value="Tamil">
                            Tamil
                          </Option>
                          <Option className="philosopher-font" value="Kannada">
                            Kannada
                          </Option>
                          <Option
                            className="philosopher-font"
                            value="Malayalam"
                          >
                            Malayalam
                          </Option>
                          <Option className="philosopher-font" value="Telugu">
                            Telugu
                          </Option>
                        </Select>
                        <DeleteOutlined
                          style={{
                            color: "red",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleRemoveRemakeRow(index)}
                        />
                      </div>
                    ))}
                    <Button type="primary" onClick={handleAddRemakeRow}>
                      Add More
                    </Button>
                  </>
                )}
              </Col>
            </Row>
            {/* important linsk */}

            <Row style={{ paddingTop: "2%" }}>
              <Col md={24} lg={24}>
                <Checkbox
                  className="philosopher-font"
                  onChange={handleCheckboxChange}
                  style={{ marginBottom: "16px", fontSize: "18px" }}
                >
                  Important Links
                </Checkbox>
                {importantLinks &&
                  links.map((link, index) => (
                    <Space
                      key={index}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="start"
                    >
                      <Select
                        className="philosopher-font"
                        style={{ width: "15vw" }}
                        value={link.type}
                        onChange={(value) => handleTypeChange(value, index)}
                        placeholder="Select type"
                      >
                        <Option
                          className="philosopher-font"
                          value="Promotional"
                        >
                          Promotional
                        </Option>
                        <Option className="philosopher-font" value="Teaser">
                          Teaser
                        </Option>
                        <Option className="philosopher-font" value="Trailer">
                          Trailer
                        </Option>
                        <Option
                          className="philosopher-font"
                          value="Pre Release"
                        >
                          Pre Release
                        </Option>
                        <Option className="philosopher-font" value="Review">
                          Review
                        </Option>
                      </Select>
                      <Input
                        className="philosopher-font"
                        value={link.url}
                        style={{ flex: 1, width: "20vw" }}
                        onChange={(e) => handleUrlChange(e, index)}
                        placeholder="Enter Link"
                      />
                      <DeleteOutlined
                        onClick={() => handleDeleteLink(index)}
                        style={{
                          fontSize: "20px",
                          color: "red",
                          cursor: "pointer",
                        }}
                      />
                    </Space>
                  ))}
                {importantLinks && (
                  <Button type="primary" onClick={handleAddLink}>
                    Add Link
                  </Button>
                )}
              </Col>
            </Row>
          </div>
        </div>

        {/* Social Media Links  */}
        <div>
          <Form.Item>
            <Checkbox
              style={{ fontSize: "18px" }}
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
                      label={<span className="philosopher-font">Platform</span>}
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
                        <Option className="philosopher-font" value="Instagram">
                          Instagram
                        </Option>
                        <Option className="philosopher-font" value="Youtube">
                          Youtube
                        </Option>
                        <Option className="philosopher-font" value="Pinterest">
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
            Is any issues in movie?
          </h4>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Issue</span>}
                name="caseName"
              >
                <Input className="philosopher-font" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span className="philosopher-font">Description</span>}
                name="caseDescription"
              >
                <Input.TextArea className="philosopher-font" />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", padding: "2%" }}
        >
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 8,
              style: { textAlign: "center", paddingTop: "3%" },
            }}
          >
            <Button
              className="philosopher-font"
              style={{ backgroundColor: "#022135", color: "white" }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </div>
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
    </div>
  );
};

export default AddMovieForm;
