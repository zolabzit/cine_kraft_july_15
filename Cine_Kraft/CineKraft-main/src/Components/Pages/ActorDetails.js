import React from "react";
import { Row, Col, Card, Descriptions, Table, Tag } from "antd";
import "../User/Details.css";
import Header from "../User/Header";
import Footer from "../User/Footer";
import "./ActorDetails.css";
// import { FiFacebook } from "react-icons/fi";
// import { GrMail } from "react-icons/gr";
// import { RxTwitterLogo } from "react-icons/rx";
// import { FaInstagram } from "react-icons/fa";

const { Meta } = Card;

const upcomingMoviesData = [
  // {
  //   title: "Leo",
  //   description:
  //     "Leo is an upcoming Indian Tamil-language action thriller film directed by Lokesh Kanagaraj and produced by S. S. Lalit Kumar and Jagadish Palanisamy.",
  //   image:
  //     "https://sund-images.sunnxt.com/175175/1920x1080_LEOOfficialTrailer_175175_775a0568-4f0f-446b-a908-f57f1dd19326.jpg",
  // },
  // {
  //   title: "Thalapathy 68",
  //   description:
  //     "Thalapathy 68 is the working title of an upcoming Indian Tamil-language film written and directed by Venkat Prabhu and produced by AGS Entertainment.",
  //   image:
  //     "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-103684473/103684473.jpg",
  // },
  {
    title: "Coolie",
    description:
      "Coolie is an action thriller film in which Superstar Rajinikanth teams up with the most wanted director, Lokesh Kanagaraj .The film will be produced by Kalanidhi Maran under the banner of Sun Pictures.",
    image:
      "https://1847884116.rsc.cdn77.org/tamil/home/coolie_titleteaser_220424_3.jpg",
  },
  {
    title: "Vettaiyan",
    description:
      "Vettaiyan is an upcoming Indian Tamil-language action drama film written and directed by T. J. Gnanavel. It is produced by Subaskaran Allirajah under Lyca Productions.",
    image:
      "https://i.ytimg.com/vi/AdHLDvPH8BU/maxresdefault.jpg",
  },
  // Add more movie data items here
];

const ActorDetails = () => {
  // Sample actor details
  const actorDetails = {
    name: "Shivaji Rao Gaikwad",
    birthDate: "December 12, 1950",
    birthPlace: "Bangalore, India",
    height: "1.7 m",
    spouse: "Latha Rajinikanth",
    children: ["Aishwarya Rajinikanth", "Soundarya Rajinikanth"],
    nickName: "Thalaivar",
    father: "Ramoji Rao Gaekwad",
    mother: "Jijabai",
    bio: "Shivaji Rao Gaikwad, known professionally as Rajinikanth, is an Indian actor who works mainly in Tamil cinema. In a career spanning over five decades, he has done 170 films that includes films in Tamil, Hindi, Telugu, Kannada, Bengali, and Malayalam.",
    filmography: [
      {
        number: "169",
        movie: "Jailer",
        year: 2023,
        role: ["Tiger Muthuvel Pandian"],
        director: "Nelson Dilipkumar",
        awards: [
          "International Iconic Awards for Best Supporting Actress. Ramya Krishnan.",
          "International Iconic Awards for Best Supporting Actor. Vasanth Ravi.",
          "International Iconic Awards for Best Director. Nelson Dilipkumar.",
          "International Iconic Awards for Best Film.",
        ],
        boxOffice: "₹607–650 crore crores worldwide",
        cast: ["Mirna Menon", "Shiva Rajkumar", "Vinayakan", "Vasanth Ravi"],
        crew: ["Anirudh Ravichander", "Vijay Kartik Kannan"],
        language: ["Tamil"],
        notes: ["Single Role"],
      },
      {
        number: "168",
        movie: "Annaatthe",
        year: 2021,
        role: ["Kaalaiyan"],
        director: "Shiva",
        awards: [
          "Vijay Award for Favourite Director 2012 · A.R Murugados",
          "Vijay Award for Favourite Actor 2012 · Vijay",
        ], // An empty array if there are no awards
        boxOffice: "₹121 crores worldwide",
        cast: ["kajal Agarwal", "Vidyut Jamwal", "Jayaram", "Sathyan"],
        crew: [" Harris Jayaraj", "Kalaippuli S Thanu", "Santosh Sivan"],
        language: ["Tamil"],
        notes: ["Box office grossed over Rs 200 crore"],
      },
      {
        number: "167",
        movie: "Darbar",
        year: 2020,
        role: ["Aaditya Arunachalam IPS"],
        director: "A.R. Murugadoss",
        awards: [
          "Filmfare Award 2022-Best Choreographer-Dinesh",
          "2022 SIIMA - Tamil Best Director-Lokesh Kanagaraj",
        ],
        boxOffice: "₹220 crores worldwide",
        cast: [
          "Vijay Sethupathi",
          "Arjun Das",
          "Malavika Mohan",
          "Gauri G. Kishan",
        ],
        crew: [
          "Anirudh Ravichander",
          "Xavier Britto",
          "Jagadish Palanisamy",
          "Philomin Raj",
          "Sathyan Sooryan",
        ],
        language: ["Tamil"],
        notes: [""],
      },
      // Add more filmography items as needed
    ],
  };

  // Columns configuration for the filmography table
  const columns = [
    {
      title: "Movie No.",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Movie Title",
      dataIndex: "movie",
      key: "movie",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <span>
          {Array.isArray(role) ? (
            role.map((roles, index) => (
              <Tag key={index} color="red">
                {roles}
              </Tag>
            ))
          ) : (
            <Tag color="default">N/A</Tag>
          )}
        </span>
      ),
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    // {
    //   title: "Director",
    //   dataIndex: "director",
    //   key: "director",
    // },
    // {
    //   title: "Awards",
    //   dataIndex: "awards",
    //   key: "awards",
    //   render: (awards) => (
    //     <span>
    //       {awards.map((award, index) => (
    //         <Tag key={index} color="geekblue">
    //           {award.trim()} {/* Remove leading/trailing spaces */}
    //         </Tag>
    //       ))}
    //     </span>
    //   ),
    // },
    // {
    //   title: "Box Office",
    //   dataIndex: "boxOffice",
    //   key: "boxOffice",
    // },
    // {
    //   title: "Cast",
    //   dataIndex: "cast",
    //   key: "cast",
    //   render: (cast) => (
    //     <span>
    //       {Array.isArray(cast) ? (
    //         cast.map((actor, index) => (
    //           <Tag key={index} color="blue">
    //             {actor}
    //           </Tag>
    //         ))
    //       ) : (
    //         <Tag color="default">N/A</Tag>
    //       )}
    //     </span>
    //   ),
    // },
    // {
    //   title: "Crew",
    //   dataIndex: "crew",
    //   key: "crew",
    //   render: (crew) => (
    //     <span>
    //       {Array.isArray(crew) ? (
    //         crew.map((member, index) => (
    //           <Tag key={index} color="yellow">
    //             {member}
    //           </Tag>
    //         ))
    //       ) : (
    //         <Tag color="default">N/A</Tag>
    //       )}
    //     </span>
    //   ),
    // },
  ];

  return (
    <div>
      <Header />
      <div style={{ padding: "8%" }}>
        <div className="background_clr_transparent">
          <Row>
            <Col style={{ padding: "2%" }}>
              <img
                style={{
                  width: "40vw",
                  height: "40vh",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                alt="Vijay"
                src="https://wallpapers.com/images/hd/rajinikanth-interview-gray-hair-csbc8490idg4vo1q.jpg"
                className="actor-image"
                // Apply the styles using the defined object
              />
            </Col>
            <Col style={{ padding: "5%" }}>
              <h1 style={{ fontFamily: "Philosopher, sans-serif" }}>
                Rajinikanth
              </h1>
              <h3 style={{ fontFamily: "Philosopher, sans-serif" }}>
                Thalaivar
              </h3>
            </Col>
          </Row>
        </div>
        {/* Basic bio */}
        <div>
          <Row gutter={16}>
            <Col span={24} style={{ paddingTop: "2%" }}>
              <Descriptions
                style={{ fontFamily: "Philosopher, sans-serif" }}
                title=""
              >
                <Descriptions.Item label={<span>Full Name </span>}>
                  <b>{actorDetails.name}</b>
                </Descriptions.Item>
                <Descriptions.Item label="Date of Birth">
                  <b>{actorDetails.birthDate}</b>
                </Descriptions.Item>
                <Descriptions.Item label="Place of Birth">
                  <b>{actorDetails.birthPlace}</b>
                </Descriptions.Item>
                <Descriptions.Item label="Height">
                  <b>{actorDetails.height}</b>
                </Descriptions.Item>
                <Descriptions.Item label="Spouse">
                  <b>{actorDetails.spouse}</b>
                </Descriptions.Item>
                <Descriptions.Item label="Children">
                  <b>{actorDetails.children.join(", ")}</b>
                </Descriptions.Item>
                <Descriptions.Item label="Nick Name">
                  <b>{actorDetails.nickName}</b>
                </Descriptions.Item>
                <Descriptions.Item label="Father">
                  <b>{actorDetails.father}</b>
                </Descriptions.Item>
                <Descriptions.Item label="Mother">
                  <b>{actorDetails.mother}</b>
                </Descriptions.Item>
              </Descriptions>
              <Row style={{ paddingTop: "2%" }}>
                <Col>
                  <Descriptions
                    style={{ fontFamily: "Philosopher, sans-serif" }}
                  >
                    <Descriptions.Item label="">
                      <p> {actorDetails.bio}</p>
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        {/* Filmography */}
        <div style={{ paddingTop: "3%" }}>
          <Row>
            <Col>
              <h4 className="mt-3 mb-3">Filmography</h4>
              <hr></hr>
              <Table
                style={{ paddingTop: "3%" }}
                columns={columns}
                dataSource={actorDetails.filmography}
                pagination={false}
              />
            </Col>
          </Row>
        </div>

        {/* upcoming_movies */}
        <div style={{ paddingTop: "3%" }}>
          <h4 className="mt-3 mb-3">Upcoming Movies</h4>
          <hr />

          <Row gutter={16} style={{ paddingTop: "3%" }}>
            {upcomingMoviesData.map((movie, index) => (
              <Col span={6} key={index}>
                <Card
                  hoverable
                  style={{ width: "100%" }}
                  cover={<img alt={movie.title} src={movie.image} />}
                >
                  <Meta title={movie.title} description={movie.description} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActorDetails;
