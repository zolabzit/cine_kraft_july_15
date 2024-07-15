import React, { useState } from "react";
import { Row, Col, Container, Card, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../WebSeries/WebSeries.css";
import Header from '../Header';
import Footer from "../Footer";
const celebritiesData = [
    // Tamil Celebrities
    {
      id: 1,
      name: "Rajinikanth",
      field: "Actor",
      rating: 9.5,
      imageUrl: "https://static.toiimg.com/photo/102599392/102599392.jpg?v=3",
      link: "/actorDetails/Rajinikanth"
    },
    {
      id: 2,
      name: "Kamal Haasan",
      field: "Actor/Director/Singer",
      rating: 9.4,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYmUxNTY0MWItODQ2My00YWMyLWFmODgtNTY1MTQ2ZjEwYzdlXkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg",
    },
    {
      id: 3,
      name: "Nayanthara",
      field: "Actress",
      rating: 9.2,
      imageUrl: "https://static.toiimg.com/photo/109542194/109542194.jpg",
    },
    {
      id: 4,
      name: "S. Shankar",
      field: "Director",
      rating: 9.1,
      imageUrl: "https://www.behindwoods.com/tamil-movies-cinema-news-16/images/director-shankar-talks-about-his-anger-photos-pictures-stills.jpg",
    },
    {
      id: 5,
      name: "Suriya",
      field: "Actor",
      rating: 8.9,
      imageUrl: "https://ik.imagekit.io/j83rchiauw/A_List_Star/suriya-biography.jpg",
    },
    {
      id: 6,
      name: "PC Sreeram",
      field: "DOP",
      rating: 8.8,
      imageUrl: "https://media.themoviedb.org/t/p/w500/hZ94YWhDq4hZOSWFtJG7BBu2Uns.jpg",
    },
  
    // Telugu Celebrities
    {
      id: 7,
      name: "Chiranjeevi",
      field: "Actor",
      rating: 9.4,
      imageUrl: "https://th-i.thgim.com/public/incoming/13illa/article66364739.ece/alternates/FREE_1200/Chiranjeevi%20%282%29.JPG",
    },
    
    {
      id: 8,
      name: "Mahesh Babu",
      field: "Actor",
      rating: 9.3,
      imageUrl: "https://cdn.123telugu.com/content/wp-content/uploads/2023/10/mahesh.jpg",
    },
    {
      id: 9,
      name: "Samantha Ruth Prabhu",
      field: "Actress",
      rating: 9.2,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5Ml5tzmJ4CM2kbg8UfeCO0p6iLqGg3hScw&s",
    },
    {
      id: 10,
      name: "S. S. Rajamouli",
      field: "Director",
      rating: 9.1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/SS_Rajamouli.jpg/1200px-SS_Rajamouli.jpg",
    },
    {
      id: 11,
      name: "Jr. NTR",
      field: "Actor",
      rating: 9.0,
      imageUrl: "https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2022/10/Jr-NTR.jpg",
    },
    {
        id: 12,
        name: "shiva Rajkumar",
        field: "Actor",
        rating: 8.8,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoVvpg_Q5edOQH8gpdjj8EmYOnAe9oM8KlKxgFgBAL_DJ9BN9zzUM5gkn2E5Ak0LsMeo&usqp=CAU",
      },
   
  
    // Malayalam Celebrities
    {
      id: 13,
      name: "Mohanlal",
      field: "Actor",
      rating: 9.5,
      imageUrl: "https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/08/Copy-of-Profile-2023-08-02T183846.589.png",
    },
    {
      id: 14,
      name: "Mammootty",
      field: "Actor",
      rating: 9.4,
      imageUrl: "https://im.rediff.com/movies/2024/may/15mammootty1.jpg?w=670&h=900",
    },
    {
      id: 15,
      name: "Parvathy Thiruvothu",
      field: "Actress",
      rating: 9.1,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYTA2ZDUxNDItNWJmMi00YzlkLTlkYmQtM2NmZWEyOTE3Zjc1XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 16,
      name: "Lijo Jose Pellissery",
      field: "Director",
      rating: 9.0,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotctF2HG8vsk6lQITfTvw2tYUXSqWmJfx-I94w3sW8dVDXDeReAWJA4YY71WxA6irkQE&usqp=CAU",
    },
    {
      id: 17,
      name: "Prithviraj Sukumaran",
      field: "Actor/Director",
      rating: 8.9,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZjI2ZjU0YWItMDlmYy00YzA0LWIxY2YtYmY3NGQzZmUzNzc1XkEyXkFqcGdeQXVyNDIxMDcxNjc@._V1_.jpg",
    },
    {
        id: 18,
        name: "R. Rathnavelu",
        field: "DOP",
        rating: 8.9,
        imageUrl: "https://mellowplex.s3.amazonaws.com/uploads/item/asset/13402/R-Rathnavelu.jpg",
      },
  ];
  


function Celebrities() {
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
      ? celebritiesData
      : celebritiesData.filter((series) => selectedGenres.includes(series.genre));

  return (
    <div>
      <Header/>
      <div className="about">
        <Container >
          <h1 style={{ paddingTop: "8%"}}>Celebrities</h1>
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
                      style={{ width: "100%", height: "300px", borderRadius:"10px"}}
                    />
                    <Card.Body>
                      <Card.Title>{series.title}</Card.Title>
                      <Card.Text style={{fontSize:"16px"}}><b>{series.name}</b></Card.Text>
                      <Card.Text>{series.field}</Card.Text>
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
            {Array.from(new Set(celebritiesData.map((series) => series.genre))).map((genre, index) => (
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

export default Celebrities;
