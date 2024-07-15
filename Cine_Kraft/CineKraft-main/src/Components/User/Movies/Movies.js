// import React, { useState } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   Container,
//   Modal,
//   Button,
//   Form,
// } from "react-bootstrap";
// // import Slider from "react-slick";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { library } from "@fortawesome/fontawesome-svg-core";
// // import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// // import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import Header from "../Header";
// import Footer from "../Footer";
// import "../../../Css/Movies.css";
// import { FaFilter } from "react-icons/fa";

// // const NextArrow = ({ onClick }) => (
// //   <div
// //     className="slick-arrow"
// //     style={{
// //       position: "absolute",
// //       top: "50%",
// //       cursor: "pointer",
// //       transform: "translateX(-50%)",
// //       marginLeft: "103%",
// //       marginTop: "-16px",
// //     }}
// //     onClick={onClick}
// //   >
// //     <FaChevronRight
// //       icon="arrow-right"
// //       size="25"
// //       style={{
// //         marginLeft: "50%",
// //         transform: "translateX(-50%)",
// //         marginBottom: "30px",
// //       }}
// //     />
// //   </div>
// // );

// // const PrevArrow = ({ onClick }) => (
// //   <div
// //     className="slick-arrow"
// //     style={{
// //       position: "absolute",
// //       top: "50%",
// //       cursor: "pointer",
// //       transform: "translateX(-50%)",
// //       left: 0,
// //       marginLeft: "-50px",
// //     }}
// //     onClick={onClick}
// //   >
// //     <FaChevronLeft
// //       icon="arrow-left"
// //       size="25"
// //       style={{ left: 0, top: "50%", transform: "translateY(-50%)" }}
// //     />
// //   </div>
// // );

// const genres = [
//   "Adventures",
//   "Thriller",
//   "Drama",
//   "Family",
//   "Comedy",
//   "Romance",
// ];

// const filterratings = [
//   "⭐ 1 - 2",
//   "⭐⭐ 2 - 4",
//   "⭐⭐⭐ 4 - 6",
//   "⭐⭐⭐⭐ 6 - 8",
//   "⭐⭐⭐⭐⭐ 8 - 10"
// ];


// const languages = ["Tamil", "Telugu", "Kannada", "Malayalam"];

// const years = ["1900-2000", "2001-2010", "2011-2020", "2021-2024"];

//   const moviesByGenre = {
//     Adventures: [
//       {
//         img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
//         ratings: "⭐ 9.3 / 10",
//         description: "2023 ‧ Gangster/Adventure",
//         name: "Leo",
//         languages: "Tamil",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐⭐ 8 - 10",
//       },
//       {
//         img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
//         ratings: "⭐ 7.5 / 10",
//         description: " 2023 ‧ Action/Adventure ‧ 2h 48m",
//         name: "Jailer",
//         languages: "Tamil",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//       {
//         img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
//         ratings: "⭐ 8.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Mark Antony",
//         languages: "Telugu",
//         years: "2001-2010",
//         filterratings: "⭐⭐ 2 - 4",
//       },
//       {
//         img: "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-230188/list/1170x658withlog1343131532.jpg",
//         ratings: "⭐ 7.8 / 10",
//         description: " 2019 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Vanamagan",
//         languages: "Kannada",
//         years: "2001-2010",
//         filterratings: "⭐⭐⭐ 4 - 6",
//       },
//       {
//         img: "https://timesofindia.indiatimes.com/photo/102758718.jpeg",
//         ratings: "⭐ 6.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Lucky Man",
//         languages: "Malayalam",
//         years: "1900-2000",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//     ],
//     Thriller: [
//       {
//         img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
//         ratings: "⭐ 9.3 / 10",
//         description: "2023 ‧ Gangster/Adventure",
//         name: "Leo",
//         languages: "Tamil",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐⭐ 8 - 10",
//       },
//       {
//         img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
//         ratings: "⭐ 4.5 / 10",
//         description: " 2023 ‧ Action/Adventure ‧ 2h 48m",
//         name: "Jailer",
//         languages: "Kannada",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐ 4 - 6",
//       },
//       {
//         img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
//         ratings: "⭐ 2.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Mark Antony",
//         languages: "Malayalam",
//         years: "2021-2024",
//         filterratings: "⭐⭐ 2 - 4",
//       },
//       {
//         img: "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-230188/list/1170x658withlog1343131532.jpg",
//         ratings: "⭐ 1.4 / 10",
//         description: " 2019 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Vanamagan",
//         languages: "Kannada",
//         years: "2011-2020",
//         filterratings: "⭐ 1 - 2",
//       },
//       {
//         img: "https://timesofindia.indiatimes.com/photo/102758718.jpeg",
//         ratings: "⭐ 6.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Lucky Man",
//         languages: "Telugu",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//     ],
//     Drama: [
//       {
//         img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
//         ratings: "⭐ 9.3 / 10",
//         description: "2023 ‧ Gangster/Adventure",
//         name: "Leo",
//         languages: "Tamil",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐⭐ 8 - 10",
//       },
//       {
//         img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
//         ratings: "⭐ 7.5 / 10",
//         description: " 2023 ‧ Action/Adventure ‧ 2h 48m",
//         name: "Jailer",
//         languages: "Malayalam",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//       {
//         img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
//         ratings: "⭐ 8.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Mark Antony",
//         languages: "Telugu",
//         years: "2001-2010",
//         filterratings: "⭐⭐⭐⭐⭐ 8 - 10",
//       },
//       {
//         img: "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-230188/list/1170x658withlog1343131532.jpg",
//         ratings: "⭐ 7.8 / 10",
//         description: " 2019 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Vanamagan",
//         languages: "Kannada",
//         years: "2001-2010",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//       {
//         img: "https://timesofindia.indiatimes.com/photo/102758718.jpeg",
//         ratings: "⭐ 6.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Lucky Man",
//         languages: "Telugu",
//         years: "1900-2000",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//     ],
//     Family: [
//       {
//         img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
//         ratings: "⭐ 9.3 / 10",
//         description: "2023 ‧ Gangster/Adventure",
//         name: "Leo",
//         languages: "Tamil",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐⭐ 8 - 10",
//       },
//       {
//         img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
//         ratings: "⭐ 4.5 / 10",
//         description: " 2023 ‧ Action/Adventure ‧ 2h 48m",
//         name: "Jailer",
//         languages: "Tamil",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐ 4 - 6",
//       },
//       {
//         img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
//         ratings: "⭐ 2.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Mark Antony",
//         languages: "Malayalam",
//         years: "2021-2024",
//         filterratings: "⭐⭐ 2 - 4",
//       },
//       {
//         img: "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-230188/list/1170x658withlog1343131532.jpg",
//         ratings: "⭐ 1.4 / 10",
//         description: " 2019 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Vanamagan",
//         languages: "Telugu",
//         years: "2011-2020",
//         filterratings: "⭐ 1 - 2",
//       },
//       {
//         img: "https://timesofindia.indiatimes.com/photo/102758718.jpeg",
//         ratings: "⭐ 6.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Lucky Man",
//         languages: "Malayalam",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//     ],
//     Comedy: [
//       {
//         img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
//         ratings: "⭐ 9.3 / 10",
//         description: "2023 ‧ Gangster/Adventure",
//         name: "Leo",
//         languages: "Kannada",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐⭐ 8 - 10",
//       },
//       {
//         img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
//         ratings: "⭐ 7.5 / 10",
//         description: " 2023 ‧ Action/Adventure ‧ 2h 48m",
//         name: "Jailer",
//         languages: "Kannada",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//       {
//         img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
//         ratings: "⭐ 8.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Mark Antony",
//         languages: "Telugu",
//         years: "2001-2010",
//         filterratings: "⭐⭐⭐⭐⭐ 8 - 10",
//       },
//       {
//         img: "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-230188/list/1170x658withlog1343131532.jpg",
//         ratings: "⭐ 7.8 / 10",
//         description: " 2019 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Vanamagan",
//         languages: "Telugu",
//         years: "2001-2010",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//       {
//         img: "https://timesofindia.indiatimes.com/photo/102758718.jpeg",
//         ratings: "⭐ 6.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Lucky Man",
//         languages: "Kannada",
//         years: "1900-2000",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//     ],
//     Romance: [
//       {
//         img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
//         ratings: "⭐ 9.3 / 10",
//         description: "2023 ‧ Gangster/Adventure",
//         name: "Leo",
//         languages: "Malayalam",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐⭐ 8 - 10",
//       },
//       {
//         img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
//         ratings: "⭐ 4.5 / 10",
//         description: " 2023 ‧ Action/Adventure ‧ 2h 48m",
//         name: "Jailer",
//         languages: "Telugu",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐ 4 - 6",
//       },
//       {
//         img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
//         ratings: "⭐ 2.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Mark Antony",
//         languages: "Telugu",
//         years: "2021-2024",
//         filterratings: "⭐⭐ 2 - 4",
//       },
//       {
//         img: "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-230188/list/1170x658withlog1343131532.jpg",
//         ratings: "⭐ 1.4 / 10",
//         description: " 2019 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Vanamagan",
//         languages: "Telugu",
//         years: "2011-2020",
//         filterratings: "⭐ 1 - 2",
//       },
//       {
//         img: "https://timesofindia.indiatimes.com/photo/102758718.jpeg",
//         ratings: "⭐ 6.5 / 10",
//         description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
//         name: "Lucky Man",
//         languages: "Tamil",
//         years: "2021-2024",
//         filterratings: "⭐⭐⭐⭐ 6 - 8",
//       },
//     ],
//   };

// function Movies() {
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedGenres, setSelectedGenres] = useState(genres);

//   const [selectedRatings, setSelectedRatings] = useState([]);
//   const [selectedLanguages, setSelectedLanguages] = useState([]);
//   const [selectedYears, setSelectedYears] = useState([]);
//   const [searchValue, setSearchValue] = useState("");

//   const handleGenreChange = (genre) => {
//     setSelectedGenres((prevGenres) =>
//       prevGenres.includes(genre)
//         ? prevGenres.filter((g) => g !== genre)
//         : [...prevGenres, genre]
//     );
//   };

//   const handleRatingChange = (rating) => {
//     setSelectedRatings((prevRatings) =>
//       prevRatings.includes(rating)
//         ? prevRatings.filter((r) => r !== rating)
//         : [...prevRatings, rating]
//     );
//   };
  
  

//   const handleLanguageChange = (language) => {
//     setSelectedLanguages((prevLanguages) =>
//       prevLanguages.includes(language)
//         ? prevLanguages.filter((l) => l !== language)
//         : [...prevLanguages, language]
//     );
//   };
  

//   const handleYearChange = (year) => {
//     setSelectedYears((prevYears) =>
//       prevYears.includes(year)
//         ? prevYears.filter((y) => y !== year)
//         : [...prevYears, year]
//     );
//   };

//   const handleSearchChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const renderMovies = () => {
//     return (
//       <div>
//         {/* Remove the loop through each genre */}
//         <>
//           <Row>
//             {/* Map all movies to individual cards */}
//             {Object.values(moviesByGenre)
//               .flatMap((movies) => movies)
//               .filter(
//                 (movie) =>
//                   (selectedRatings.length === 0 ||
//                     selectedRatings.includes(movie.filterratings)) &&
//                   (selectedLanguages.length === 0 ||
//                     selectedLanguages.includes(movie.languages)) &&
//                   (selectedYears.length === 0 ||
//                     selectedYears.some((selectedYear) => {
//                       const [start, end] = selectedYear.split("-");
//                       const movieYear = parseInt(
//                         movie.years.split(" - ")[0]
//                       );
//                       return start <= movieYear && movieYear <= end;
//                     })) &&
//                   (searchValue === "" ||
//                     movie.name
//                       .toLowerCase()
//                       .includes(searchValue.toLowerCase()))
//               )
//               .map((movie, index) => (
//                 <Col md={3} style={{ paddingTop: "3%" }} key={index}>
//                   <Card style={{ width: "20rem" }}>
//                     <Card.Img
//                       style={{ height: "200px", width: "100%" }}
//                       src={movie.img}
//                       alt="none"
//                     />
//                     <Card.Body>
//                       <Card.Text>{movie.ratings}</Card.Text>
//                       <Card.Text>{movie.description}</Card.Text>
//                       <Card.Title>{movie.name}</Card.Title>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//           </Row>
//         </>
//       </div>
//     );
//   };
  
  

//   return (
//     <>
//       <Header />
//       <Container style={{ paddingTop: "8%", paddingBottom: "5%" }}>
//         <h2>Movies</h2>
//         <div
//           className="filters-container"
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             padding: "1%",
//           }}
//         >
//           <Row>
//             <Col md={7}>
//               <Form.Control
//                 type="text"
//                 placeholder="Search movies..."
//                 value={searchValue}
//                 onChange={handleSearchChange}
//                 style={{ width: "" }}
//               />
//             </Col>
//             <Col md={5}>
//               <Button
//                 title="click to filter"
//                 style={{ backgroundColor: "#022135", color: "white" }}
//                 onClick={() => setShowFilters(true)}
//               >
//                 <FaFilter size={20} /> Filters
//               </Button>
//             </Col>
//           </Row>
//         </div>
//         <Modal
//           style={{ padding: "5%" }}
//           show={showFilters}
//           onHide={() => setShowFilters(false)}
//         >
//           <Modal.Header
//             style={{
//               backgroundColor: "#022135",
//               color: "white",
//               borderBottom: "5px solid gray",
//             }}
//             closeButton
//           >
//             <Modal.Title>Filters</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Row>
//               <Col md={6}>
//                 <h5>
//                   <b>Genres</b>
//                 </h5>
//                 {genres.map((genre, index) => (
//                   <Form.Check
//                     key={index}
//                     label={genre}
//                     checked={selectedGenres.includes(genre)}
//                     onChange={() => handleGenreChange(genre)}
//                   />
//                 ))}
//               </Col>
//               <Col md={6}>
//                 <h5>
//                   <b>Ratings</b>
//                 </h5>
//                 {filterratings.map((rating, index) => (
//                   <Form.Check
//                   key={index}
//                   label={rating}
//                   checked={selectedRatings.includes(rating)}
//                   onChange={() => handleRatingChange(rating)}
//                 />
                
//                 ))}
//               </Col>
//             </Row>
//             <Row style={{ paddingTop: "2%" }}>
//               <Col md={6}>
//                 <h5>
//                   <b>Languages</b>
//                 </h5>
//                 {languages.map((language, index) => (
//                   <Form.Check
//                     key={index}
//                     label={language}
//                     checked={selectedLanguages.includes(language)}
//                     onChange={() => handleLanguageChange(language)}
//                   />
//                 ))}
//               </Col>
//               <Col md={6}>
//                 <h5>
//                   <b>Years</b>
//                 </h5>
//                 {years.map((year, index) => (
//                   <Form.Check
//                     key={index}
//                     label={year}
//                     checked={selectedYears.includes(year)}
//                     onChange={() => handleYearChange(year)}
//                   />
//                 ))}
//               </Col>
//             </Row>
//           </Modal.Body>
//           <Modal.Footer style={{ borderTop: "5px solid gray" }}>
//             <Button variant="secondary" onClick={() => setShowFilters(false)}>
//               Close
//             </Button>
//             <Button
//               variant="danger"
//               onClick={() => {
//                 setSelectedGenres([]);
//                 setSelectedRatings([]);
//                 setSelectedLanguages([]);
//                 setSelectedYears([]);
//               }}
//             >
//               Clear Filters
//             </Button>
//             <Button
//               variant="none"
//               style={{ backgroundColor: "#022135", color: "white" }}
//               onClick={() => setShowFilters(false)}
//             >
//               Apply Filters
//             </Button>
//           </Modal.Footer>
//         </Modal>

//         <Row className="justify-content-center">{renderMovies()}</Row>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default Movies;


import React, { useState } from "react";
import { Row, Col, Container, Card, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../WebSeries/WebSeries.css";
import Header from '../Header';
import Footer from "../Footer";
const moviesData = [
  {
    id: 0,
    title: "Mersal",
    genre: "Action/Drama",
    rating: 9.5,
    imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vijay-61-et00058691-20-06-2017-04-42-29.jpg",
    link: "/movieDetails"
  },
  {
    id: 1,
    title: "Soorarai Pottru",
    genre: "Drama",
    rating: 9.1,
    imageUrl: "https://static.toiimg.com/photo/72004440.cms",
    link: "/details"
  },
  {
    id: 2,
    title: "Karnan",
    genre: "Action Drama",
    rating: 8.3,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/62/Karnan_2021_poster.jpg",
  },
  {
    id: 3,
    title: "Vikram Vedha",
    genre: "Thriller",
    rating: 8.6,
    imageUrl: "https://resizing.flixster.com/pxVtYeBWvZ34riDgnD8qNU-V4AU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14341711_v_v8_aa.jpg",
  },
  {
    id: 4,
    title: "Kaithi",
    genre: "Action Thriller",
    rating: 8.5,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZjQyNThhMjQtZDgzNC00N2U4LWFhNjMtNWVlMzIxNWIxNTUwXkEyXkFqcGdeQXVyMTYyNjAzOTUx._V1_.jpg",
  },
  {
    id: 5,
    title: "Master",
    genre: "Action Thriller",
    rating: 7.8,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTRkYWY3ZGEtYzU5My00ZGY4LThhYjEtNTYyNzFhMDM4MTUyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
  },
  {
    id: 6,
    title: "Asuran",
    genre: "Action Drama",
    rating: 8.5,
    imageUrl: "https://flixpatrol.com/runtime/cache/files/posters/c/w350/cakplr7fpjsvrbjlbliw2bcrl1n.jpg",
  },
  {
    id: 7,
    title: "Super Deluxe",
    genre: "Drama",
    rating: 8.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a1/Super_Deluxe_film_poster.jpg",
  },
  {
    id: 8,
    title: "96",
    genre: "Romance Drama",
    rating: 8.6,
    imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/96-et00053595-16-02-2017-02-16-29.jpg",
  },
  {
    id: 9,
    title: "Pariyerum Perumal",
    genre: "Drama",
    rating: 8.7,
    imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15996849_p_v8_aa.jpg",
  },
  {
    id: 10,
    title: "Joker",
    genre: "Drama",
    rating: 8.4,
    imageUrl: "https://static.moviecrow.com/gallery/20160324/86598-joker.jpg",
  },
  {
    id: 11,
    title: "Vikram",
    genre: "Action",
    rating: 8.4,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTFhMDU5ZGYtNjcyNy00NjAyLWI5YzItYTUwZTk5MjhkMzk0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
  },
  {
    id: 12,
    title: "Petta",
    genre: "Action Drama",
    rating: 7.3,
    imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16405634_p_v8_af.jpg",
  },
  {
    id: 13,
    title: "Irumbu Thirai",
    genre: "Action Thriller",
    rating: 7.7,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_jqi40ls7LYW57JsAPWsiSdVo4CNVtkUeIe7PGe6YgvhIDqi6Sc1R6VkMgokLb3uzhk&usqp=CAU",
  },
  {
    id: 14,
    title: "Sivaji: The Boss",
    genre: "Action Drama",
    rating: 7.5,
    imageUrl: "https://image.tmdb.org/t/p/original/y1ksgaeoqWwYZLhnjQkgCF9TJvY.jpg",
  },
  {
    id: 15,
    title: "Pudhupettai",
    genre: "Crime Drama",
    rating: 8.5,
    imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/fdaa693876652f627e2d09e44a5d4d4b50b0ee36b627200f2d96f825fe9472f9.jpg",
  },
  {
    id: 16,
    title: "Vada Chennai",
    genre: "Crime Drama",
    rating: 8.5,
    imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/88df90537821ac4ee9530814fff1056772f83f68a776995d13aa57cf825b6252.jpg",
  },
  {
    id: 17,
    title: "Ratsasan",
    genre: "Crime Thriller",
    rating: 8.4,
    imageUrl: "https://play-lh.googleusercontent.com/62gNZjKM98uCoSIzwUmQzEGe-0C48a0IXLTEcv7nya53qfxk4kXvC-UPCKCcS0eIIQfLHQlS_GOXb5c3UQ",
  },
  {
    id: 18,
    title: "Thani Oruvan",
    genre: "Action Thriller",
    rating: 8.4,
    imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/4e8fce2e8fa91e118901c3feee7b6be2dbc8c2517e8423f204fc1cd244107f63.jpg",
  },
];


function Movies() {
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
      ? moviesData
      : moviesData.filter((series) => selectedGenres.includes(series.genre));

  return (
    <div>
      <Header/>
      <div className="about">
        <Container >
          <h1 style={{ paddingTop: "8%"}}>Movies</h1>
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
                      <Card.Text>Genre: {series.genre}</Card.Text>
                      <Card.Text>Rating: {series.rating}</Card.Text>
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
            {Array.from(new Set(moviesData.map((series) => series.genre))).map((genre, index) => (
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

export default Movies;
