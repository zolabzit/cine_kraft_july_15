import React, { useState } from "react";
import { Row, Col, Container, Card, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../WebSeries/WebSeries.css";
import Header from '../Header';
import Footer from "../Footer";
const TheatresData = [
    // Tamil Theatres
    {
      id: 1,
      name: "Lyca Cinemas",
      location: "Chennai",
      capacity: 500,
      screens: 5,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgEBYRBKTKyYmezfJBRitQh0Iou3KvmqpJA&s",
      link: "/Theatres/LycaCinemas"
    },
    {
      id: 2,
      name: "Sun Theatres",
      location: "Coimbatore",
      capacity: 400,
      screens: 4,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMs1GRBASCSVYX0K5xHitQuCG3z7hP4FAzO89TZAuu__eD8urs8x75x6uSZyJgNcDVgR0&usqp=CAU",
    },
    {
      id: 3,
      name: "Red Giant Cinema",
      location: "Madurai",
      capacity: 300,
      screens: 3,
      imageUrl: "https://pbs.twimg.com/profile_images/1602627066486480896/KElgmfrz_400x400.jpg",
    },
    {
      id: 4,
      name: "AGS Multiplex",
      location: "Chennai",
      capacity: 600,
      screens: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/25/Ags_entertainment.jpg",
    },
    {
      id: 5,
      name: "Thenandal Screens",
      location: "Trichy",
      capacity: 450,
      screens: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/cf/Logo_of_Thenandal_Studio_Limited.jpg",
    },
    {
      id: 6,
      name: "Sathya Jyothi Cinemas",
      location: "Coimbatore",
      capacity: 350,
      screens: 3,
      imageUrl: "https://yt3.googleusercontent.com/ytc/AIdro_k_7WEvb2OCyQ_uvgzELlCsGEqKdTf0SagQ_O_LH-Wg3Q=s900-c-k-c0x00ffffff-no-rj",
    },
  
    // Kannada Theatres
    {
      id: 7,
      name: "Hombale Multiplex",
      location: "Bengaluru",
      capacity: 700,
      screens: 7,
      imageUrl: "https://images.ottplay.com/images/hombale-films-1706169145.jpg",
    },
    {
      id: 8,
      name: "Rockline Cinemas",
      location: "Mysuru",
      capacity: 500,
      screens: 5,
      imageUrl: "https://yt3.googleusercontent.com/ytc/AIdro_mQn33YdYYrutrDN7gOTq0hYmYB-ns1FWATBHjHiJ6xGA=s900-c-k-c0x00ffffff-no-rj",
    },
  ];
  
  
  


function Theatres() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleFilterIconClick = () => {
    setShowFilterModal(true);
  };

  const handleFilterModalClose = () => {
    setShowFilterModal(false);
  };

  const handleClearFilters = () => {
    setSelectedGenres([]);
    setShowFilterModal(false);
  };

  const handleGenreCheckboxChange = (genre) => {
    const updatedGenres = [...selectedGenres];
    const index = updatedGenres.indexOf(genre);

    if (index === -1) {
      updatedGenres.push(genre);
    } else {
      updatedGenres.splice(index, 1);
    }

    setSelectedGenres(updatedGenres);
  };

  const filteredSeries =
    selectedGenres.length === 0
      ? TheatresData
      : TheatresData.filter((series) => selectedGenres.includes(series.genre));

  return (
    <div>
      <Header/>
      <div className="about">
        <Container >
          <h1 style={{ paddingTop: "8%"}}>Theatres</h1>
          <div>
            <Row>
              <Col style={{marginLeft:'90%'}}>
              <Button
                variant="outline-dark"
                style={{ float: 'right', marginBottom: '20px', marginRight: '20px' }}
                onClick={handleFilterIconClick}
              >
                <FontAwesomeIcon icon="filter" style={{ marginRight: '5px' }} />
                Filter
              </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            {filteredSeries.map((series) => (
              <Col
                style={{ paddingTop: "2%" }}
                key={series.id}
                xs={12}
                sm={6}
                md={4}
                lg={2}
              >
                <a href={series.link} alt="" style={{ textDecoration: "none" }}>
                  <Card
                    className="tv-show-card"
                    style={{ width: "100%", marginBottom: "15px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={series.imageUrl}
                      style={{ width: "100%", height: "150px", borderRadius:"10px"}}
                    />
                    <Card.Body>
                      <Card.Title>{series.title}</Card.Title>
                      <Card.Text style={{fontSize:"16px"}}><b>{series.name}</b></Card.Text>
                      <Card.Text><b>Location : </b>{series.location}</Card.Text>
                      <Card.Text><b>Capacity : </b>{series.capacity}</Card.Text>
                      <Card.Text><b>Screens : </b>{series.screens}</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div style={{paddingBottom:"5%"}}>
      <Modal show={showFilterModal} onHide={handleFilterModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter by Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {Array.from(new Set(TheatresData.map((series) => series.genre))).map((genre, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                id={`genre-checkbox-${index}`}
                label={genre}
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreCheckboxChange(genre)}
              />
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClearFilters}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleFilterModalClose}>
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <Footer/>
    </div>
  );
}

export default Theatres;
