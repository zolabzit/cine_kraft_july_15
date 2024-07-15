import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../User/WebSeries/WebSeries.css";
import Header from "./Header";
import Footer from "./Footer";
const OTTData = [
  {
    id: 1,
    name: "Netflix",
    location: "Global",
    subscriptionCost: "USD 8.99 - 17.99 per month",
    imageUrl:
      "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png",
    link: "https://www.netflix.com",
  },
  {
    id: 2,
    name: "Amazon Prime Video",
    location: "Global",
    subscriptionCost:
      "USD 8.99 per month or USD 119 per year (includes Prime membership)",
    imageUrl:
      "https://imagenes.elpais.com/resizer/v2/XUFZ2BH5C5JWNICKSC5CJBGCZU.jpg?auth=5ad75fc3c1809da6275fc1bb154727678ba7e8cacc6bf8a16e0f3464699684cf&width=1200",
    link: "https://www.primevideo.com",
  },
  {
    id: 3,
    name: "Disney+ Hotstar",
    location: "India",
    subscriptionCost: "INR 299 per month or INR 1499 per year",
    imageUrl:
      "https://play-lh.googleusercontent.com/MmLkAp-x9OvA46_NgaD7dpXIsPkvb0OTJ-WlK_-7vyjZMjBMgJ0zHhsgg2NI3r0Lobc",
    link: "https://www.hotstar.com",
  },
  {
    id: 4,
    name: "Hulu",
    location: "USA",
    subscriptionCost:
      "USD 5.99 per month with ads, USD 11.99 per month without ads",
    imageUrl:
      "https://yt3.googleusercontent.com/RtSHMfypXFjjzRCp8lqbBLIpYV5fNHwEuZ4d2IIFoGo_YIljaYmZECFtk6A8msdoV8FHgF8J=s900-c-k-c0x00ffffff-no-rj",
    link: "https://www.hulu.com",
  },
  {
    id: 5,
    name: "HBO Max",
    location: "USA",
    subscriptionCost: "USD 14.99 per month",
    imageUrl:
      "https://variety.com/wp-content/uploads/2022/12/HBO-Max.png?w=1000&h=563&crop=1",
    link: "https://www.hbomax.com",
  },
  {
    id: 6,
    name: "Apple TV+",
    location: "Global",
    subscriptionCost: "USD 4.99 per month",
    imageUrl:
      "https://www.apple.com/v/apple-tv-plus/ai/images/meta/apple-tv__e7aqjl2rqzau_og.png?202406180149",
    link: "https://tv.apple.com",
  },
  {
    id: 7,
    name: "SonyLIV",
    location: "India",
    subscriptionCost: "INR 299 per month or INR 999 per year",
    imageUrl: "https://etimg.etb2bimg.com/photo/76024879.cms",
    link: "https://www.sonyliv.com",
  },
  {
    id: 8,
    name: "ZEE5",
    location: "India",
    subscriptionCost: "INR 99 per month or INR 999 per year",
    imageUrl:
      "https://cdn.dnaindia.com/sites/default/files/2018/02/23/654236-zee5-696x435.jpg?im=FitAndFill=(1200,900)",
    link: "https://www.zee5.com",
  },
  // Add more OTT platforms here...
];

function OTT() {
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
      ? OTTData
      : OTTData.filter((series) => selectedGenres.includes(series.genre));

  return (
    <div>
      <Header />
      <div className="about">
        <Container>
          <h1 style={{ paddingTop: "8%" }}>OTT</h1>
          <div>
            <Row>
              <Col style={{ marginLeft: "90%" }}>
                <Button
                  variant="outline-dark"
                  style={{
                    float: "right",
                    marginBottom: "20px",
                    marginRight: "20px",
                  }}
                  onClick={handleFilterIconClick}
                >
                  <FontAwesomeIcon
                    icon="filter"
                    style={{ marginRight: "5px" }}
                  />
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
                      style={{
                        width: "100%",
                        height: "150px",
                        borderRadius: "10px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{series.title}</Card.Title>
                      <Card.Text style={{ fontSize: "16px" }}>
                        <b>{series.name}</b>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div style={{ paddingBottom: "5%" }}>
        <Modal show={showFilterModal} onHide={handleFilterModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filter by Genre</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {Array.from(new Set(OTTData.map((series) => series.genre))).map(
                (genre, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    id={`genre-checkbox-${index}`}
                    label={genre}
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleGenreCheckboxChange(genre)}
                  />
                )
              )}
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
      <Footer />
    </div>
  );
}

export default OTT;
