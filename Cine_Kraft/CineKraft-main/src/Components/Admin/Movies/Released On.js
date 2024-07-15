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
  message,
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

  const [selectedRights, setSelectedRights] = useState([]);
  

  // const handleOTTSelection = (selectedOptions) => {
  //   setSelectedPlatforms(selectedOptions);
  // };

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
  
  const [movieName, setMovieName] = useState('');
  const [genre, setGenre] = useState('');
  const [production, setProduction] = useState('');
  const [producer, setProducer] = useState('');
  const [languages, setLanguages] = useState('');
  const [runtime, setRuntime] = useState('');
  const [budget, setBudget] = useState('');
  const [awards, setAwards] = useState('');
  const [description, setDescription] = useState('');
  const [movieSpeciality, setMovieSpeciality] = useState('');
  const [inspired, setInspired] = useState('');
  const [movieCensorCertificate, setMovieCensorCertificate] = useState('');
  const [oldName, setOldName] = useState('');
  const [images, setImages] = useState('');
  const [rating, setRating] = useState(0); // Assuming rating is a number
  const [formValues, setFormValues] = useState('');
  
    const [selectedOTTPlatforms, setSelectedOTTPlatforms] = useState([]);  

    const [releasePlatform, setReleasePlatform] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [expectedReleaseDate, setExpectedReleaseDate] = useState('');
  const [yetToBeReleasedPlatform, setYetToBeReleasedPlatform] = useState('');
  const [dropStatus, setDropStatus] = useState('');
  const [remarks, setRemarks] = useState('');

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
  // const handlePlatformChange = (value) => {
  //   if (releaseStatus === 'released') {
  //     setReleasePlatform(value);
  //     // Set options based on selected platform for released movies
  //     if (value === 'ott') {
  //       setOttOptions(['Netflix', 'Amazon Prime', 'Disney+', 'Hulu']);
  //       setSatelliteOptions([]); // Clear satellite options
  //     } else if (value === 'satellite') {
  //       setSatelliteOptions(['SunTV', 'Ktv']);
  //       setOttOptions([]); // Clear OTT options
  //     } else {
  //       setOttOptions([]);
  //       setSatelliteOptions([]);
  //     }
  //   } else if (releaseStatus === 'yetToBeReleased') {
  //     setYetToBeReleasedPlatform(value);
  //     // Set options based on selected platform for yet to be released movies
  //     if (value === 'ott') {
  //       // Set OTT options for yet to be released movies
  //       // Example: You can set different options based on your requirement
  //     } else if (value === 'satellite') {
  //       // Set satellite options for yet to be released movies
  //       // Example: You can set different options based on your requirement
  //     } else {
  //       // Handle default case if needed
  //     }
  //   }
  // };
  
  
  const handlePlatformChange = (value) => {
    if (releaseStatus === 'released') {
      setReleasePlatform(value);
    } else if (releaseStatus === 'yetToBeReleased') {
      setYetToBeReleasedPlatform(value);
    }
    // Additional logic to update options based on selected platform
    if (value === 'ott') {
      setOttOptions(['Netflix', 'Amazon Prime', 'Disney+', 'Hulu']);
      setSatelliteOptions([]);
    } else if (value === 'satellite') {
      setSatelliteOptions(['SunTV', 'Ktv']);
      setOttOptions([]);
    } else {
      setOttOptions([]);
      setSatelliteOptions([]);
    }
  };
  
  const handleReleasePlatformChange = (value) => {
    setReleasePlatform(value);
  };
  
  const handleReleaseDateChange = (value) => {
    setReleaseDate(value);
  };
  
  const handleExpectedReleaseDateChange = (value) => {
    setExpectedReleaseDate(value);
  };
  
  const handleYetToBeReleasedPlatformChange = (value) => {
    setYetToBeReleasedPlatform(value);
  };
  
  const handleDropStatusChange = (value) => {
    setDropStatus(value);
  };
  
  const handleRemarksChange = (value) => {
    setRemarks(value);
  };

  const handleSubmit = async () => {
    try {
      const formData = {
        releasePlatform,
        releaseDate,
        expectedReleaseDate, // Add expectedReleaseDate for yetToBeReleased status
        yetToBeReleasedPlatform,
        dropStatus, // Add dropStatus for dropped status
        remarks, // Add remarks for dropped status
      };
  
      console.log('Form Data:', formData);
  
      const response = await axios.post('http://localhost:8080/api/movies', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Server response:', response.data);
      if (response.status >= 200 && response.status < 300) {
        message.success('Movie saved successfully!');
        // Reset form fields after successful submission
        setReleasePlatform('');
        setReleaseDate('');
        setExpectedReleaseDate('');
        setYetToBeReleasedPlatform('');
        setDropStatus('');
        setRemarks('');
      } else {
        message.error('Failed to save movie. Please try again.');
      }
    } catch (error) {
      console.error('Error saving movie:', error);
      message.error('Failed to save movie. Please try again.');
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

  const customRequest = ({ file, onSuccess }) => {
    // Perform file upload logic here, then update state
    setTimeout(() => {
      onSuccess();
      setImageFiles([...imageFiles, file]); // Add uploaded file to imageFiles state
      setUploadedImages([
        ...uploadedImages,
        {
          file,
          url: URL.createObjectURL(file),
        },
      ]); // Set uploaded images with URL for rendering
      setImages([...images, file.name]); // Update images state with file names or URLs as needed
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
   const [selectedSatelliteChannels, setSelectedSatelliteChannels] = useState([]);
    const [selectedAudioRights, setSelectedAudioRights] = useState([]);
    
  // //  const handleReleaseStatusChange = (checkedValues) => {
  // //    setReleaseStatus(checkedValues);
  // //  };

  const handleReleaseStatusChange = (e) => {
    setReleaseStatus(e.target.value);
  
  };
  
  const handleOTTSelection = (selectedOptions) => {
    console.log('Selected OTT options:', selectedOptions);
    // Handle selected OTT options as needed
  };  

  const handleSatelliteSelection = (selectedChannels) => {
    setSelectedSatelliteChannels(selectedChannels);
  };

  const handleAudioRightsSelection = (selectedAudioRights) => {
    setSelectedAudioRights(selectedAudioRights);
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


    return (
    <div style={{ padding: "1%" }}>
      <h2 className="mt-3 mb-3">Add Movies</h2>
      
      <hr />

      <Form
        style={{ paddingTop: "3%" }}
        form={form}
        onFinish={handleSubmit} // Correct comment syntax
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

      <div>
        <hr />
        <h4 className="philosopher-font" style={{ fontWeight: "bold" }}>
          Rights
        </h4>
        <Form>
          <Form.Item>
            <Checkbox.Group onChange={handleReleaseStatusChange} value={releaseStatus}>
              <Row>
                <Col span={24}>
                  <Checkbox value="audioRights">
                    Audio Rights
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="satelliteRights">
                    Satellite Rights
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="ottRights">
                    OTT Rights
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>

          {releaseStatus.includes('audioRights') && (
            <Form.Item
              label={<span className="philosopher-font">Audio Rights</span>}
              name="audioRights"
              rules={[
                {
                  required: true,
                  message: <span className="philosopher-font">Please select Audio rights</span>,
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Select Audio rights"
                className="philosopher-font"
                onChange={handleAudioRightsSelection}
              >
                <Select.Option value="Music Rights">Music Rights</Select.Option>
                <Select.Option value="Dubbing Rights">Dubbing Rights</Select.Option>
                <Select.Option value="Background Score Rights">Background Score Rights</Select.Option>
                <Select.Option value="Theatrical Rights">Theatrical Rights</Select.Option>
              </Select>
            </Form.Item>
          )}

          {releaseStatus.includes('satelliteRights') && (
            <>
              <Form.Item
                label={<span className="philosopher-font">Broadcast Channel</span>}
                name="satelliteRights"
                rules={[
                  {
                    required: true,
                    message: <span className="philosopher-font">Please select broadcast channel</span>,
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Select Satellite rights"
                  className="philosopher-font"
                  onChange={handleSatelliteSelection}
                >
                  <Select.Option value="Sun TV">Sun TV</Select.Option>
                  <Select.Option value="KTV">KTV</Select.Option>
                  <Select.Option value="Vijay TV">Vijay TV</Select.Option>
                  <Select.Option value="Kalaignar TV">Kalaignar TV</Select.Option>
                  <Select.Option value="Jaya TV">Jaya TV</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={<span className="philosopher-font">Broadcast Links</span>}
                name="satelliteLinks"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="philosopher-font">
                        Please enter link for each selected Broadcast channel
                      </span>
                    ),
                  },
                ]}
              >
                <div>
                  {selectedSatelliteChannels.map((channel) => (
                    <Input
                      key={channel}
                      placeholder={`Link for ${channel}`}
                      className="philosopher-font"
                    />
                  ))}
                </div>
              </Form.Item>
            </>
          )}

          {releaseStatus.includes('ottRights') && (
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
                  <Select.Option value="Netflix">Netflix</Select.Option>
                  <Select.Option value="Disney+Hotstar">Disney+Hotstar</Select.Option>
                  <Select.Option value="Amazon Prime">Amazon Prime</Select.Option>
                  <Select.Option value="Aha">Aha</Select.Option>
                  <Select.Option value="Zee5">Zee5</Select.Option>
                  <Select.Option value="SonyLiv">SonyLiv</Select.Option>
                  <Select.Option value="JioCinema">JioCinema</Select.Option>
                </Select>
              </Form.Item>

              {/* Render OTT Links inputs for selected platforms */}
              <Form.Item
                label={<span className="philosopher-font">OTT Links</span>}
                name="links"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="philosopher-font">
                        Please enter link for each selected platform
                      </span>
                    ),
                  },
                ]}
              >
                <div>
                  {selectedPlatforms.map((platform) => (
                    <Input
                      key={platform}
                      placeholder={`Link for ${platform}`}
                      className="philosopher-font"
                    />
                  ))}
                </div>
              </Form.Item>
            </>
          )}
        </Form>
      </div>

      <div style={{ paddingTop: "2%" }}>
          <h4 className="philosopher-font" style={{ fontWeight: "bold" }}>
            Is any issues in movie?
          </h4>

          <Row gutter={16}>
            <Col span={12}>
            <Form.Item
            label={<span className="philosopher-font">Issue</span>}
            name="issue"
            rules={[{ required: true, message: 'Please enter the issue' }]}
          >
            <Input
              className="philosopher-font"
              value={formValues.issue}
              onChange={(e) => setFormValues({ ...formValues, issue: e.target.value })}
            />
          </Form.Item>
                      </Col>
            <Col span={12}>
              
            <Form.Item
            label={<span className="philosopher-font">Description</span>}
            name="descriptions"
            rules={[{ required: true, message: 'Please enter the description' }]}
          >
            <Input.TextArea
              className="philosopher-font"
              value={formValues.descriptions}
              onChange={(e) => setFormValues({ ...formValues, descriptions: e.target.value })}
            />
          </Form.Item>
            </Col>
          </Row>
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
    style={{ width: '100%' }}
    onChange={handleReleasePlatformChange}
    value={releasePlatform}
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
    style={{ width: '100%' }}
    onChange={(e) => handleReleaseDateChange(e.target.value)}
    value={releaseDate}
  />

                </Form.Item>
              </Col>
            </Row>
          )}
          {releaseStatus === 'yetToBeReleased' && (
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
                    style={{ width: '100%' }}
                    onChange={handlePlatformChange}
                    value={yetToBeReleasedPlatform}
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
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<span className="philosopher-font">Expected Release</span>}
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
                    style={{ width: '100%' }}
                    onChange={(e) => setExpectedReleaseDate(e.target.value)}
                    value={expectedReleaseDate}
                  />
                </Form.Item>
              </Col>
            </Row>
          )}
          
          {releaseStatus === 'dropped' && (
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
                    onChange={(value) => setDropStatus(value)}
                    value={dropStatus}
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
                  <Input.TextArea
                    className="philosopher-font"
                    onChange={(e) => setRemarks(e.target.value)}
                    value={remarks}
                  />
                </Form.Item>
              </Col>
            </Row>
          )}
                  

        

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
