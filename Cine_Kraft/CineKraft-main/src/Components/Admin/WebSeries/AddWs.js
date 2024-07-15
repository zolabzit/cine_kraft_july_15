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
  InputNumber,
} from "antd";
import { InboxOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import "../../../Css/Admin.css";
import AddCelebrity from "../Celebrity/AddCelebrity";

const { TabPane } = Tabs;
const { Option } = Select;

const AddWsForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedLanguageType, setSelectedLanguageType] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const handleOTTSelection = (selectedOptions) => {
    setSelectedPlatforms(selectedOptions);
  };

  const [formData, setFormData] = useState({
    cast: [
      { designation: "", name: "", role: "", charactername: "", remarks: "" },
    ],
    crew: [{ department: "", designation: "", name: "", remarks: "" }],
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFormSubmit = (values) => {
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
            designation: "",
            name: "",
            role: "",
            charactername: "",
            remarks: "",
          },
        ],
      });
    } else if (type === "crew") {
      setFormData({
        ...formData,
        crew: [
          ...formData.crew,
          { department: "", designation: "", name: "", remarks: "" },
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
    setHasSongs(e.target.value === 'songs');
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
        setProducers(["A. V. Meiyappa Chettiar", "Aruna Guhan", "Aparna Guhan"]);
        break;
      default:
        setProducers([]);
        break;
    }
  };

  const [seasons, setSeasons] = useState([]);

  const [episodeData, setEpisodeData] = useState({});

  const handleAddSeason = () => {
    const newSeason = `Season ${seasons.length + 1}`;
    setSeasons([...seasons, newSeason]);
    setEpisodeData({ ...episodeData, [newSeason]: 1 });
  };

  const handleSeasonChange = (value) => {
    if (!episodeData[value]) {
      // If episode data for the selected season doesn't exist, initialize it with episode 1
      setEpisodeData({ ...episodeData, [value]: 1 });
    }
  };

  const handleEpisodeChange = (value, season) => {
    setEpisodeData({ ...episodeData, [season]: value });
  };

  const seasonEpisodes = {
    'Season 1': 30,
    'Season 2': 30,
    'Season 3': 30,
    'Season 4': 30,
    'Season 5': 30,
    'Season 6': 30,
    'Season 7': 30,
    'Season 8': 30,
    'Season 9': 30,
    'Season 10': 30,
    'Season 11': 30,
    'Season 12': 30,
    // Add more seasons as needed
  };

  const generateEpisodeTitleFields = (season) => {
    const episodeCount = episodeData[season] || 0;
    const titleFields = [];
    for (let i = 1; i <= episodeCount; i++) {
      titleFields.push(
        <Form.Item className="philosopher-font" key={`${season}-episode-${i}`} label={<span className="philosopher-font">Episode {i} Title</span>}>
          <Input className="philosopher-font"
            placeholder={`Enter title for Episode ${i}`}
            // Add appropriate onChange handler to update episode title
          />
        </Form.Item>
      );
    }
    return titleFields;
  };


  const [socialPlatforms, setSocialPlatforms] = useState([{ platform: '', link: '' }]);
  const [showSocialMediaLinks, setShowSocialMediaLinks] = useState(true);

  const onFinish = (values) => {
    console.log('Social media links:', values);
  };

  const handleAddPlatform = () => {
    setSocialPlatforms([...socialPlatforms, { platform: '', link: '' }]);
  };

  const handleCheckboxSocialChange = (e) => {

    setShowSocialMediaLinks(e.target.checked);
  };
  
  const formFields = [
    {
      label: <span className="philosopher-font">WebSeries Title</span>,
      name: "webseriesName",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter the webseries name
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
        <Select.Option value="Geminin Production" className="philosopher-font">
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
          placeholder={<span className="philosopher-font">Select producer</span>}
          className="philosopher-font"
          disabled={!productionCompany} // Disable the field if no production company is selected
        >
          {producers.map((producer) => (
            <Select.Option key={producer} value={producer} className="philosopher-font">
              {producer}
            </Select.Option>
          ))}
        </Select>
      ),
    },    
    {
      label: <span className="philosopher-font">Language Type</span>,
      name: "languageType",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please select the language type
            </span>
          ),
        },
      ],
      component: (
        <Select
          className="philosopher-font"
          placeholder={
            <span className="philosopher-font">Select language type</span>
          }
          onChange={handleLanguageTypeChange}
        >
          <Option className="philosopher-font" value="lingual">
            Lingual
          </Option>
          <Option className="philosopher-font" value="bilingual">
            Bilingual
          </Option>
          <Option className="philosopher-font" value="multilingual">
            Multilingual
          </Option>
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
          disabled={!selectedLanguageType}
        >
          {selectedLanguageType === "lingual" ? (
            <>
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
            </>
          ) : selectedLanguageType === "bilingual" ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </Select>
      ),
    },
 
    {
      label: <span className="philosopher-font">Budget</span>,
      name: "budget",
      // rules: [
      //   {
      //     required: true,
      //     message: (
      //       <span className="philosopher-font">Please enter the budget</span>
      //     ),
      //   },
      // ],
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
            SIIMA Awards{" "}
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
              Please enter the webseries description
            </span>
          ),
        },
      ],
      component: <Input.TextArea className="philosopher-font" />,
    },
    {
      label: <span className="philosopher-font">WebSeries Speciality</span>,
      name: "webseriesSpeciality",
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
    // {
    //   label: <span className="philosopher-font">Broadcast Channel</span>,
    //   name: "broadcastChannel",
    //   rules: [
    //     {
    //       required: true,
    //       message: (
    //         <span className="philosopher-font">
    //           Please select broadcast channel
    //         </span>
    //       ),
    //     },
    //   ],
    //   component: (
    //     <Select
    //       mode="multiple"
    //       placeholder="Select Broadcast Channel"
    //       className="philosopher-font"
    //     >
    //       <Option value="Sun TV" className="philosopher-font">
    //         Sun TV
    //       </Option>
    //       <Option value="KTV" className="philosopher-font">
    //         KTV
    //       </Option>
    //       <Option value="Vijay TV" className="philosopher-font">
    //         Vijay TV
    //       </Option>
    //       <Option value="Kalaignar TV" className="philosopher-font">
    //         Kalaignar TV
    //       </Option>
    //       <Option value="Jaya TV" className="philosopher-font">
    //         Jaya TV
    //       </Option>
    //     </Select>
    //   ),
    // },
    {
      label: <span className="philosopher-font">OTT Rights</span>,
      name: "ottRights",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">Please select ott rights</span>
          ),
        },
      ],
      component: (
        <Select
          mode="multiple"
          placeholder="Select ott rights"
          className="philosopher-font"
          onChange={(selectedOptions) => handleOTTSelection(selectedOptions)}
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
          <Option value="Zee5 " className="philosopher-font">
            Zee5
          </Option>
          <Option value="SonyLiv " className="philosopher-font">
            SonyLiv
          </Option>
          <Option value="JioCinema" className="philosopher-font">
            JioCinema
          </Option>
        </Select>
      ),
    },
    {
      label: <span className="philosopher-font">OTT Links</span>,
      name: "links",
      rules: [
        {
          required: true,
          message: (
            <span className="philosopher-font">
              Please enter link for each selected platform
            </span>
          ),
        },
      ],
      component: (
        <div>
          {selectedPlatforms.map((platform) => (
            <Input
              key={platform}
              placeholder={`Link for ${platform}`}
              className="philosopher-font"
            />
          ))}
        </div>
      ),
    },
    // {
    //   label: <span className="philosopher-font">WebSeries Certificate</span>,
    //   name: "production",
    //   rules: [
    //     {
    //       required: true,
    //       message: (
    //         <span className="philosopher-font">
    //           Please enter the webseries certificate
    //         </span>
    //       ),
    //     },
    //   ],
    //   component: (
    //     <Select
    //       mode="single"
    //       placeholder={<span className="philosopher-font">Select certificate</span>}
    //       className="philosopher-font"
    //     >
    //       <Option value="U" className="philosopher-font">
    //         U
    //       </Option>
    //       <Option value="U/A" className="philosopher-font">
    //       U/A
    //       </Option>
    //       <Option value="A" className="philosopher-font">
    //         A
    //       </Option>
    //       <Option value="S" className="philosopher-font">
    //         S
    //       </Option>
    //     </Select>
    //   ),
    // },
    {
      label: <span className="philosopher-font">Old Name</span>,
      name: "oldName",
     
      component: <Input className="philosopher-font" placeholder="Old webseries name if any" />,
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
            <span className="philosopher-font">Please rate the webseries</span>
          ),
        },
      ],
      component: <Rate className="philosopher-font" />,
    },
  ];

  return (
    <div style={{ padding: "1%" }}>
      <h2 className="mt-3 mb-3">Add WebSeries</h2>
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
            {formFields.slice(0, 9).map((field) => (
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
            {formFields.slice(9).map((field) => (
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


{/* seasons and episodes */}
<Row gutter={16}>
      <Col span={24}>
        <div style={{ paddingBottom: '2%' }}>
          <h4 className="philosopher-font" style={{ fontWeight: 'bold' }}>
            Seasons & Episodes
          </h4>
          <Row gutter={16}>
            {seasons.map((season, index) => (
              <Col md={12} key={index}>
                <div>
                  <Form.Item>
                    <Select
                      className="philosopher-font"
                      style={{ width: 100 }}
                      onChange={(value) => handleSeasonChange(value, season)}
                      value={season}
                    >
                      {Object.keys(seasonEpisodes).map((season) => (
                        <Option
                          className="philosopher-font"
                          key={season}
                          value={season}
                        >
                          {season}
                        </Option>
                      ))}
                    </Select>
                    <InputNumber
                      placeholder={<span className="philosopher-font">Episode</span>}
                      min={1}
                      max={seasonEpisodes[season]}
                      style={{ width: 100, marginLeft: '1rem' }}
                      onChange={(value) => handleEpisodeChange(value, season)}
                      value={episodeData[season]}
                      disabled={!season}
                    />
                  </Form.Item>
                  {/* Dynamically generated episode title fields */}
                  {generateEpisodeTitleFields(season)}
                </div>
              </Col>
            ))}
          </Row>
          <Button
            className="philosopher-font"
            style={{ backgroundColor: '#022135', color: 'white' }}
            onClick={handleAddSeason}
          >
            Add Season
          </Button>
        </div>
      </Col>
    </Row>



   {/* Release status */}
   <div>
      <h4 className="philosopher-font" style={{ fontWeight: "bold" }}>
        Release Status
      </h4>
      <Form.Item>
        <Radio.Group onChange={handleReleaseStatusChange} value={releaseStatus}>
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
              >
                <Select.Option className="philosopher-font" value="theatres">Theatres</Select.Option>
                <Select.Option className="philosopher-font" value="ott">OTT</Select.Option>
                <Select.Option className="philosopher-font" value="satellite">Satellite</Select.Option>
              </Select>
            </Form.Item>
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
                placeholder={<span className="philosopher-font">Select platform</span>}
                style={{ width: "100%" }}
              >
                <Select.Option className="philosopher-font" value="theatres">Theatres</Select.Option>
                <Select.Option className="philosopher-font" value="ott">OTT</Select.Option>
                <Select.Option className="philosopher-font" value="satellite">Satellite</Select.Option>
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
                                  name={[name, "designation"]}
                                  fieldKey={[fieldKey, "designation"]}
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
                                        "designation",
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
                                  name={[name, "name"]}
                                  fieldKey={[fieldKey, "name"]}
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
                                      {formData.cast[fieldKey]?.designation ===
                                        "Actor" && (
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
                                      {formData.cast[fieldKey]?.designation ===
                                        "Actress" && (
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
                                  name={[name, "role"]}
                                  fieldKey={[fieldKey, "role"]}
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
                                  name={[name, "charactername"]}
                                  fieldKey={[fieldKey, "charactername"]}
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
                                  name={[name, "remarks"]}
                                  fieldKey={[fieldKey, "remarks"]}
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
                                  name={[name, "designation"]}
                                  fieldKey={[fieldKey, "designation"]}
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
                                        "designation",
                                        value,
                                        "cast"
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
                                  name={[name, "name"]}
                                  fieldKey={[fieldKey, "name"]}
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
                                      {formData.cast[fieldKey]?.designation ===
                                        "Director" && (
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
                                      {formData.cast[fieldKey]?.designation ===
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
                                  name={[name, "remarks"]}
                                  fieldKey={[fieldKey, "remarks"]}
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
 <div style={{display:"flex", justifyContent:"center"}}>
 <Radio.Group onChange={handleRadioChange} defaultValue="songs">
        <Radio className="philosopher-font" value="songs" style={{fontSize:"18px"}}>Songs</Radio>
        <Radio className="philosopher-font" value="no-songs" style={{fontSize:"18px"}}>No Songs</Radio>
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
                   label={<span className="philosopher-font">Song No.</span>}
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
                     <Option className="philosopher-font" value="Karthik">
                       Karthik
                     </Option>
                     <Option className="philosopher-font" value="Narsh Iyer">
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
                     <Option className="philosopher-font" value="Sid Sriram">
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
                   label={<span className="philosopher-font">Female</span>}
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
                     <span className="philosopher-font">Lyricist(s)</span>
                   }
                   name={`lyricist_${song.key}`}
                   rules={[
                     { required: true, message: "Please select lyricist" },
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
                     <Option className="philosopher-font" value="Kannadasan">
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
                     <Option className="philosopher-font" value="Thamarai">
                       Thamarai
                     </Option>
                     <Option className="philosopher-font" value="Vairamuthu">
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
                   label={<span className="philosopher-font">Music</span>}
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
                     <Option className="philosopher-font" value="A.R.Rahman">
                       A.R.Rahman
                     </Option>
                     <Option
                       className="philosopher-font"
                       value="Vijay Antony"
                     >
                       Vijay Antony
                     </Option>
                     <Option className="philosopher-font" value="Anirudh">
                       Anirudh
                     </Option>
                     <Option
                       className="philosopher-font"
                       value="Hiphop Tamizha"
                     >
                       Hiphop Tamizha
                     </Option>
                     <Option className="philosopher-font" value="Vidyasagar">
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
                   label={<span className="philosopher-font">Choreo</span>}
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
                   label={<span className="philosopher-font">Award(s)</span>}
                   name={`awards${song.key}`}
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
                   label={<span className="philosopher-font">Remarks</span>}
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
       

        {/* important links */}
        <div>
                   <div>
         
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
        <Form.Item >
          <Checkbox style={{fontSize:"18px"}} className="philosopher-font" checked={showSocialMediaLinks} onChange={handleCheckboxSocialChange}>
            Social Media Links
          </Checkbox>
        </Form.Item>
        {showSocialMediaLinks &&
          socialPlatforms.map((platform, index) => (
            <Space key={index} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <Row>
                <Col md={24}>
                <Form.Item className="philosopher-font"
                {...platform}
                label={<span className="philosopher-font">Platform</span>}
                name={['socialPlatforms', index, 'platform']}
                fieldKey={[index, 'platform']}
                rules={[{ required: true, message: (<span className="philosopher-font">Please select platform</span>) }]}
              >
                  <Select className="philosopher-font" placeholder={<span className="philosopher-font">Platform</span>}>
                  <Option className="philosopher-font" value="Facebook">Facebook</Option>
                  <Option className="philosopher-font" value="Twitter">Twitter</Option>
                  <Option className="philosopher-font" value="Instagram">Instagram</Option>
                  <Option className="philosopher-font" value="Youtube">Youtube</Option>
                  <Option className="philosopher-font" value="Pinterest">Pinterest</Option>
                  
                </Select>
              </Form.Item>
                </Col>
     
                <Form.Item
                {...platform}
                label={<span className="philosopher-font">Link</span>}
                name={['socialPlatforms', index, 'link']}
                fieldKey={[index, 'link']}
                rules={[{ required: true, message: (<span className="philosopher-font">Please input the link!</span>) }]}
              >
                <Input className="philosopher-font" placeholder="Link" />
              </Form.Item>
                
              {index === socialPlatforms.length - 1 && (
                <DeleteOutlined
                  style={{ color: 'red' , marginBottom:"20px"}}
                  onClick={() => setSocialPlatforms(socialPlatforms.slice(0, -1))}
                />
              )}
              </Row>
          
           
           
                 
            </Space>
            
          ))}
     
       
     <Form.Item>
          <Button type="dashed" onClick={handleAddPlatform} icon={<PlusOutlined />}>
            Add More
          </Button>
        </Form.Item>
      
        </div>

        {/*  cases  */}
        <div style={{ paddingTop: "2%" }}>
          <h4 className="philosopher-font" style={{ fontWeight: "bold" }}>
            Is any issues in webseries?
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
                label={
                  <span className="philosopher-font">Description</span>
                }
                name="description"
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

export default AddWsForm;
