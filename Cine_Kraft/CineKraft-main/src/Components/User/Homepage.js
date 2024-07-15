import React from "react";
import "./Homepage.css";
import Header from "./Header";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import { MdPhonelink } from "react-icons/md";
import { GiTheater } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { SiCelery } from "react-icons/si";
import { RiFolderVideoFill } from "react-icons/ri";
import {
  PiTelevisionFill,
  PiFilmSlateDuotone,
  PiFilmReelBold,
} from "react-icons/pi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FcServices } from "react-icons/fc";
import { BsCollectionPlay } from "react-icons/bs";
import Carousel1 from "../../../src/assets/Carousel01.jpg";
import ActorsCollage from "../../assets/ActorsCollage.png";
import movieslide from "../../assets/_090b29e0-c005-4493-b5a9-be671b6632e9.jpeg";
import OurServices from "../../assets/OurServices.png";
import SERRATTAALOGO from "../../assets/SERRATTAALOGO.png";

function Homepage() {
  const navigate = useNavigate();

  const settings1 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // const Kollywood = [
  //   {
  //     img: "https://imgnew.outlookindia.com/public/uploads/articles/2021/12/12/Rajinikanth_adobespark.jpg",
  //     text: "RajiniKanth",
  //     link: "rajiniPage", // Add the link for RajiniKanth
  //   },
  //   {
  //     img: "https://www.behindwoods.com/tamil-actor/kamal-haasan/kamal-haasan-stills-photos-pictures-04.jpg",
  //     text: "Kamal Haasan",
  //     link: "kamalPage", // Add the link for Kamal Haasan
  //   },
  //   {
  //     img: "https://i.pinimg.com/236x/81/3e/87/813e87d14052b53db98149e40b38cf2d.jpg",
  //     text: "Joseph Vijay",
  //     link: "/actorDetails/vijay", // Add the link for Joseph Vijay
  //   },
  //   {
  //     img: "https://gumlet.assettype.com/freepressjournal/2023-07/2dd67577-9d7d-4bbb-ad08-d17099aebe7f/327299603_846910539722694_6554671378060695164_n.jpg",
  //     text: "Ajith Kumar",
  //     link: "ajithPage", // Add the link for Ajith Kumar
  //   },
  // ];
  // const SandalWood = [
  //   {
  //     img: "https://s3images.zee5.com/wp-content/uploads/sites/7/2019/03/A-Still-Of-Karunadada-Chakravarthy-Shivarajkumar.jpg",
  //     text: "Shiva Rajkumar",
  //   },
  //   {
  //     img: "https://s3images.zee5.com/wp-content/uploads/sites/7/2021/11/Picture1.png",
  //     text: "Puneeth Rajkumar",
  //   },
  //   {
  //     img: "https://cdn.siasat.com/wp-content/uploads/2022/06/New-Project-49.jpg",
  //     text: "Yash",
  //   },
  //   {
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRb_D7FqcW0rI-T05gYEbZKsKBVp01EXswi22GhwGu9rtbW8V4ob5wJIQRfiy-VF2ULS4&usqp=CAU",
  //     text: "Sudeep",
  //   },
  // ];
  // const Mollywood = [
  //   {
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84yHAMPgZuz5mYQueUpLUFQ0CRZL0HscpigEIk6cKk7cf_7TVu-oOiqQrCSR2FI2XFsM&usqp=CAU",
  //     text: "Mohanlal",
  //   },
  //   {
  //     img: "https://24newsdaily.com/wp-content/uploads/2021/09/mamoo.jpeg",
  //     text: "Mammootty",
  //   },
  //   {
  //     img: "https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/07/dulquer-salmaan-1-1.png",
  //     text: "Dulquer Salman",
  //   },
  //   {
  //     img: "https://static.toiimg.com/thumb/msid-100157858,width-1280,resizemode-4/100157858.jpg",
  //     text: "Prithviraj Sukumaran",
  //   },
  // ];
  // const Tollywood = [
  //   {
  //     img: "https://th-i.thgim.com/public/incoming/f6w1rt/article66161716.ece/alternates/FREE_1200/DSC_2495.JPG",
  //     text: "Chiranjeevi",
  //   },
  //   {
  //     img: "https://wallpapers.com/images/featured/pawan-kalyan-0mdf19707eujkj06.jpg",
  //     text: "Pawan Kalyan",
  //   },
  //   {
  //     img: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/08/29/5c95ca1edfb33e987bb732fd685e38221661736518001145_original.jpg",
  //     text: "Nagarjuna",
  //   },
  //   {
  //     img: "https://filmfare.wwmindia.com/content/2020/aug/maheshbabu21596961195.jpg",
  //     text: "Mahesh Babu",
  //   },
  // ];

  const Fields = [
    {
      title: "Celebrities",
      count: "1278",
      icon: <SiCelery className="dashIcons" style={{ color: "red" }} />,
      path: "/celebrities",
    },
    {
      title: "Movies",
      count: "48000",
      icon: (
        <BiCameraMovie
          className="dashIcons"
          style={{ color: "rgb(20, 20, 114)" }}
        />
      ),
      path: "/movies",
    },
    {
      title: "WebSeries",
      count: "1087",
      icon: (
        <PiFilmReelBold className="dashIcons" style={{ color: "orange" }} />
      ),
      path: "/webseries",
    },
    {
      title: "ShortFilms",
      count: "948",
      icon: (
        <BsCollectionPlay className="dashIcons" style={{ color: "green" }} />
      ),
      path: "/shortfilms",
    },
    {
      title: "TV Shows",
      count: "14923",
      icon: (
        <PiTelevisionFill
          className="dashIcons"
          style={{ color: "rgb(20, 20, 114)" }}
        />
      ),
      path: "/tvshows",
    },
    {
      title: "Video Albums",
      count: "1087",
      icon: (
        <RiFolderVideoFill className="dashIcons" style={{ color: "red" }} />
      ),
      path: "/albums",
    },
    {
      title: "Theatres",
      count: "5843",
      icon: (
        <GiTheater
          className="dashIcons"
          style={{ color: "rgb(20, 20, 114)" }}
        />
      ),
      path: "/theatres",
    },
    {
      title: "Events",
      count: "890",
      icon: (
        <FaUsersViewfinder className="dashIcons" style={{ color: "brown" }} />
      ),
      path: "/events",
    },
    {
      title: "Channels",
      count: "1208",
      icon: (
        <PiTelevisionSimpleBold
          className="dashIcons"
          style={{ color: "red" }}
        />
      ),
      path: "/channels",
    },
    {
      title: "OTT",
      count: "45",
      icon: <MdPhonelink className="dashIcons" style={{ color: "orange" }} />,
      path: "/ott",
    },
    {
      title: "Production House",
      count: "369",
      icon: (
        <PiFilmSlateDuotone className="dashIcons" style={{ color: "black" }} />
      ),
      path: "/productionHouse",
    },
    {
      title: "Services",
      count: "40",
      icon: <FcServices className="dashIcons" />,
      path: "/services",
    },
  ];




  const upcomingMovies = [
    {
      title: "Aranmanai 4",
      imageUrl: "https://i.ytimg.com/vi/jcrgTEdOCuo/maxresdefault.jpg",
      description: "2024 ‧ Horror/Thriller",
    },
    {
      title: "Thangalaan",
      imageUrl:
        "https://goldandhra.com/wp-content/uploads/2023/10/Thangalaan-Movie-Release-Date-Announced_cleanup-1.png",
      description: "2024 ‧ Action/Drama",
    },
    {
      title: "The Greatest of All Time",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/1e/The_Greatest_of_All_Time.jpg",
      description: "2024 ‧ Action/Fantasy/Adventure",
    },
    {
      title: "Rathnam",
      imageUrl:
        "https://imgeng.jagran.com/images/2024/jan/Rathnam1706190600540.jpg",
      description: "2024 ‧ Action/Drama",
    },
    {
      title: "Kalki 2898 AD",
      imageUrl: "https://i.ytimg.com/vi/bC36d8e3bb0/maxresdefault.jpg",
      description: "2024 ‧ Fantasy/Thriller",
    },
    {
      title: "Aranmanai 4",
      imageUrl: "https://i.ytimg.com/vi/jcrgTEdOCuo/maxresdefault.jpg",
      description: "2024 ‧ Horror/Thriller",
    },
    {
      title: "Thangalaan",
      imageUrl:
        "https://goldandhra.com/wp-content/uploads/2023/10/Thangalaan-Movie-Release-Date-Announced_cleanup-1.png",
      description: "2024 ‧ Action/Drama",
    },
    {
      title: "The Greatest of All Time",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/1e/The_Greatest_of_All_Time.jpg",
      description: "2024 ‧ Action/Fantasy/Adventure",
    },
    {
      title: "Rathnam",
      imageUrl:
        "https://imgeng.jagran.com/images/2024/jan/Rathnam1706190600540.jpg",
      description: "2024 ‧ Action/Drama",
    },
    {
      title: "Kalki 2898 AD",
      imageUrl: "https://i.ytimg.com/vi/bC36d8e3bb0/maxresdefault.jpg",
      description: "2024 ‧ Fantasy/Thriller",
    },
  ];

  // const navigate = useNavigate();

  return (
    <div >
      {/* Header */}
      <Header />
    
   
         {/* Carousel */}
       <div className="carousel" style={{ paddingTop: "5%" }}>
        <Row>
          <Col md={12}>
            <Carousel className="carousel_wh">
              <Carousel.Item>
                <img className="carousel_img"
                  style={{
                    width: "100%",
                    height: "90vh",
                    position: "relative",
                  }}
                  src={Carousel1}
                  alt="Slide 1"
                />

                <Carousel.Caption
                  style={{
                    fontWeight: "bold",
                    fontSize: "50px",
                    color: "#022135",
                    position: "absolute",
                    top: "150px",
                    left: "50px",
                    textAlign: "left",
                  }}
                >
                  WELCOME
                  TO CINEKRAFT
                </Carousel.Caption>
               
                <Carousel.Caption
                  style={{
                    fontWeight: "bold",
                    fontSize: "50px",
                    color: "#022135",
                    position: "absolute",
                    top: "210px",
                    left: "50px",
                    textAlign: "left",
                  }}
                >
                  <img src={SERRATTAALOGO} style={{width:"10%", height:"30%"}} alt="none"/>
             <b style={{fontSize:"60%"}}>Powered by SERRATTAA<br/> <b style={{fontSize:"65%", position: "absolute",
                    top: "90px",textAlign:"left", left:"280px"
                    }}>GLOBAL PRIVATE LIMITED</b></b>
                </Carousel.Caption>
                <Carousel.Caption
                  style={{
                    fontSize: "25px",
                    color: "orange",
                    position: "absolute",
                    top: "320px",
                    left: "50px",
                    textAlign: "left",
                  }}
                >
                  " Your Ultimate Destination for Cinematic Entertainment!
                  <br />
                  🎬 Explore the Latest Movies, Trailers,Reviews, and More! "
                </Carousel.Caption>
                <Carousel.Caption
                  style={{
                    position: "absolute",
                    top: "420px",
                    left: "50px",
                    textAlign: "left",
                  }}
                >
                 
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="carousel_img"
                  style={{ width: "100%", height: "90vh", opacity: "100%" }}
                  src={ActorsCollage}
                  alt="Slide 2"
                />
                <Carousel.Caption
                  style={{
                    fontSize: "25px",
                    color: "orange",
                    position: "absolute",
                    top: "170px",
                    left: "900px",
                  }}
                >
                  <h1 style={{ fontWeight: "bold", color: "white" }}>
                    Actors Database
                  </h1>
                  "Explore into the actors database, search for specific
                  performers, browse filmographies."
                </Carousel.Caption>
                <Carousel.Caption
                  style={{ position: "absolute", top: "400px", left: "900px" }}
                >
               
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="carousel_img"
                  style={{ width: "50%", height: "90vh", opacity: "100%" }}
                  src={movieslide}
                  alt="Slide 3"
                />
                <Carousel.Caption
                  style={{
                    fontSize: "25px",
                    color: "orange",
                    position: "absolute",
                    top: "170px",
                    left: "900px",
                  }}
                >
                  <h1 style={{ fontWeight: "bold", color: "#022135" }}>
                    Movies Database
                  </h1>
                  "Discover the movie of what you love most. Reasearch, Review
                  and learn more!"
                </Carousel.Caption>
                <Carousel.Caption
                  style={{ position: "absolute", top: "350px", left: "900px" }}
                >
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="carousel_img"
                  style={{ width: "100%", height: "90vh", opacity: "100%" }}
                  src={OurServices}
                  alt="Slide 4"
                />

                <Carousel.Caption
                  style={{
                    fontSize: "25px",
                    color: "orange",
                    position: "absolute",
                    top: "250px",
                    left: "900px",
                  }}
                >
                  <h1 style={{ fontWeight: "bold", color: "white" }}>
                    Our Services
                  </h1>
                  "Our services include caravan booking, ticket booking, junior
                  artist booking, rainy effect provision, camera rental, and VR
                  device rental & more!"
                </Carousel.Caption>
                <Carousel.Caption
                  style={{ position: "absolute", top: "500px", left: "900px" }}
                >
                 
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
      {/* menuButton */}
      <div
        style={{ textAlign: "center", paddingTop: "5%", paddingBottom: "3%" }}
      >
        <Row>
          <h4 className="popularsearch" style={{ color: "rgb(78, 78, 133)" }}>
            Discover what you love most
          </h4>
          <div>
            <Container>
              <Row
                className="admin-row"
                style={{ paddingTop: "3%", paddingBottom: "3%" }}
              >
                {Fields.map((data, index) => (
                  <Col key={index} sm={6}  md={4} lg={2} className="dash-col" style={{display:"flex", justifyContent:"space-evenly",flexDirection:"column"}}>
                    <Card
                      className="Dash-cards"
                      onClick={() => navigate(data.path)}
                    >
                      <div className="card-field">
                        <div>
                          <h4>{data.icon}</h4>
                          <h4 className="fieldsname">{data.title}</h4>
                          <h4 className="fieldscount">{data.count}</h4>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </Row>
      </div>

     
  {/* Upcoming Movies */}
  <div className="upcoming_movies" style={{ paddingBottom: "5%" }}>
        <h3
          className="actorheadertag"
          style={{
            padding: "2%",
            color: "rgb(78, 78, 133)",
            paddingBottom: "3%",
          }}
        >
          Upcoming Movies
        </h3>
        <Slider {...settings1}>
          {upcomingMovies.map((movie, index) => (
            <div key={index} className="slider-item">
              <Card style={{ width: "18rem", padding: "10px" }}>
                <Card.Img
                  style={{ height: "200px", width: "100%" }}
                  variant="top"
                  src={movie.imageUrl}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.description}</Card.Text>
                  <Button className="button_clr">Learn More</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
 
    
      {/* footer */}
     
      <Footer />
     
    </div>
  );
}
export default Homepage;
