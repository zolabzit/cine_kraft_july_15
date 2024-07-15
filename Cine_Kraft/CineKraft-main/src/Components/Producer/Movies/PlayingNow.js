import React, { useState } from 'react';
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap';
import '../../../Css/Dashboard.scss';

function PlayingNow() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Hridayam',
      genre: 'Romance | Comedy | Drama',
      rating: 8.2,
      runtime: "2h 51min"
    },
    {
      id: 2,
      title: 'Jailer',
      genre: 'Action | Crime',
      rating: 7.5,
      runtime: "2h 48min"
    },
    {
      id: 3,
      title: 'Chandramukhi 2',
      genre: 'Horror | Thriller | Comedy',
      rating: 5.9,
      runtime: "2h 51min"
    },
    {
      id: 4,
      title: 'Kick',
      genre: 'Comedy | Drama | Romance',
      rating: 7.6,
      runtime: "2h 14min"
    },
    {
      id: 5,
      title: 'Jawan',
      genre: 'Action | Thriller | Romance',
      rating: 7.5,
      runtime: "2h 45min"
    },
    {
      id: 6,
      title: 'Skanda',
      genre: 'Action | Drama',
      rating: 5.6,
      runtime: "2h 51min"
    },
    {
      id: 7,
      title: 'Iraivan',
      genre: 'Mystery | Horror | Crime',
      rating: 5.3,
      runtime: "2h 02min"
    },
    {
      id: 8,
      title: 'Mark Antony',
      genre: 'Adventure | Fantasy | Action ',
      rating: 7.6,
      runtime: "2h 51min"
    },
  
     {
      id: 9,
      title: 'Chithha',
      genre: 'Drama | Mystery',
      rating: 8.7,
      runtime: "2h 20min"
    },
    {
      id: 10,
      title: 'Hridayam',
      genre: 'Romance | Comedy | Drama',
      rating: 8.2,
      runtime: "2h 51min"
    },
    {
      id: 11,
      title: 'Jailer',
      genre: 'Action | Crime',
      rating: 7.5,
      runtime: "2h 48min"
    },
    {
      id: 12,
      title: 'Chandramukhi 2',
      genre: 'Horror | Thriller | Comedy',
      rating: 5.9,
      runtime: "2h 51min"
    },
    {
      id: 13,
      title: 'Kick',
      genre: 'Comedy | Drama | Romance',
      rating: 7.6,
      runtime: "2h 14min"
    },
    {
      id: 14,
      title: 'Jawan',
      genre: 'Action | Thriller | Romance',
      rating: 7.5,
      runtime: "2h 45min"
    },
    {
      id: 15,
      title: 'Skanda',
      genre: 'Action | Drama',
      rating: 5.6,
      runtime: "2h 51min"
    },
    {
      id: 16,
      title: 'Iraivan',
      genre: 'Mystery | Horror | Crime',
      rating: 5.3,
      runtime: "2h 02min"
    },

  ]);


  const [editMovie, setEditMovie] = useState(null);

  const removeMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const handleEdit = (id) => {
    // Find the movie to edit
    const movieToEdit = movies.find((movie) => movie.id === id);
    setEditMovie(movieToEdit);
  };

  const handleSave = () => {
    // Update the edited movie in the state
    const updatedMovies = movies.map((movie) => {
      if (movie.id === editMovie.id) {
        return { ...movie, ...editMovie };
      }
      return movie;
    });
    setMovies(updatedMovies);
    setEditMovie(null); // Clear the edit state
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditMovie({ ...editMovie, [name]: value });
  };

  return (
    <Container>
      <div>
        <h4 className="mt-3 mb-3">Playing Now In Theatres</h4>
        <hr />

        <Row>
          {movies.map((movie) => (
            <Col md={3} style={{ paddingTop: '3%', textAlign: 'center' }} key={movie.id}>
              <Card className="playCard">
                {editMovie && editMovie.id === movie.id ? (
                  // Display edit form
                  <div>
                    <Form.Group controlId={`editTitle-${movie.id}`}>
                      <Form.Control
                        type="text"
                        name="title"
                        value={editMovie.title}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId={`editGenre-${movie.id}`}>
                      <Form.Control
                        type="text"
                        name="genre"
                        value={editMovie.genre}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId={`editRating-${movie.id}`}>
                      <Form.Control
                        type="text"
                        name="rating"
                        value={editMovie.rating}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId={`editRuntime-${movie.id}`}>
                      <Form.Control
                        type="text"
                        name="runtime"
                        value={editMovie.runtime}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Button variant="success" onClick={handleSave}>
                      Save
                    </Button>
                  </div>
                ) : (
                  // Display movie details
                  <div>
                    <h4 style={{ paddingTop: '3%' }}>{movie.title}</h4>
                    <p>
                      <b>Genre :</b> {movie.genre}
                      <br />
                      <b>Runtime : </b>
                      {movie.runtime}
                      <br />
                      <b>Rating : </b>
                      {movie.rating}
                    </p>
                    <div style={{paddingBottom:"5%"}}>
                    <Button
                      style={{ maxWidth: '50%' }}
                      variant="danger"
                      onClick={() => removeMovie(movie.id)}
                    >
                      Remove
                    </Button>
                    &nbsp;
                    <Button
                      style={{ maxWidth: '50%' }}
                      variant="danger"
                      onClick={() => handleEdit(movie.id)}
                    >
                      Edit
                    </Button>
                    </div>
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default PlayingNow;
