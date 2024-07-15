import React, { useState } from 'react';
import { Row, Col, Card, Container, Form } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import './ShortFilms.css';

// Filter data
const genres = ["Drama", "Thriller", "Crime"];
const languages = ["Tamil", "Telugu", "Kannada", "Malayalam"];
const ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

// Short Films data
const films = [
      
  {
    title: "Adimaithanam",
    director: "Arun D",
    releaseDate: "Feb 4, 2023",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/khyokxd5xO0/maxresdefault.jpg",
    ratings: "⭐⭐⭐⭐⭐",
    languages: "Tamil",
    genre: "Drama",
  },
  {
    title: "Garvam Kol",
    director: "Sen",
    releaseDate: "Dec 18, 2022",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/oCwO3f0YZes/maxresdefault.jpg",
    ratings: "⭐⭐⭐",
    languages: "Telugu",
    genre: "Thriller"
  },
  {
    title: "Vidhai",
    director: "Velayudham",
    releaseDate: "Feb 26, 2020",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/CRaiIwXKEJg/maxresdefault.jpg",
    ratings: "⭐⭐⭐⭐",
    languages: "Malayalam",
    genre: "Drama"
  },
  {
    title: "Mobile",
    director: "Kasim Maidheen",
    releaseDate: "June 09, 2022",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/jDdwqmlg2eg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA45Nm1i7hbSCnVkXCHF44ME4TQ3A",
    ratings: "⭐⭐⭐",
    languages: "Kannada",
    genre: "Crime"
  },
  {
    title: "Vairam Ondru Kaiyil",
    director: "Vignesh Loganathan",
    releaseDate: "March 18, 2023",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/ejxgioWGmNE/maxresdefault.jpg",
    ratings: "⭐⭐",
    languages: "Tamil",
    genre: "Fantasy"
  },
  {
    title: "The Elephant Whisperers",
    director: "Kartiki Gonsalves",
    releaseDate: "8 December 2022",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTreZcI_-iNozhjF98s-Dx1_ew26QRLoq5Uw8Np_S_EZO3i3B8", // Replace with the actual image URL
      ratings: "⭐⭐⭐⭐⭐",
      languages: "Malayalam",
      genre: "Adventure"
    },
  {
    title: "Saras",
    director: "Jude Peter Damian",
    releaseDate: "16 February 2023",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTcwZjBiYzItYTkyMy00OTY1LTk4YTEtNDhkYzZiODIwMGI2XkEyXkFqcGdeQXVyMTUzMzQ2NTI3.V1.jpg", // Replace with the actual image URL
      ratings: "⭐",
      languages: "Tamil",
      genre: "drama"
    },
  {
    title: "Little Wings (II)",
    director: "Naveen Mu",
    releaseDate: "4 March 2023",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://static.pib.gov.in/WriteReadData/userfiles/image/wings-46YYV.jpg", // Replace with the actual image URL
      ratings: "⭐⭐",
      languages: "Telugu",
      genre: "Fantasy"
    },
  {
    title: "Maa",
    director: "Sarjun KM",
    releaseDate: "26 January 2018",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl: "https://i.ytimg.com/vi/-lKk_5qYdkk/maxresdefault.jpg", // Replace with the actual image URL
    ratings: "⭐⭐⭐⭐⭐",
      languages: "Tamil",
      genre: "Drama"
  },
  {
    title: "Vilambaram",
    director: "Rahul Ashok",
    releaseDate: "20 April 2023",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMWVkMjJhM2YtOTE0NC00YTZjLWE0ZGUtZjc4NTAwOGE4NGRmXkEyXkFqcGdeQXVyMTY0MTEyNzA4.V1.jpg", // Replace with the actual image URL
      ratings: "⭐⭐⭐⭐⭐",
      languages: "Tamil",
      genre: "Drama"
    },
  ]

function ShortFilms() {
  // State for filters
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Filter function
  const filterFilms = (film) => {
    return (
      (selectedGenres.length === 0 || selectedGenres.includes(film.genre)) &&
      (selectedLanguages.length === 0 || selectedLanguages.includes(film.languages)) &&
      (selectedRatings.length === 0 || selectedRatings.includes(film.ratings))
    );
  };

  // Render filtered films
  const renderFilms = () => {
    return films
      .filter(filterFilms)
      .map((film, index) => (
        <Col md={4} lg={3} key={index} style={{paddingTop:"2%"}}>
          <Card>
            <Card.Img style={{width:"100%", height:"30vh"}} variant="top" src={film.imageUrl} />
            <Card.Body>
              <Card.Title>{film.title}</Card.Title>
              <Card.Text>
                Director: {film.director}<br />
                Release Date: {film.releaseDate}<br />
                Awards: {film.awards}<br />
                Ratings: {film.ratings}<br />
                Languages: {film.languages}<br />
                Genre: {film.genre}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ));
  };

  // Filter change handlers
  const handleGenreChange = (genre) => {
    setSelectedGenres(prevGenres =>
      prevGenres.includes(genre)
        ? prevGenres.filter(g => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguages(prevLanguages =>
      prevLanguages.includes(language)
        ? prevLanguages.filter(l => l !== language)
        : [...prevLanguages, language]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(prevRatings =>
      prevRatings.includes(rating)
        ? prevRatings.filter(r => r !== rating)
        : [...prevRatings, rating]
    );
  };

  return (
    <>
      <Header />
      <Container style={{ paddingTop: '8%', paddingBottom: '5%' }}>
        <h2>Short Films</h2>
        {/* Filters */}
        <div className="filters-container">
          <h3>Filters</h3>
          <Row>
            {/* Genre Filter */}
            <Col md={4}>
              <h5>Genres</h5>
              {genres.map(genre => (
                <Form.Check
                  key={genre}
                  type="checkbox"
                  label={genre}
                  checked={selectedGenres.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                />
              ))}
            </Col>
            {/* Language Filter */}
            <Col md={4}>
              <h5>Languages</h5>
              {languages.map(language => (
                <Form.Check
                  key={language}
                  type="checkbox"
                  label={language}
                  checked={selectedLanguages.includes(language)}
                  onChange={() => handleLanguageChange(language)}
                />
              ))}
            </Col>
            {/* Rating Filter */}
            <Col md={4}>
              <h5>Ratings</h5>
              {ratings.map(rating => (
                <Form.Check
                  key={rating}
                  type="checkbox"
                  label={rating}
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
              ))}
            </Col>
          </Row>
        </div>
        {/* Render filtered films */}
        <Row>
          {renderFilms()}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ShortFilms;
