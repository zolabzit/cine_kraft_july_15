import React, { useState } from "react";
import { Card, Col, Row, Modal, Button, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const MusicConcertsCards = () => {
  // Replace the Award Shows data accordingly
  const [PreReEvntsData, setPreReEvntsData] = useState([
    {eventid: "1",
    eventName: "Pre-release event of 'Iraivan'",
    date: "September 24, 2023",
    location: "Chennai",
    host: "VJ Paaru",
    movieCast: "Jayam Ravi, Nayanthara, Rahul Bose, Ashish Vidyarthi, Vijayalakshmi, Narain",
    movieCrew: "I. Ahmed,",
    musicDirector: "Yuvan Shankar Raja",
    productionBanner: "Passion Studios",
    specialGuest: [""],
    contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
    organizers: ["Sudhan, Jayaram G."],
    broadcastInfo: {
      channel: "",
      time: "",
    },
    images: [
    "https://i.ytimg.com/vi/9sX1L1poAwU/maxresdefault.jpg"  
    ],
    MediaLinks: {
      Link: "https://www.youtube.com/watch?v=rO5W4fhbB28",
    },
  },
  {eventid: "2",
  eventName: "Ratham Press Meet",
  date: "September 29, 2023",
  location: "Chennai",
  host: "Unknown",
  movieCast: "Vijay Antony, Mahima Nambiyar, Nanditha Swetha, Remya Nambeesan, Jegan Krishna",
  movieCrew: "C.S. Amudhan, Thozhar Aathi, Athisha, Senthilraghavan, T.S. Suresh",
  musicDirector: "Kannan Narayanan	",
  productionBanner: "Infiniti Film Venture",
  specialGuest: [""],
  contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
  organizers: ["G. Dhananjayan."],
  broadcastInfo: {
    channel: "",
    time: "",
  },
  images: [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2Gae8Mz7NHIe-EB2r-k3cACSNzk0JqdE7DDKj0r2OQkPV69PHjJdWCoAswl0lSyB2oM&usqp=CAU"  
  ],
  MediaLinks: {
    Link: "https://www.youtube.com/watch?v=rXHVi0qdKvk",
  },
},
{eventid: "3",
  eventName: "Don Pre Release Trailer Launch Event",
  date: "May 04, 2022",
  location: "Jeppiar College at Chennai",
  host: "RJ Vijay & VJ Anjana",
  movieCast: "Sivakarthikeyan, Priyanka Mohan, S.J. Suryah, Samuthirakani, RJ Vijay, Soori",
  movieCrew: "Cibi Chakaravarthi, K. M. Bhaskaran, A. Sreekar Prasad, K. Udaya Kumar, Vicky",
  musicDirector: "Anirudh Ravichander",
  productionBanner: "Lyca Productions & Sivakarthikeyan Productions",
  specialGuest: [""],
  contactInfo: "Address: No 9/3, B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
  organizers: ["Lyca Productions"],
  broadcastInfo: {
    channel: "Sun Tv",
    time: "6.30PM",
  },
  images: [
    "https://i.ytimg.com/vi/PTaWlvHnDVE/maxresdefault.jpg"
  ],
  MediaLinks: {
    Link: "https://www.youtube.com/watch?v=BMC6ZFkTVuc",
  },
}
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showEditModal = (index) => {
    setEditIndex(index);
    setEditedData({ ...PreReEvntsData[index] });
  };

  const handleEdit = () => {
    if (editIndex !== null) {
      const updatedData = [...PreReEvntsData];
      updatedData[editIndex] = editedData;
      setPreReEvntsData(updatedData);
      setEditIndex(null);
    }
  };

  const showDeleteModal = (index) => {
    setDeleteIndex(index);
    setIsDeleteModalVisible(true);
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedData = [...PreReEvntsData];
      updatedData.splice(deleteIndex, 1);
      setPreReEvntsData(updatedData);
      setIsDeleteModalVisible(false);
    }
  };

  const handleCancelDelete = () => {
    setDeleteIndex(null);
    setIsDeleteModalVisible(false);
  };

  const filteredAwardShows = PreReEvntsData.filter(
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
                
                style={{ margin: "10px", boxShadow: "2px 5px 5px 3px grey", fontFamily: "'Philosopher', sans-serif"}}
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
                        <strong>Movie Cast:</strong> {awardShow.movieCast}
                      </p>
                      <p>
                        <strong>Movie Crew:</strong> {awardShow.movieCrew}
                      </p>
                      <p>
                        <strong>Music Director:</strong> {awardShow.musicDirector}
                      </p>
                      <p>
                        <strong>Production Banner:</strong> {awardShow.productionBanner}
                      </p>
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
                        <strong>organized By:</strong> {awardShow.organizers}
                      </p>
                      <p>
                        <strong>Contact Info:</strong> {awardShow.contactInfo}
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