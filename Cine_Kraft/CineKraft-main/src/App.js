import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './Components/User/Homepage';
import Menu from './Components/User/Menu';
import Movies from './Components/User/Movies/Movies';
import ShortFilms from './Components/User/ShortFilms/ShortFilms';
import WebSeries from './Components/User/WebSeries/WebSeries';
import Header from './Components/User/Header';
import Footer from './Components/User/Footer';
import TvShows from './Components/User/TvShows/TvShows';
import Events from './Components/User/Events/Events';
import Albums from './Components/User/Albums/Albums';
import Details from "./Components/User/Details";
import ActorDetails from "./Components/Pages/ActorDetails";
import MovieDetails from './Components/User/MovieDetails';
import DefaultLayout from "../src/Components/Admin/DefaultLayout/Index";
import AdminRoutes from "./Routes/AdminRoutes";
import ProducerRoutes from "./Routes/ProducerRoutes";
import LoginPage from "../src/Components/Login&Signup/LoginPage.js";
import SingupPage from "../src/Components/Login&Signup/SingupPage.js";
import AboutUs from './Components/User/AboutUs.js'; // Import the AboutUs component directly
import Contact from './Components/User/Contact.js';
import Blog from './Components/User/Blog.js';
import Event from './Components/User/Events.js';
import Service from './Components/User/Service.js';
import CaravanBooking from './Components/User/CaravanBooking.js';
import TicketBooking from './Components/User/TicketBooking.js';
import CharacterScene from './Components/AFRAME/CharacterScene.js';
import PitchDeck from './Components/User/PitchDeck.js';
import Quiz from './Components/User/Quiz/Quiz.js';
import Vendors from './Components/User/Vendors.js';
import Channels from './Components/User/Channels.js';
import OTT from './Components/User/OTT.js';
import Actors from './Components/Admin/Celebrity/Actors/Actors.js';
import Celebrities from './Components/User/Celebrities/Celebrities.js';
import ProductionHouse from './Components/User/ProductionHouse/ProductionHouse.js';
import ProductionHouseLanding from './Components/User/ProductionHouse/ProductionHouseLanding.js';
import Theatres from './Components/User/Theatres/Theatres.js';
import QuizQuestions from './Components/User/Quiz/QuizQuestions.js';
import DisplayQuiz from './Components/User/Quiz/DisplayQuiz.js';
function App() {
  return (
    <Router>
      <Routes>
<Route path="/3d" element={<CharacterScene/>}/>

        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SingupPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/celebrities" element={<Celebrities/>}/>
        <Route path="/theatres" element={<Theatres/>}/>
        <Route path="/productionHouse" element={<ProductionHouse/>}/>
        <Route path="/productionHouse/LycaProductions" element={<ProductionHouseLanding/>}/>
        <Route path="/shortfilms" element={<ShortFilms />} />
        <Route path="/webseries" element={<WebSeries />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/events" element={<Events />} />
        <Route path="/details" element={<Details />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/actorDetails/Rajinikanth" element={<ActorDetails />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/blog" element={<Blog/>} />
        <Route path="/event" element={<Event/>} />
        <Route path="/vendors" element={<Vendors/>} />
        <Route path="/pitchDeck" element={<PitchDeck/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/QuizQuestions" element={<QuizQuestions/>}/>
        <Route path="/displayQuiz" element={<DisplayQuiz/>}/>
        <Route path="/channels" element={<Channels/>}/>
        <Route path="/ott" element={<OTT/>}/>
        <Route path="/services" element={<Service/>} />
        <Route path="/services/caravanbooking" element={<CaravanBooking/>} />
        <Route path="/services/ticketbooking" element={<TicketBooking/>} />
        <Route path="/celebrity/actors" element={<Actors/>}/>
        <Route path="/admin" element={<DefaultLayout />}>
          {AdminRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="/producer" element={<DefaultLayout />}>
          {ProducerRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
