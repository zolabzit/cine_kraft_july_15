import React, { useState } from 'react';
import "../../../Css/Admin.css";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
// import 'antd/dist/antd.css'; 
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { DatePicker, Popconfirm } from "antd";


function UpcomingWsCard({ title, releaseDate, genre, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDate, setEditedDate] = useState(releaseDate);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedDate(releaseDate);
  };

  const handleSaveEdit = () => {
    // You can add logic here to save the edited date to your data store
    // For now, we'll just update the UI
    setIsEditing(false);
    onEdit(editedDate); // Pass the edited date to the parent component
  };

  const handleDateChange = (date) => {
    setEditedDate(date);
  };

  return (
    <div className="upcoming-movie-card" style={{textAlign:"center"}}>
      <h5>{title}</h5>
      {isEditing ? (
        <div>
          <DatePicker
            value={editedDate}
            onChange={handleDateChange}
            format="YYYY-MM-DD"
          />
          <Button variant="success" onClick={handleSaveEdit}>Save</Button>
          <Button variant="secondary" onClick={handleCancelEdit}>Cancel</Button>
        </div>
      ) : (
        
          <p>
          <b>Release Date :</b> {releaseDate}<br />
          <b>Genre :</b> {genre}<br />
         <div style={{paddingTop:"3%"}}>
         <Button variant="danger" onClick={handleEditClick}><EditOutlined /> Edit</Button>&nbsp;&nbsp;
          <Popconfirm title="Are you sure you want to delete this movie?" onConfirm={onDelete}>
            <Button variant="danger" className="ml-2"><DeleteOutlined /> Delete</Button>
          </Popconfirm>
         </div>
        </p>
         
      )}
    </div>
  );
}

function UpcomingWs() {
  const [UpcomingWs, setUpcomingWs] = useState([
    {
      title: 'Leo',
      releaseDate: '2023-10-19',
      genre: 'Action | Adventure',
    },
    {
      title: 'Ghost ',
      releaseDate: '2023-10-19',
      genre: 'Action | Crime',
    },
    {
      title: 'Ayalaan',
      releaseDate: '2024-01-15',
      genre: 'Fantasy',
    },
    {
      title: 'Jigarthanda DoubleX',
      releaseDate: 'November 2023',
      genre: 'Action | Crime',
    },
    {
      title: '800 ',
      releaseDate: '2023-10-06',
      genre: 'Sports | Drama',
    },
    {
      title: 'Salaar: Part 1 - Ceasefire',
      releaseDate: '2023-12-22',
      genre: 'Action | Drama',
    },
    {
      title: 'Vanangaan ',
      releaseDate: 'December 2023',
      genre: 'Action | Crime',
    },
    {
      title: 'Captain Miller',
      releaseDate: '2024-01-15',
      genre: 'Action | Crime',
    },
    {
      title: 'Dhruva Natchathiram: Part 1',
      releaseDate: '2023-11-24',
      genre: 'Thriller | Action',
    },

  ]);

  const handleEdit = (index, newDate) => {
    // Implement the edit logic here, if needed
    // You can update the data store with the new date
    // For now, let's just update the UI
    const updatedMovies = [...UpcomingWs];
    updatedMovies[index].releaseDate = newDate;
    setUpcomingWs(updatedMovies);
  };

  const handleDelete = (index) => {
    const updatedMovies = [...UpcomingWs];
    updatedMovies.splice(index, 1);
    setUpcomingWs(updatedMovies);
  };

  return (
    <ConfigProvider locale={en_US}>
    <Container>
      <div>
        <h4 className="mt-3 mb-3">Upcoming WebSeries</h4>
        <hr />
        <div className="upcoming-movies-container">
          <Row>
            {UpcomingWs.map((movie, index) => (
              <Col md={3} key={index} style={{paddingTop:'3%'}}>
                <Card className="playCard" style={{padding:"2%"}}>
                <UpcomingWsCard 
                  title={movie.title}
                  releaseDate={movie.releaseDate}
                  genre={movie.genre}
                  onEdit={(newDate) => handleEdit(index, newDate)}
                  onDelete={() => handleDelete(index)}
                />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  </ConfigProvider>
  );
}

export default UpcomingWs;
