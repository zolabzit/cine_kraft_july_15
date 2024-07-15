import React, { useState } from "react";
import { Card, Col, Row, Modal, Button, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const AwardShowsCards = () => {
  // Replace the Award Shows data accordingly
  const [awardShowsData, setAwardShowsData] = useState([
    {
      eventid: "1",
      eventName: "SIIMA - South Indian International Movie Awards",
      date: "September 15th to 16th, 2023",
      location: "Dubai World Trade Center",
      host: "Sathish (Tamil) | Akul Balaji (Kannada)",
      categories: [
        {
          categoryName: "Best Film(Tamil)",
          nominees: [
            "Love Today",
            "PS 1",
            "Rocketry: The Nambi Effect",
            "Tiruchitrambalam",
            "Vikram",
          ],
          winners: ["PS 1"],
        },
        {
          categoryName: "Best Director(Tamil)",
          nominees: [
            "Gautham Ramachandran for Gargi",
            "Lokesh Kanagaraj for Vikram",
            "Manikandan for Kaidaisi Vivasayi",
            "Maniratnam for Ps",
          ],
          winners: ["Lokesh Kanagaraj for Vikram"],
        },
      ],
      performances: ["GV Prakash Live Singing", "Mrunal Thakur Dance"],
      specialMoments: ["", ""],
      organizers: ["Vibri Media Group"],
      sponsors: ["Nexa"],
      broadcastInfo: {
        channel: "Sun Tv",
        time: "6.30Pm",
      },
      images: [
        "https://cdn.platinumlist.net/upload/event/siima_2023_south_indian_international_mo_2023_sep_16_trade_center_arena_dubai_world_trade_centre_87903-full-en1693638260.png",
        "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-08/whatsapp_image_2023-08-01_at_7.55.40_pm.jpeg?VersionId=t3QAP1MYFRfWIwTJHQdAagm6CCrV5o8F",
      ],
      previousEditions: [
        {
          year: "SIIMA - 2022",
          location: "Palace Ground, Bengaluru, India",
          date: "10-11 September 2022",
          organizedBy: "Vibri Media Group",
          link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
        },
        {
          year: "SIIMA - 2021",
          location:
            "Hyderabad International Convention Center (HICC), Hyderabad, India",
          date: "18-19 September 2021",
          organizedBy: "Vibri Media Group",
          link: "",
        },
      ],
      MediaLinks: {
        Link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
      },
    },
    {
      eventid: "2",
      eventName: "8th Annual BehindWoods Gold Medal Awards",
      date: "May 15 2022 ",
      location: "Chennai",
      host: "Priyanka Deshpande & KPY Dheena",
      categories: [
        {
          categoryName: "Best Film(Tamil)",
          nominees: [
            "Love Today",
            "PS 1",
            "Rocketry: The Nambi Effect",
            "Tiruchitrambalam",
            "Vikram",
          ],
          winners: ["PS 1"],
        },
        {
          categoryName: "Best Director(Tamil)",
          nominees: [
            "Gautham Ramachandran for Gargi",
            "Lokesh Kanagaraj for Vikram",
            "Manikandan for Kaidaisi Vivasayi",
            "Maniratnam for Ps",
          ],
          winners: ["Lokesh Kanagaraj for Vikram"],
        },
      ],
      performances: ["GV Prakash Live Singing", "Mrunal Thakur Dance"],
      specialMoments: ["", ""],
      organizers: ["Behindwoods"],
      sponsors: ["Dazller Eterna"],
      broadcastInfo: {
        channel: "Colors Tv",
        time: "10.00Am",
      },
      images: ["https://i.ytimg.com/vi/Cc8HYywwzYY/maxresdefault.jpg"],
      previousEditions: [
        {
          year: "SIIMA - 2022",
          location: "Palace Ground, Bengaluru, India",
          date: "10-11 September 2022",
          organizedBy: "Vibri Media Group",
          link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
        },
        {
          year: "SIIMA - 2021",
          location:
            "Hyderabad International Convention Center (HICC), Hyderabad, India",
          date: "18-19 September 2021",
          organizedBy: "Vibri Media Group",
          link: "",
        },
      ],
      MediaLinks: {
        Link: "https://www.youtube.com/watch?v=IoeLXB26bC4",
      },
    },
    {
      eventid: "3",
      eventName: "Vijay Awards-10th edition",
      date: "May 2018",
      location: "Chennai",
      host: "DD Neelakandan & Gopinath",
      categories: [
        {
          categoryName: "Best Film(Tamil)",
          nominees: [
            "Love Today",
            "PS 1",
            "Rocketry: The Nambi Effect",
            "Tiruchitrambalam",
            "Vikram",
          ],
          winners: ["PS 1"],
        },
        {
          categoryName: "Best Director(Tamil)",
          nominees: [
            "Gautham Ramachandran for Gargi",
            "Lokesh Kanagaraj for Vikram",
            "Manikandan for Kaidaisi Vivasayi",
            "Maniratnam for Ps",
          ],
          winners: ["Lokesh Kanagaraj for Vikram"],
        },
      ],
      performances: ["Yuvan Live Song", "Live Piano Performance"],
      specialMoments: ["", ""],
      organizers: ["Vijay Television"],
      sponsors: [" Reliance Mobile"],
      broadcastInfo: {
        channel: "STAR Vijay",
        time: "07.00Pm",
      },
      images: [
        "https://i0.wp.com/www.newsbugz.com/wp-content/uploads/2018/05/10th-Annual-Vijay-Awards-Winners-Fe.jpg?resize=1000%2C600&ssl=1",
      ],
      previousEditions: [
        {
          year: "SIIMA - 2022",
          location: "Palace Ground, Bengaluru, India",
          date: "10-11 September 2022",
          organizedBy: "Vibri Media Group",
          link: "https://www.youtube.com/watch?v=w2R5vaTJs3s",
        },
        {
          year: "SIIMA - 2021",
          location:
            "Hyderabad International Convention Center (HICC), Hyderabad, India",
          date: "18-19 September 2021",
          organizedBy: "Vibri Media Group",
          link: "",
        },
      ],
      MediaLinks: {
        Link: "https://www.youtube.com/watch?v=0fefmxozuts",
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
    setEditedData({ ...awardShowsData[index] });
  };

  const handleEdit = () => {
    if (editIndex !== null) {
      const updatedData = [...awardShowsData];
      updatedData[editIndex] = editedData;
      setAwardShowsData(updatedData);
      setEditIndex(null);
    }
  };

  const showDeleteModal = (index) => {
    setDeleteIndex(index);
    setIsDeleteModalVisible(true);
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedData = [...awardShowsData];
      updatedData.splice(deleteIndex, 1);
      setAwardShowsData(updatedData);
      setIsDeleteModalVisible(false);
    }
  };

  const handleCancelDelete = () => {
    setDeleteIndex(null);
    setIsDeleteModalVisible(false);
  };

  const filteredAwardShows = awardShowsData.filter(
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
                        <strong>Categories:</strong>
                        <ul>
                          {awardShow.categories.map((category, index) => (
                            <li key={index}>
                              {category.categoryName} - Winners:{" "}
                              {category.winners.join(", ")}
                            </li>
                          ))}
                        </ul>
                      </p>
                      <p>
                        <strong>Performances:</strong> {awardShow.performances}
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

export default AwardShowsCards;