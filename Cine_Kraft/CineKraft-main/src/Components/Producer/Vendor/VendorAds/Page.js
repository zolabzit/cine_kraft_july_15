import React, { useState } from "react";
import { Form, Input, Button, Select, Space, Col, Row,Modal } from "antd";
import { PlusOutlined,DeleteOutlined } from "@ant-design/icons";
import AddCelebrityForm from "../../Celebrity/AddCelebrity";
const { Option } = Select;

const Page = () => {
  const [formData, setFormData] = useState({
    cast: [
      { designation: "", name: "", role: "", charactername: "", remarks: "" },
    ],
    crew: [{ department: "", designation: "", name: "", remarks: "" }], gender: "", name: ""
  });
  const [form] = Form.useForm();
  const [songs, setSongs] = useState([{ key: 0 }]);

  const addSong = () => {
    const newKey = songs[songs.length - 1].key + 1;
    setSongs([...songs, { key: newKey }]);
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const removeSong = (keyToRemove) => {
    setSongs(songs.filter((song) => song.key !== keyToRemove));
  };

  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [maleSingers, setMaleSingers] = useState([
    "Mano",
    "Karthik",
    "Naresh Iyer",
    "Pradeep Kumar",
    "Vijay Antony",
    "Sid Sriram",
  ]);


  const handleAddSinger = (songKey) => {
    const song = songs.find((s) => s.key === songKey); // Find the song object by key
    if (formData.gender === "male" && formData.name.trim() !== "") {
      setMaleSingers([...maleSingers, formData.name]); // Update maleSingers state
      form.setFieldsValue({ [`singerMale_${song.key}`]: [...form.getFieldValue(`singerMale_${song.key}`) || [], formData.name] }); // Update form values
    }
    setIsModalVisible(false);
    setFormData({ ...formData, name: "" }); // Clear the name field
  };
  
   // Function to handle closing the popup
   const handleClosePopup = () => {
    // Close the popup
    setIsPopupVisible(false);
  };
  

  const [isFemaleModalVisible, setIsFemaleModalVisible] = useState(false);
const [femaleFormData, setFemaleFormData] = useState({ name: "" });
const [femaleSingers, setFemaleSingers] = useState([
  "K.S. Chitra",
  "Swetha Mohan",
  "Anuradha Sriram",
  "Saindhavi",
  "Jonita Gandhi",
  "Shreya Ghoshal",
]);

const handleAddFemaleSinger = (songKey) => {
  const song = songs.find((s) => s.key === songKey); // Find the song object by key
  if (femaleFormData.name.trim() !== "") {
    setFemaleSingers([...femaleSingers, femaleFormData.name]); // Update femaleSingers state
    form.setFieldsValue({ [`singerFemale_${song.key}`]: [...form.getFieldValue(`singerFemale_${song.key}`) || [], femaleFormData.name] }); // Update form values
  }
  setIsFemaleModalVisible(false);
  setFemaleFormData({ name: "" }); // Clear the name field
};

  



  return (
    <div>
    <h2
      style={{
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: "3%",
      }}
      className="philosopher-font"
    >
      Songs
    </h2>
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
                                      <AddCelebrityForm/>
                                      {/* Include form fields to add celebrity */}
                                    </Modal>
<Select className="philosopher-font" style={{width:"100%"}} mode="multiple" placeholder="Select male singer(s)">
  {maleSingers.map((singer, index) => (
    <Select.Option className="philosopher-font" key={index} value={singer}>
      {singer}
    </Select.Option>
  ))}
</Select>
<Button
  className="philosopher-font"
  type="dashed"
  style={{ color: "white", backgroundColor: "#022135" }}
  onClick={() => setIsModalVisible(true)}
  icon={<PlusOutlined />}
>
  Add
</Button>

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
message: (<span className="philosopher-font">Please select at least one female singer</span>),
},
]}
>
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
                                     <AddCelebrityForm/>
                                      {/* Include form fields to add celebrity */}
                                    </Modal>
<Select className="philosopher-font" style={{width:"100%"}} mode="multiple" placeholder="Select female singer(s)">
  {femaleSingers.map((singer, index) => (
    <Select.Option className="philosopher-font" key={index} value={singer}>
      {singer}
    </Select.Option>
  ))}
</Select>
<Button
  className="philosopher-font"
  type="dashed"
  style={{ color: "white", backgroundColor: "#022135" }}
  onClick={() => setIsFemaleModalVisible(true)}
  icon={<PlusOutlined />}
>
  Add
</Button>


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
  );
};

export default Page;
