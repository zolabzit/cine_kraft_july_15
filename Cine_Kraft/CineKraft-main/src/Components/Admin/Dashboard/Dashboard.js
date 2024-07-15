import React from "react";
import { Col, Row, Card } from "antd";
import "../../../Css/Dashboard.scss";
import { LuFileAudio } from "react-icons/lu";
import { BsPersonCheckFill, BsAward } from "react-icons/bs";
import {GiTheater, GiMusicalNotes} from "react-icons/gi";
// import { useNavigate } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import {SiCelery, SiSteelseries} from "react-icons/si";
import {RiFolderVideoFill} from "react-icons/ri";
import {PiTelevisionFill, PiFilmSlateDuotone} from "react-icons/pi";
import {FaUsersViewfinder} from "react-icons/fa6";
import TopRatedMovies from "../Movies/TopRatedMovies";
import { Container } from "react-bootstrap";
import "./../../../index.css";

const Fields = [
    { title: "Users", count: "156290", icon: <BsPersonCheckFill className="dashIcons" /> },
    { title: "Theatres", count: "5843", icon: <GiTheater className="dashIcons" /> },
    { title: "Celebrity", count: "1278", icon: <SiCelery className="dashIcons" /> },
    { title: "Movies", count: "48000", icon: <BiCameraMovie className="dashIcons" /> },
    { title: "WebSeries", count: "1087", icon: <SiSteelseries className="dashIcons" /> },
    { title: "ShortFilms", count: "948", icon: <PiFilmSlateDuotone className="dashIcons" /> },
    { title: "TV Shows", count: "14923", icon: <PiTelevisionFill className="dashIcons" /> },
    { title: "Video Albums", count: "1087", icon: <RiFolderVideoFill className="dashIcons" /> },
    { title: "Award Shows", count: "38", icon: <BsAward className="dashIcons" /> },
    { title: "Music Concert", count: "26", icon: <GiMusicalNotes className="dashIcons" /> },
    { title: "Audio Launch", count: "538", icon: <LuFileAudio className="dashIcons" /> },
    { title: "Release Events", count: "721", icon: <FaUsersViewfinder className="dashIcons" /> },
  ];
  

export default function Dashboard() {
  // const navigate = useNavigate();
  return (
  <Container>
      <div className="dashboard-admin-div">
     <Row className="admin-row" style={{paddingTop:"5%", paddingBottom:"7%"}}>
  {Fields.map((data, index) => (
    <Col key={index} sm={24} md={12} lg={6} className="dash-col">
      <Card className="Dash-cards">
        <div className="card-field">
          <div>
            <h4 className="fieldsname">{data.title}</h4>
            <h4 className="fieldscount">{data.count}</h4>
          </div>
          <div>{data.icon}</div>
        </div>
      </Card>
    </Col>
  ))}
</Row>
<Row>
  <Col>
  <TopRatedMovies/>
  </Col>
</Row>
    </div>
  </Container>
  );
}
