import React, { useState } from "react";
import { Card, Col, Row, Modal, Button, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const MusicConcertsCards = () => {
  // Replace the Award Shows data accordingly
  const [MusicConcertsData, setMusicConcertsData] = useState([
    {eventid: "1",
    eventName: " Good Devil Vijay Antony Live Concert",
    dateTime: "September 9 | Gates to the venue opens at 4PM | Event starts between 5 PM and 5:30 PM",
    location: "YMCA Ground, Nandanam, Chennai",
    musicDirector: "Vijay Antony",
    performances: ["Live Singing"],
    specialMoments: ["Puli Urumbuthu & Pacha thanni Song vibe"],
    ticket: "₹499 onwards (Inclusive of GST)",
    organizers: ["Noise And Grains"],
    contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1692518176%2Fuzsewrmzjn8zxr8psceo.jpg",
      
    ],
    previousEditions: [
      {
        year: "Pradeep Kumar Live Concert",
        location: "Palace Ground, Bengaluru, India",
        date: "10-11 September 2023",
        organizedBy: "Vibri Media Group",
        link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
      },
      {
        year: "GV Prakash kumar's AAYIRATHIL ORUVAN",
        location:
          "Codissia Ground, Coimbatore",
        date: "May 27 | 6:30PM",
        organizedBy: "Vibri Media Group",
        link: "",
      },
    ],
    MediaLinks: {
      Link: "https://insider.in/vijay-antony-live-in-concert-chennai-sep9-2023/event",
    },
  },
  {eventid: "2",
    eventName: "GV Prakash kumar's AAYIRATHIL ORUVAN",
    dateTime: "May 27 | 6:30PM",
    location: "Codissia Ground, Coimbatore",
    musicDirector: "GV Prakash kumar",
    performances: ["Live Singing & Instrumental"],
    specialMoments: ["Aauirathil Oruvan & Pookal Pookum tharunam Song"],
    ticket: "₹299 onwards (Incluisve of GST)",
    organizers: ["MK Entertainment"],
    contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1683545827%2Fgwhcmobqegzjyyqgbnyn.jpg",
      
    ],
    previousEditions: [
      {
        year: "Pradeep Kumar Live Concert",
        location: "Palace Ground, Bengaluru, India",
        date: "10-11 September 2023",
        organizedBy: "Vibri Media Group",
        link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
      },
      {
        year: "Ar Rahman Marakuma Nenjam",
        location:
          "Codissia Ground, Coimbatore",
        date: "May 27 | 6:30PM",
        organizedBy: "Vibri Media Group",
        link: "",
      },
    ],
    MediaLinks: {
      Link: "https://insider.in/gv-prakash-kumar-live-in-aayorathil-oruvan-may27-2023/event",
    },
  },
  {eventid: "3",
    eventName: "Rock On Harrish Live Concert",
    dateTime: "October 27 | Gate Opens - 5:30 PM | Event starts - 7:30 PM",
    location: "YMCA Ground, Nandanam, Chennai",
    musicDirector: "Harrish Jayaraj",
    performances: ["Live Singing"],
    specialMoments: ["TBA"],
    ticket: "₹999 onwards (Inclusive of GST)",
    organizers: ["The Route & NG"],
    contactInfo: "Address: No 9/3 ,B.N Reddy road, N Boag Rd, T. Nagar, Chennai, Tamil Nadu 600017, Phone: 044 4858 8687",
    images: [
      "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1692940232%2Fwez4epu3zae72ti2yiiy.jpg",
      
    ],
    previousEditions: [
      {
        year: "Pradeep Kumar Live Concert",
        location: "Palace Ground, Bengaluru, India",
        date: "10-11 September 2023",
        organizedBy: "Vibri Media Group",
        link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
      },
      {
        year: "GV Prakash kumar's AAYIRATHIL ORUVAN",
        location:
          "Codissia Ground, Coimbatore",
        date: "May 27 | 6:30PM",
        organizedBy: "Vibri Media Group",
        link: "",
      },
    ],
    MediaLinks: {
      Link: "https://insider.in/vijay-antony-live-in-concert-chennai-sep9-2023/event",
    },
  },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showEditModal = (index) => {
    setEditIndex(index);
    setEditedData({ ...MusicConcertsData[index] });
  };

  const handleEdit = () => {
    if (editIndex !== null) {
      const updatedData = [...MusicConcertsData];
      updatedData[editIndex] = editedData;
      setMusicConcertsData(updatedData);
      setEditIndex(null);
    }
  };

  const showDeleteModal = (index) => {
    setDeleteIndex(index);
    setIsDeleteModalVisible(true);
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedData = [...MusicConcertsData];
      updatedData.splice(deleteIndex, 1);
      setMusicConcertsData(updatedData);
      setIsDeleteModalVisible(false);
    }
  };

  const handleCancelDelete = () => {
    setDeleteIndex(null);
    setIsDeleteModalVisible(false);
  };

  const filteredAwardShows = MusicConcertsData.filter(
    (awardShow) =>
      awardShow.eventName &&
      awardShow.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

      <div>
        <label
          htmlFor="searchInput"
          style={{ marginRight: "10px", paddingTop: "3%", }}
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
                        <strong>Date & Time:</strong> {awardShow.dateTime}
                      </p>
                      <p>
                        <strong>Location:</strong> {awardShow.location}
                      </p>
                      <p>
                        <strong>Music Director:</strong> {awardShow.musicDirector}
                      </p>
                      <p>
                        <strong>Performances:</strong> {awardShow.performances}
                      </p>
                      <p>
                        <strong>special Moments:</strong> {awardShow.specialMoments}
                      </p>
                      <p>
                        <strong>Ticket Price:</strong> {awardShow.ticket}
                      </p>
                      <p>
                        <strong>organized By:</strong> {awardShow.organizers}
                      </p>
                      <p>
                        <strong>Organizer Contact Info:</strong> {awardShow.contactInfo}
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

                      <p>
                        <strong>Previous Editions:</strong>
                        <ul>
                          {awardShow.previousEditions.map((edition, index) => (
                            <li key={index}>
                              Year: {edition.year}, Location: {edition.location}
                              , Date: {edition.date}, Organized By:{" "}
                              {edition.organizedBy}
                            </li>
                          ))}
                        </ul>
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