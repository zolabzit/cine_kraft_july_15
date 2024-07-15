import React from "react";

import Dashboard from "../Components/Admin/Dashboard/Dashboard";
import UserList from "../Components/Admin/Users/UserList";
import UserProfile from "../Components/Admin/Users/UserProfile";
import MoviesList from "../Components/Admin/Movies/MoviesList";
import PlayingNow from "../Components/Admin/Movies/PlayingNow";
import UpcomingMovies from "../Components/Admin/Movies/UpcomingMovies";
import AddMovies from "../Components/Admin/Movies/AddMovies";
import WsList from "../Components/Admin/WebSeries/WsList";
import UpcomingWs from "../Components/Admin/WebSeries/UpcomingWs";
import AddWs from "../Components/Admin/WebSeries/AddWs";
import SFList from "../Components/Admin/ShortFilms/SFList";
import AddSF from "../Components/Admin/ShortFilms/AddSF";
import Fiction from "../Components/Admin/TVShows/Fiction";
import NonFiction from "../Components/Admin/TVShows/NonFiction";
import AddTVS from "../Components/Admin/TVShows/AddTVS";
import VideoAlbum from "../Components/Admin/Albums/VideoAlbum";
import AddAlbum from "../Components/Admin/Albums/AddAlbum";
import AwardShows from "../Components/Admin/Events/AwardShows/AwardShows";
import MusicConcert from "../Components/Admin/Events/MusicConcert/MusicConcert";
import AudioLaunch from "../Components/Admin/Events/AudioLaunch/AudioLaunch";
import PreReEvnts from "../Components/Admin/Events/PreReleaseEvents/PreReEvnts";
import Add from "../Components/Admin/Events/Add";
import TheatresList from "../Components/Admin/Theatres/TheatresList";
import AddTheatres from "../Components/Admin/Theatres/AddTheatres";
import CelebrityList from "../Components/Admin/Celebrity/CelebrityList";
import AddCelebrity from "../Components/Admin/Celebrity/AddCelebrity";
import VendorsList from "../Components/Admin/Vendor/VendorsList";
import Banner from "../Components/Admin/Vendor/VendorAds/Banner";
import AddBannerForm from "../Components/Admin/Vendor/VendorAds/AddBanner";
import Page from "../Components/Admin/Vendor/VendorAds/Page";
import AddPageForm from "../Components/Admin/Vendor/VendorAds/AddPageAds";
import AddCategory from "../Components/Admin/Vendor/ManageCategory/AddCategory";
import ViewCategory from "../Components/Admin/Vendor/ManageCategory/ViewCategory";
import AddSubCategory from "../Components/Admin/Vendor/ManageSubCategory/AddSubCategory";
import ViewSubCategory from "../Components/Admin/Vendor/ManageSubCategory/ViewSubCategory";
import Enquiry from "../Components/Admin/Vendor/Enquiry";
import { elements } from "chart.js";
import ProductionHouseLists from "../Components/Admin/ProductionHouse/PHList";
import AddProductionHouse from "../Components/Admin/ProductionHouse/AddPH";

const AccoutantDashboard = [
  {
    path: "/admin",
    name: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "UserList",
    name: "UserList",
    element: <UserList />,
  },
  {
    path: "UserProfile",
    name: "UserProfile",
    element: <UserProfile />,
  },
  {
    path: "Movies/MoviesList",
    name: "MoviesList",
    element: <MoviesList />,
  },
  {
    path: "Movies/PlayingNow",
    name: "PlayingNow",
    element: <PlayingNow />,
  },
  {
    path: "Movies/UpcomingMovies",
    name: "UpcomingMovies",
    element: <UpcomingMovies />,
  },
  {
    path: "Movies/AddMovies",
    name: "AddMovies",
    element: <AddMovies />,
  },
  {
    path: "Webseries/WsList",
    name: "WsList",
    element: <WsList />,
  },
  {
    path: "Webseries/UpcomingWs",
    name: "UpcomingWs",
    element: <UpcomingWs/>,
  },
  {
    path: "Webseries/AddWs",
    name: "AddWs",
    element: <AddWs />,
  },
  {
    path: "ShortFilms/SFList",
    name: "SFList",
    element: <SFList/>,
  },
  {
    path: "ShortFilms/AddSF",
    name: "AddSF",
    element: <AddSF />,
  },
  {
    path: "TvShows/Fiction",
    name: "Fiction",
    element: <Fiction />,
  },
  {
    path: "TvShows/NonFiction",
    name: "NonFiction",
    element: <NonFiction/>,
  },
  {
    path: "TvShows/AddTVS",
    name: "AddTVS",
    element: <AddTVS />,
  },
  {
    path: "Albums/VideoAlbum",
    name: "VideoAlbum",
    element: <VideoAlbum/>,
  },
  {
    path: "Albums/AddAlbum",
    name: "AddAlbum",
    element: <AddAlbum />,
  },
  {
    path: "Events/AwardShows",
    name: "AwardShows",
    element: <AwardShows/>,
  },
  {
    path: "Events/MusicConcert",
    name: "MusicConcert",
    element: <MusicConcert/>,
  },
  {
    path: "Events/AudioLaunch",
    name: "AudioLaunch",
    element: <AudioLaunch />,
  },
  {
    path: "Events/PreReEvnts",
    name: "PreReEvnts",
    element: <PreReEvnts/>,
  },
  {
    path: "Events/Add",
    name: "Add",
    element: <Add/>,
  },
  {
path: "ProductionHouse/ProductionHouseLists",
name: "ProductionHouseLists",
element: <ProductionHouseLists/>
  },
  {
    path: "ProductionHouse/AddProductionHouse",
    name: "AddProductionHouse",
    element: <AddProductionHouse/>
      },
  {
    path: "Vendors/VendorsList",
    name: "VendorsList",
    element: <VendorsList/>,
  },
  {
    path: "Vendors/VendorsAds/BannerAds",
    name: "BannerAds",
    element: <Banner/>,
  },
  {
    path: "Vendors/VendorsAds/AddBanner",
    name: "AddBanner",
    element: <AddBannerForm/>,
  },
  {
    path: "Vendors/VendorsAds/PageAds",
    name: "PageAds",
    element: <Page/>,
  },
  {
    path: "Vendors/VendorsAds/AddPageAds",
    name: "AddPageAds",
    element: <AddPageForm/>,
  },
 {
path: "Vendors/ManageCategory/AddCategory",
name: "AddCategory",
element: <AddCategory/>,
 },
 {
  path: "Vendors/ManageCategory/ViewCategory",
  name: "ViewCategory",
  element: <ViewCategory/>,
   },
   {
    path: "Vendors/ManageSubCategory/AddCategory",
    name: "AddSubCategory",
    element: <AddSubCategory/>,
     },
     {
      path: "Vendors/ManageSubCategory/ViewCategory",
      name: "ViewSubCategory",
      element: <ViewSubCategory/>,
       },
       {
        path: "Vendors/Enquiry",
        name: "Enquiry",
        element: <Enquiry/>,
         },
  {
    path: "Theatres/TheatresList",
    name: "TheatresList",
    element: <TheatresList/>,
  },
  {
    path: "Theatres/AddTheatres",
    name: "AddTheatres",
    element: <AddTheatres/>,
  },
  {
    path: "Celebrity/CelebrityList",
    name: "CelebrityList",
    element: <CelebrityList/>,
  },
  {
    path: "Celebrity/AddCelebrity",
    name: "AddCelebrity",
    element: <AddCelebrity/>,
  },
];
export default AccoutantDashboard;
