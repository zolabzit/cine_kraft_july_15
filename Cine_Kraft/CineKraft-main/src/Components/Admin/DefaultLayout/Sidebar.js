import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdLibraryAdd,
  MdVideoLibrary,
  MdOutlineFormatListNumbered,
  MdOutlineRocketLaunch
} from "react-icons/md";
import {
  BsFillPersonPlusFill,
  BsListColumns,
  BsFillCalendarEventFill,
  BsFillAwardFill
} from "react-icons/bs";
import { RiProfileLine, RiFolderVideoFill } from "react-icons/ri";
import { FaPeopleCarry } from "react-icons/fa";
import { AiOutlinePullRequest, AiFillUnlock, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoIosPeople, IoIosContact } from "react-icons/io";
import { BiCameraMovie, BiBookContent } from "react-icons/bi";
import { SiSteelseries, SiCelery, SiGradleplaypublisher } from "react-icons/si";
import { PiFilmSlateDuotone, PiTelevisionFill } from "react-icons/pi";
import { GiTheater,GiMusicSpell,GiAudioCassette} from "react-icons/gi";
import {RxOpenInNewWindow} from "react-icons/rx";
import "../../../Css/Sidebar.scss";
import { Menu } from "antd";

const { SubMenu } = Menu;

function Sidebar({ collapsed }) {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className={collapsed === true ? "sidebarcontent open" : "d-none"} >
      <Menu onClick={onClick} mode="inline" className="nav-list">
        <NavLink to="/admin" activeClassName="main-nav-style" style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}>
          <MdDashboardCustomize className="Nav-Icon1" />
          &nbsp; Dashboard
        </NavLink>
        

        <SubMenu style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}
          icon={<BiBookContent size={20} className="Nav-Icon1" />}
          title="Content"
        >
          {/* Movies */}
         
         <SubMenu
            style={{ backgroundColor: "#022135", borderRadius: "0%" }}
            icon={<BiCameraMovie size={20} className="Nav-Icon1" />}
            title="Movies"
          >
            <NavLink to="Movies/MoviesList">
              <MdOutlineFormatListNumbered className="Nav-Icon" />
              Movies List
            </NavLink>
            <NavLink to="Movies/PlayingNow">
              <SiGradleplaypublisher className="Nav-Icon" />
              Playing Now
            </NavLink>
            <NavLink to="Movies/UpcomingMovies">
              <RxOpenInNewWindow className="Nav-Icon" />
              Upcoming Movies
            </NavLink>
            <NavLink to="Movies/AddMovies">
              <AiOutlineVideoCameraAdd className="Nav-Icon" />
              Add Movies
            </NavLink>
          </SubMenu>
    

          {/* WebSeries */}
          <SubMenu
            style={{ backgroundColor: "#022135", borderRadius: "0%" }}
            icon={<SiSteelseries size={20} className="Nav-Icon1" />}
            title="WebSeries"
          >
            <NavLink to="Webseries/WSList">
              <MdOutlineFormatListNumbered className="Nav-Icon" />
              WebSeries List
            </NavLink>
            <NavLink to="Webseries/UpcomingWS">
              <RxOpenInNewWindow className="Nav-Icon" />
              Upcoming
            </NavLink>
            <NavLink to="Webseries/AddWS">
              <MdLibraryAdd className="Nav-Icon" />
              Add WebSeries
            </NavLink>
          </SubMenu>

          <SubMenu
            style={{ backgroundColor: "#022135", borderRadius: "0%" }}
            icon={<PiFilmSlateDuotone size={20} className="Nav-Icon1" />}
            title="ShortFilms"
          >
            <NavLink to="ShortFilms/SFList">
              <FaPeopleCarry className="Nav-Icon" />
              ShortFilms List
            </NavLink>
            <NavLink to="ShortFilms/AddSF">
              <MdLibraryAdd className="Nav-Icon" />
              Add ShortFilms
            </NavLink>
          </SubMenu>

          <SubMenu
            style={{ backgroundColor: "#022135", borderRadius: "0%" }}
            icon={<PiTelevisionFill size={20} className="Nav-Icon1" />}
            title="TVShows"
          >
            <NavLink to="TvShows/Fiction">
              <FaPeopleCarry className="Nav-Icon" />
              Fiction
            </NavLink>
            <NavLink to="TvShows/NonFiction">
              <FaPeopleCarry className="Nav-Icon" />
              Non-Fiction
            </NavLink>
            <NavLink to="TvShows/AddTVS">
              <MdLibraryAdd className="Nav-Icon" />
              Add TVShows
            </NavLink>
          </SubMenu>

          <SubMenu
            style={{ backgroundColor: "#022135", borderRadius: "0%" }}
            icon={<MdVideoLibrary size={20} className="Nav-Icon1" />}
            title="Albums"
          >
            <NavLink to="Albums/VideoAlbum">
              <RiFolderVideoFill className="Nav-Icon" />
              Video Albums
            </NavLink>

            <NavLink to="Albums/AddAlbum">
              <MdLibraryAdd className="Nav-Icon" />
              Add
            </NavLink>
          </SubMenu>

          <SubMenu
            style={{ backgroundColor: "#022135", borderRadius: "0%" }}
            icon={<BsFillCalendarEventFill size={20} className="Nav-Icon1" />}
            title="Events"
          >
            <NavLink to="Events/AwardShows">
              <BsFillAwardFill className="Nav-Icon" />
              Award Shows
            </NavLink>
            <NavLink to="Events/MusicConcert">
              <GiMusicSpell className="Nav-Icon" />
              Music Concert
            </NavLink>
            <NavLink to="Events/AudioLaunch">
              <GiAudioCassette className="Nav-Icon" />
              AudioLaunch
            </NavLink>
            <NavLink to="Events/PreReEvnts">
              <MdOutlineRocketLaunch className="Nav-Icon" />
              Release Events
            </NavLink>
            <NavLink to="Events/Add">
              <MdLibraryAdd className="Nav-Icon" />
              Add
            </NavLink>
          </SubMenu>
        </SubMenu>
        
        Production House
        <SubMenu style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}
          icon={<GiTheater size={20} className="Nav-Icon1" />}
          title="Production House"
        >
          
          <NavLink to="ProductionHouse/ProductionHouseLists">
            <BsListColumns className="Nav-Icon" />
            ProductionHouse List
          </NavLink>
          <NavLink to="ProductionHouse/AddProductionHouse">
            <BsListColumns className="Nav-Icon" />
            Add ProductionHouse
          </NavLink>
              
              
        </SubMenu>
        
    {/* Vendor */}
    <SubMenu style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}
          icon={<GiTheater size={20} className="Nav-Icon1" />}
          title="Vendors"
        >
          
          <NavLink to="Vendors/VendorsList">
            <BsListColumns className="Nav-Icon" />
            Vendors List
          </NavLink>
          <SubMenu style={{fontFamily: "'Philosopher', sans-serif"}}
          icon={<GiTheater size={20} className="Nav-Icon1" />}
          title="Vendor Ads"
        >
          <NavLink to="Vendors/VendorsAds/BannerAds">
            <BsListColumns className="Nav-Icon" />
            Banner Ads
          </NavLink>          <NavLink to="Vendors/VendorsAds/PageAds">
            <BsListColumns className="Nav-Icon" />
            Page Ads
          </NavLink>
        </SubMenu>
        <SubMenu style={{fontFamily: "'Philosopher', sans-serif"}}
          icon={<GiTheater size={20} className="Nav-Icon1" />}
          title="Enquiry"
        >
        <NavLink to="Vendors/Enquiry">
            <BsListColumns className="Nav-Icon" />
            Enquiry List
          </NavLink>
          </SubMenu>
          <SubMenu style={{fontFamily: "'Philosopher', sans-serif"}}
          icon={<GiTheater size={20} className="Nav-Icon1" />}
          title="Manage Category"
        >
          <NavLink to="Vendors/ManageCategory/ViewCategory">
            <BsListColumns className="Nav-Icon" />
            View
          </NavLink>          <NavLink to="Vendors/ManageCategory/AddCategory">
            <BsListColumns className="Nav-Icon" />
            Add
          </NavLink>
        </SubMenu>
        <SubMenu style={{fontFamily: "'Philosopher', sans-serif"}}
          icon={<GiTheater size={20} className="Nav-Icon1" />}
          title="Manage Sub-Category"
        >
          <NavLink to="Vendors/ManageSubCategory/ViewCategory">
            <BsListColumns className="Nav-Icon" />
            View
          </NavLink>          <NavLink to="Vendors/ManageSubCategory/AddCategory">
            <BsListColumns className="Nav-Icon" />
            Add
          </NavLink>
        </SubMenu>
      
              

          <NavLink to="Theatres/TheatresList">
            <BsListColumns className="Nav-Icon" />
            Offers
          </NavLink>       
        </SubMenu>
       
        
             {/* OTT */}
             <SubMenu style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}
          icon={<GiTheater size={20} className="Nav-Icon1" />}
          title="OTT"
        >
          <NavLink to="Theatres/AddTheatres">
            <MdLibraryAdd className="Nav-Icon" />
            Add OTT
          </NavLink>
          <NavLink to="Theatres/TheatresList">
            <BsListColumns className="Nav-Icon" />
            OTT List
          </NavLink>
        </SubMenu>
        
             {/* Tv Channels */}
             <SubMenu style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}
          icon={<GiTheater size={20} className="Nav-Icon1" />}
          title="TV Channels"
        >
          <NavLink to="Theatres/AddTheatres">
            <MdLibraryAdd className="Nav-Icon" />
            Add TvChannel
          </NavLink>
          <NavLink to="Theatres/TheatresList">
            <BsListColumns className="Nav-Icon" />
            TvChannel List
          </NavLink>
        </SubMenu>
        
        {/* Theatres */}
        <SubMenu style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}
          icon={<GiTheater size={20} className="Nav-Icon1" />}
          title="Theatres"
        >
          <NavLink to="Theatres/AddTheatres">
            <MdLibraryAdd className="Nav-Icon" />
            Add Theatres
          </NavLink>
          <NavLink to="Theatres/TheatresList">
            <BsListColumns className="Nav-Icon" />
            Theatres List
          </NavLink>
        </SubMenu>
        
        {/* Celebrity */}
        <SubMenu style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}
          icon={<SiCelery size={20} className="Nav-Icon1" />}
          title="Celebrity"
        >
          <NavLink to="Celebrity/CelebrityList">
            <BsListColumns className="Nav-Icon" />
            Celebrity List
          </NavLink>
          <NavLink to="Celebrity/AddCelebrity">
            <MdLibraryAdd className="Nav-Icon" />
            Add Celebrity
          </NavLink>
        </SubMenu>
        
        {/* Users */}
        <SubMenu style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}
          icon={<IoIosPeople size={20} className="Nav-Icon1" />}
          title="Users"
        >
          <NavLink to="UserList">
            <RiProfileLine className="Nav-Icon" />
            User List
          </NavLink>
          <NavLink to="UserProfile">
            <IoIosContact className="Nav-Icon" />
            Users Profile
          </NavLink>
        </SubMenu>
        
        {/* Authentication */}
        <SubMenu style={{fontFamily: "'Philosopher', sans-serif", fontSize:"18px"}}
          icon={<AiOutlinePullRequest size={20} className="Nav-Icon1" />}
          title="Authentication"
        >
          <NavLink to="AdminSignup">
            <BsFillPersonPlusFill className="Nav-Icon" />
            Signup
          </NavLink>
          <NavLink to="AdminLogin">
            <AiFillUnlock className="Nav-Icon" />
            Login
          </NavLink>
        </SubMenu>
      </Menu>
    </div>
  );
}
export default Sidebar;