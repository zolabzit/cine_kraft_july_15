import React, { useState } from "react";
import { Card, Col, Row, Modal, Button, Input } from "antd";
import { Container } from "react-bootstrap";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const VideoAlbum = () => {
    const [VideoAlbumData, setVideoAlbumData] = useState([
        {
          "title": "Naam - Adi Penne",
          "director": "T Suriavelan",
          "DOP": "Segar Varathan | Murali Murugan ",
          "Lyrics": "T Suriavelan",
          "language": "Tamil",
          "Vocals": "Stephen Zechariah ft. Srinisha Jayaseelan",
          "Producer": "Manju Balakrishnan",
          "cast": "T Suriavelan | Rupini Anbalagan",
          "editor": "T Suriavelan ",
          "production": "360 Entertainment",
          "Choreography": "Lavania Priya",
          "SongComposer": "T Suriavelan ",
          "image": "https://i.ytimg.com/vi/5guTzYAEWKE/maxresdefault.jpg"
        },
        {
            "title": "Usuraiya Tholaichaen",
            "director": "T Suriavelan",
            "DOP": "Aran Hari | Dinesh Gopal",
            "Lyrics": "Suriavelan",
            "language": "Tamil",
            "Vocals": "Stephen Zechariah | Pragathi Guruprasad ",
            "Producer": "Isabelle Love Saritha",
            "cast": "Suriavelan | Rupini Anblagan ",
            "editor": "A M Rahamathulla (Chennai) (AH Studios)",
            "production": "Vikadakavi Productions",
            "Choreography": "TBA",
            "SongComposer": "Stephen Zechariah",
            "image": "https://i.ytimg.com/vi/auCAzRGAJbM/maxresdefault.jpg"
          },
          {
            "title": "Aakko - Enakenna Yaarum Illaye Lyric",
            "director": "M. Shyam Kumar",
            "DOP": "TBA",
            "Lyrics": "Vignesh Shivan",
            "language": "Tamil",
            "Vocals": "Anirudh Ravichander",
            "Producer": "Deepan Boopathy, Ratesh Velu",
            "cast": "Geethan Britto, Tulika Gupta",
            "editor": "TBA",
            "production": "Rebel Studio",
            "Choreography": "TBA",
            "SongComposer": "Anirudh Ravichander",
            "image": "https://i.ytimg.com/vi/LwUJR22bGGI/maxresdefault.jpg"
          },
          {
            "title": "Avalukena - Song Video",
            "director": "Vignesh Shivan",
            "DOP": "TBA",
            "Lyrics": "Vignesh Shivan",
            "language": "Tamil",
            "Vocals": "Anirudh Ravichander & Srinidhi Venkatesh",
            "Producer": "Anirudh Ravichander",
            "cast": "Anirudh Ravichander",
            "editor": "TBA",
            "production": "TBA",
            "Choreography": "",
            "SongComposer": "Anirudh Ravichander",
            "image": "https://i.ytimg.com/vi/ww661Eb3iBY/maxresdefault.jpg"
          },
           {
            "title": "Namma Chennai Chancey Illa",
            "director": "Vignesh Shivan",
            "DOP": "George.C.Williams",
            "Lyrics": "Vignesh Shivan",
            "language": "Tamil",
            "Vocals": "Anirudh Ravichander",
            "Producer": "The Times of India ",
            "cast": "Anirudh Ravichander",
            "editor": "S.Sivakumar",
            "production": "The Times of India ",
            "Choreography": "Sathish",
            "SongComposer": "Anirudh Ravichander",
            "image": "https://i.ytimg.com/vi/0D514pRumgw/maxresdefault.jpg"
          },
         //   {
        //     "title": "",
        //     "director": "",
        //     "DOP": "",
        //     "Lyrics": "",
        //     "language": "",
        //     "Vocals": "",
        //     "Producer": "",
        //     "cast": "",
        //     "editor": "",
        //     "production": "",
        //     "Choreography": "",
        //     "SongComposer": "",
        //     "image": ""
        //   },
      ]);

      const [searchQuery, setSearchQuery] = useState("");

      const [editIndex, setEditIndex] = useState(null);
      const [editedData, setEditedData] = useState({});
    
      const [deleteIndex, setDeleteIndex] = useState(null);
      const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    
      const showEditModal = (index) => {
        setEditIndex(index);
        setEditedData({ ...VideoAlbumData[index] });
      };
    
      const handleEdit = () => {
        if (editIndex !== null) {
          const updatedData = [...VideoAlbumData];
          updatedData[editIndex] = editedData;
          setVideoAlbumData(updatedData);
          setEditIndex(null);
        }
      };
    
      const showDeleteModal = (index) => {
        setDeleteIndex(index);
        setIsDeleteModalVisible(true);
      };
    
      const handleDelete = () => {
        if (deleteIndex !== null) {
          const updatedData = [...VideoAlbumData];
          updatedData.splice(deleteIndex, 1);
          setVideoAlbumData(updatedData);
          setIsDeleteModalVisible(false);
        }
      };
    
      const handleCancelDelete = () => {
        setDeleteIndex(null);
        setIsDeleteModalVisible(false);
      };
    
      const filteredVideos = VideoAlbumData.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <Container>
    <div >
      <h4 className="mt-3 mb-3">Video Album Songs</h4>
      <hr />

      <label htmlFor="searchInput" style={{ marginRight: "10px",paddingTop:"3%", }}>
             <b> Search :</b>
            </label>
      <div style={{ width:"20%"}}>
        <Input style={{fontFamily: "'Philosopher', sans-serif"}}
          placeholder="Search videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Row gutter={16} style={{ paddingTop: "3%" }}>
        {filteredVideos.map((video, index) => (
          <Col span={8} key={index} style={{ paddingBottom: "3%" }}>
            <Card
              title={video.title}
              extra={video.language}
              style={{ margin: "10px", boxShadow: "2px 5px 5px 3px grey", fontFamily: "'Philosopher', sans-serif" }}
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
                  src={video.image}
                  alt={video.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                    borderRadius: "2%",
                  }}
                />
                {editIndex === index ? (
                  <div>
                    <Input
                      value={editedData.title}
                      onChange={(e) =>
                        setEditedData({
                          ...editedData,
                          title: e.target.value,
                        })
                      }
                    />
                    <Input
                      value={editedData.description}
                      onChange={(e) =>
                        setEditedData({
                          ...editedData,
                          description: e.target.value,
                        })
                      }
                    />
                    <Input
                      value={editedData.director}
                      onChange={(e) =>
                        setEditedData({
                          ...editedData,
                          director: e.target.value,
                        })
                      }
                    />
                    {/* Add other input fields for other attributes here */}
                  </div>
                ) : (
                  <>
                    <p><strong>Director :</strong> {video.director}</p>
                    <p><strong>Starring :</strong> {video.cast}</p>
                    <p><strong>Vocals :</strong> {video.Vocals}</p>
                    <p><strong>Music :</strong> {video.SongComposer}</p>
                    <p><strong>DOP :</strong> {video.DOP}</p>
                    <p><strong>Lyrics :</strong> {video.Lyrics}</p>
                    <p><strong>Editor :</strong> {video.editor}</p>
                    <p><strong>Production :</strong> {video.production}</p>
                    <p><strong>Producer :</strong> {video.Producer}</p>
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
        Are you sure you want to delete this video entry?
      </Modal>
    </div>
  </Container>

  );
};

export default VideoAlbum;
