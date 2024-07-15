import React, { useState } from "react";
import { Card, Col, Row, Modal, Button, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const MusicConcertsCards = () => {
  // Replace the Award Shows data accordingly
  const [AudioLaunchData, setAudioLaunchData] = useState([
    {eventid: "1",
    eventName: "Varisu Audio Launch",
    date: "24 December 2022",
    location: " Jawaharlal Nehru Stadium - Chennai",
    host: "Raju Jeyamohan & Ramya",
    movieCast: "Vijay, Rashmika Mandana,Prakash Raj, Sarathkumar, Sangeetha, Jayasudha, Meka Srinath, S.J. Suryah",
    movieCrew: "Vamshi Padipally, Vivek, S. Thaman, Karthik Palani, Dil Raju",
    performances: ["Thaman & Jonita Live performance", "Ranjithamae Song Performance"],
    specialMoments: ["30 Years of Vijay Tribute Performance to Vijay"],
    organizers: ["Sri Venkateswara Creations"],
    sponsors: ["Dil Raju & Lalit Kumar"],
    ticket: "₹7000",
    productionBanner: "Sri Venkateswara Creations",
    broadcastInfo: {
      channel: "Sun Tv",
      time: "6.30Pm",
    },
    images: [
    "https://i.ytimg.com/vi/_Q-WrXKzIM8/maxresdefault.jpg" 
    ],
    MediaLinks: {
      Link: "https://www.youtube.com/watch?v=_Q-WrXKzIM8",
    },
    description: "Thalapathy Vijay's fans are waiting with bated breath for his speech at the Varisu audio launch. The event is scheduled to take place on December 24 at Nehru Stadium in Chennai. Ahead of the audio launch, passes are being distributed to the fans across Tamil Nadu.",
  },
  {eventid: "2",
  eventName: "Jailer Audio Launch",
  date: "28th July 2023",
  location: "Nehru Indoor Stadium - Chennai",
  host: "Kavin & Ramya",
  movieCast: "Rajinikanth, Ramya Krishnan, Vinayakan, Mohanlal, Dr. Shiva Rajkumar, Mirna Menon, Vasanth Ravi",
  movieCrew: "Nelson Dilipkumar, Anirudh Ravichander, Vijay Karthik Kannan, R.Nirmal, Raja Sridhar",
  performances: ["Tamannah Bhatia Dance performance & Anirudh Live Song"],
  specialMoments: [""],
  organizers: ["Sun Pictures"],
  sponsors: ["Kalanithi Maaran"],
  ticket: "₹1000",
  productionBanner: "Sun Pictures",
  broadcastInfo: {
    channel: "Sun Tv",
    time: "6.30Pm",
  },
  images: [
  "https://www.sarkariexam.com/wp-content/uploads/2023/07/Jailer-Audio-Launch-tickets-booking-date-other-details.jpg" 
  ],
  MediaLinks: {
    Link: "https://www.youtube.com/watch?v=zvzzqzOIUlY",
  },
  description: "Mohanlal, Shivarajkumar, Jackie Shroff, Ramya Krishnan, Tamannaah Bhatia and Sunil are some of the big names who will grace the occasion with their presence. The music of Jailer is composed by Anirudh Ravichander, who has delivered some chartbusters for Rajinikanth.",
},
{eventid: "3",
    eventName: "Jawan Audio Launch",
    date: "30 August 2023",
    location: "Sri Sai Ram Engineering College - Chennai",
    host: "VJ Vijay & Bhaavana",
    movieCast: "Shah Rukh Khan, Nayanthara, Vijay Sethupathi, Sanya Malhotra, Priyamani, Riddhi Dogra",
    movieCrew: "Atlee Kumar, Anirudh Ravichandran, Gauri Khan, G.k. Vishnu, Ruben, T. Muthuraj",
    performances: ["Anirudh Live Performance"],
    specialMoments: [""],
    organizers: ["Red Chillies Entertainment"],
    sponsors: ["Gauri Khan, Gaurav Varma"],
    ticket: "₹1500",
    productionBanner: "Red Chillies Entertainment",
    broadcastInfo: {
      channel: "Sun Tv",
      time: "6.30Pm",
    },
    images: [
    "https://i.ytimg.com/vi/ZLNeLC4t4jw/maxresdefault.jpg" 
    ],
    MediaLinks: {
      Link: "https://www.youtube.com/watch?v=ZLNeLC4t4jw",
    },
    description: "The actors and makers of the 2023 Pan Indian film 'Jawan' gather to officially launch the soundtrack of the movie and share their experiences of working on the project.",
  },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showEditModal = (index) => {
    setEditIndex(index);
    setEditedData({ ...AudioLaunchData[index] });
  };

  const handleEdit = () => {
    if (editIndex !== null) {
      const updatedData = [...AudioLaunchData];
      updatedData[editIndex] = editedData;
      setAudioLaunchData(updatedData);
      setEditIndex(null);
    }
  };

  const showDeleteModal = (index) => {
    setDeleteIndex(index);
    setIsDeleteModalVisible(true);
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedData = [...AudioLaunchData];
      updatedData.splice(deleteIndex, 1);
      setAudioLaunchData(updatedData);
      setIsDeleteModalVisible(false);
    }
  };

  const handleCancelDelete = () => {
    setDeleteIndex(null);
    setIsDeleteModalVisible(false);
  };

  const filteredAwardShows = AudioLaunchData.filter(
    (awardShow) =>
      awardShow.eventName &&
      awardShow.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
   
      <div>
        <label
          htmlFor="searchInput"
          style={{ marginRight: "10px", paddingTop: "3%" }}
        >
          <b> Search :</b>
        </label>
        <div style={{ width: "20%" }}>
          <Input style={{fontFamily: "'Philosopher', sans-serif"}}
            placeholder="Search award shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Row gutter={16} style={{ paddingTop: "3%" }}>
          {filteredAwardShows.map((awardShow, index) => (
            <Col span={8} key={index} style={{ paddingBottom: "3%" }}>
              <Card
                title={awardShow.eventName}
                style={{ margin: "10px", boxShadow: "2px 5px 5px 3px grey",fontFamily: "'Philosopher', sans-serif" }}
                actions={[
                  <Button style={{fontFamily: "'Philosopher', sans-serif"}}
                    type="primary"
                    danger
                    icon={<EditOutlined />}
                    onClick={() => showEditModal(index)}
                  >
                    Edit
                  </Button>,
                  <Button style={{fontFamily: "'Philosopher', sans-serif"}}
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => showDeleteModal(index)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  <img
                    src={awardShow.images[0]}
                    alt={awardShow.eventName}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "180px",
                      objectFit: "cover",
                      borderRadius: "2%",
                    }}
                  />
                  {editIndex === index ? (
                    <div>
                      <Input
                        value={editedData.eventName}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            eventName: e.target.value,
                          })
                        }
                      />
                      <Input
                        value={editedData.location}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            location: e.target.value,
                          })
                        }
                      />
                      {/* Add other input fields for other attributes here */}
                    </div>
                  ) : (
                    <>
                    <p>
                        <strong>Location:</strong> {awardShow.location}
                      </p>
                      <p>
                        <strong>Date:</strong> {awardShow.date}
                      </p>
                      <p>
                        <strong>Host:</strong> {awardShow.host}
                      </p>
                      <p>
                        <strong>Performances:</strong> {awardShow.performances}
                      </p>
                      <p>
                        <strong>Movie Cast:</strong> {awardShow.movieCast}
                      </p>
                      <p>
                        <strong>Movie Crew:</strong> {awardShow.movieCrew}
                      </p>
                      <p>
                        <strong>organized By:</strong> {awardShow.organizers}
                      </p>
                      <p>
                        <strong>Sponsors:</strong> {awardShow.sponsors}
                      </p>
                      <p>
                        <strong>Broadcast Info:</strong>{" "}
                        {awardShow.broadcastInfo.channel} at{" "}
                        {awardShow.broadcastInfo.time}
                      </p>

                      <p>
                        <strong>Media Links:</strong>{" "}
                        <a
                          href={awardShow.MediaLinks.Link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {awardShow.MediaLinks.Link}
                        </a>
                      </p>

                      {/* Add other attributes here */}
                    </>
                  )}
                  {editIndex === index && (
                    <Button type="primary" onClick={handleEdit}>
                      Save
                    </Button>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Modal
          title="Confirm Delete"
          visible={isDeleteModalVisible}
          onOk={handleDelete}
          onCancel={handleCancelDelete}
        >
          Are you sure you want to delete this award show entry?
        </Modal>
      </div>
   
  );
};

export default MusicConcertsCards;