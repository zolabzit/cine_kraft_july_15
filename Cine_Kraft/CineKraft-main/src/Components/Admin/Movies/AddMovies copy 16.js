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
  
  const handleSubmit = async (values) => {
    try {
      console.log("Form values:", values);
  
      const newMovie = {
        movieName: values.movieName,
        genre: values.genre,
        production: values.production,
        producer: values.producer,
        languages: values.languages,
        runtime: values.runtime,
        budget: values.budget,
        awards: values.awards,
        description: values.description,
        movieSpeciality: values.movieSpeciality,
        inspired: values.inspired,
        movieCensorCertificate: values.movieCensorCertificate,
        oldName: values.oldName,
        images: images, // Correctly set images state
        rating: values.rating,
        // Add additional fields as needed
      };
  
      const response = await axios.post(
        "http://localhost:8080/api/movies",
        newMovie
      );
      console.log("Server response:", response.data);
      // Handle success (e.g., show success message, redirect, etc.)
    } catch (error) {
      console.error("Error saving movie:", error);
      // Handle error (e.g., show error message to user)
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
  const handleReleaseStatusChange = (checkedValues) => {
    setReleaseStatus(checkedValues);
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
