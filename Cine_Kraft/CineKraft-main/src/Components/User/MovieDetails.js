import React from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { AiOutlinePlayCircle } from "react-icons/ai";
import "./Details.css";

const data = [
  {
    category: "Directed By",
    names: [
      {
        name: "Atlee",
        link: "https://en.wikipedia.org/wiki/Atlee_(director)",
      },
    ],
  },
  {
    category: "Screenplay By",
    names: [
      {
        name: "	V. Vijayendra Prasad",
        link: "https://en.wikipedia.org/wiki/V._Vijayendra_Prasad",
      },
      {
        name: "S. Ramana Girivasan",
        link: "",
      },
      {
        name: "Atlee",
        link: "https://en.wikipedia.org/wiki/Atlee_(director)",
      },
    ],
  },
  {
    category: "Starring",
    names: [
      {
        name: "Vijay",
        link: "http://localhost:3000/actorDetails",
      },
      {
        name: "S. J. Suryah",
        link: "https://www.google.com/search?q=Finn+Wolfhard",
      },
      {
        name: "Sathyaraj",
        link: "https://www.google.com/search?q=Noah+Schnapp",
      },
      {
        name: "Vadivelu",
        link: "https://www.google.com/search?q=Sadie+Sink",
      },
      {
        name: "Nithya Menen",
        link: "https://www.google.com/search?q=Caleb+McLaughlin",
      },
      {
        name: "Kajal Aggarwal",
        link: "https://www.google.com/search?q=Gaten+Matarazzo",
      },
      {
        name: "Samantha Ruth Prabhu",
        link: "https://www.google.com/search?q=Gaten+Matarazzo",
      },
    ],
  },
  {
    category: "Produced By",
    names: [
      {
        name: "	N. Ramasamy ",
        link: "https://www.google.com/search?q=n+ramasamy&sca_esv=576380766&sxsrf=AM9HkKkYlrl7KRlzao7wNbX0FQ2_LKhPnQ%3A1698210907904&ei=W6Q4ZYbgNt6XseMPs_Or6AU&gs_ssp=eJzj4tVP1zc0TCovMC02MjY0YPTiylMoSsxNLE7MrQQAauwINA&oq=n+ramasamy&gs_lp=Egxnd3Mtd2l6LXNlcnAiCm4gcmFtYXNhbXkqAggJMgUQLhiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgIQJjICECYyAhAmMggQABiKBRiGAzIUEC4YgAQYlwUY3AQY3gQY4ATYAQFI-jRQAFjOJ3ABeAGQAQCYAccCoAGrEaoBBzAuNy4zLjG4AQHIAQD4AQHCAgcQIxiKBRgnwgIEECMYJ8ICBxAuGIoFGEPCAgsQABiABBixAxiDAcICCBAuGIAEGLEDwgIFEAAYgATCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIoFGLEDGIMBwgIIEC4YigUYkQLCAggQABiABBixA8ICCBAAGIoFGLEDwgIXEC4YigUYkQIYlwUY3AQY3gQY4ATYAQHCAgsQLhiABBjHARjRA8ICCxAuGIAEGMcBGK8BwgIWEC4YigUYQxiXBRjcBBjeBBjgBNgBAeIDBBgAIEGIBgG6BgYIARABGBQ&sclient=gws-wiz-serp#ip=1",
      },
      {
        name: "	Hema Rukmani",
        link: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDMurDDPyzI3YPTiyUjNTVQoKs3OTczLBACBFglA&q=hema+rukmani&oq=Hema+ruk&gs_lcrp=EgZjaHJvbWUqBwgBEC4YgAQyBggAEEUYOTIHCAEQLhiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIKCAUQABiGAxiKBTIKCAYQABiGAxiKBdIBCDQ2NThqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
      },
      {
        name: " N. Murali ",
        link: "",
      },
    ],
  },
  {
    category: "Cinematography",
    names: [
      {
        name: "	G. K. Vishnu",
        link: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zDIoM6hKKqkyYPTiTM9WKMsszsgrBQBptAhc&q=gk+vishnu&oq=gk+vishn&gs_lcrp=EgZjaHJvbWUqBwgBEC4YgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIKCAcQABiGAxiKBTIKCAgQABiGAxiKBTIKCAkQABiGAxiKBdIBCDI2MzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
      },
    ],
  },
  {
    category: "Edited By",
    names: [
      {
        name: "Ruben",
        link: "https://en.wikipedia.org/wiki/Ruben_(editor)",
      },
    ],
  },
  {
    category: "Music By",
    names: [
      {
        name: "A.R. Rahman",
        link: "https://en.wikipedia.org/wiki/A._R._Rahman",
      },
    ],
  },
  {
    category: "Production Company",
    names: [
      {
        name: "Thenandal Studio Limited",
        link: "https://en.wikipedia.org/wiki/Thenandal_Studio_Limited",
      },
    ],
  },
  {
    category: "Distributed By",
    names: [
      {
        name: "Sri Thenandal Films",
        link: "https://en.wikipedia.org/wiki/Thenandal_Studio_Limited",
      },
    ],
  },
  {
    category: "Release Date",
    names: [
      {
        name: "18 October 2017",
      },
    ],
  },
  {
    category: "Running Time",
    names: [
      {
        name: "163 minutes",
      },
    ],
  },
  {
    category: "Country",
    names: [
      {
        name: "India",
      },
    ],
  },
  {
    category: "Language",
    names: [
      {
        name: "Tamil",
      },
    ],
  },
  {
    category: "Budget",
    names: [
      {
        name: "₹120 crore",
      },
    ],
  },
  {
    category: "Box Office",
    names: [
      {
        name: "₹200 - 260 crore",
      },
    ],
  },
];

const cardData = [
  {
    // title: 'Card 1',
    image:
      "https://i.ytimg.com/vi/gQDo5QuZTaw/maxresdefault.jpg", // Replace with your image URL
    link: "https://www.youtube.com/watch?v=gQDo5QuZTaw",
    text: "Mersal - Official Tamil Teaser | Vijay | A R Rahman | Atlee",
    },
  {
    // title: 'Card 2',
    image: "https://i.ytimg.com/vi/xsbLtHql4g8/maxresdefault.jpg", // Replace with your image URL
    link: "https://www.youtube.com/watch?v=xsbLtHql4g8",
    text: "Mersal - Aalaporan Thamizhan Tamil Video | Vijay | A.R. Rahman",
 },
//   {
//     // title: 'Card 3',
//     image: "https://flxt.tmsimg.com/assets/p16409743_b_h9_aa.jpg", // Replace with your image URL
//     link: "https://www.youtube.com/watch?v=6Am4v0C_z8c",
//     text: "Season 3",
//   },
//   {
//     // title: 'Card 4',
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", // Replace with your image URL
//     link: "https://www.youtube.com/watch?v=sBEvEcpnG7k",
//     text: "Season 4",
//  },

];

const CastCrew = [
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/thalapathy-vijay-films-024241479-16x9_0.jpg?VersionId=wDaRPugPn5mchanA1B11UH5fiU_Vc.q0&size=690:388",
    name: "Vijay (Thalapathy)",
    link: "https://www.google.com/search?q=millie+bobby+brown&oq=mill&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMhIIARAuGBQYgwEYhwIYsQMYgAQyBggCEEUYOTINCAMQABiDARixAxiABDIKCAQQABixAxiABDIKCAUQLhixAxiABDIKCAYQABixAxiABDIGCAcQRRg80gEHODkxajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1657729937.jpg",
    name: " Finn Wolfhard ",
    link: "https://www.google.com/search?q=finn+wolfhard&oq=fin&gs_lcrp=EgZjaHJvbWUqCwgAEEUYJxg7GIoFMgsIABBFGCcYOxiKBTIGCAEQRRg5Mg0IAhAAGIMBGLEDGIAEMg0IAxAAGIMBGLEDGIAEMgYIBBBFGD0yBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxMTcxajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/noah-schnapp-stranger-things-1656426018.jpg?crop=0.418xw:0.278xh;0.300xw,0.0353xh&resize=1200:*",
    name: "Noah Schnapp",
    link: "https://www.google.com/search?q=noah+schnapp&oq=noah&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMg8IARAuGBQYhwIYsQMYgAQyCggCEC4YsQMYgAQyDQgDEC4YgwEYsQMYigUyCggEEAAYsQMYgAQyCggFEC4YsQMYgAQyCggGEC4YsQMYgAQyDQgHEC4YgwEYsQMYgAQyCggIEC4YsQMYgAQyBwgJEAAYjwLSAQgxMTMxajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    img: "https://www.byrdie.com/thmb/wyHdfH2RZAx6jP2-Sum3IH0zRoc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SadieSink_Recircf-f23319c59af241a0bcbdfd1a6fac74db.png",
    name: "Sadie Sink",
    link: "https://www.google.com/search?q=sadie+sink&oq=sadie&gs_lcrp=EgZjaHJvbWUqCwgAEEUYJxg7GIoFMgsIABBFGCcYOxiKBTIGCAEQRRg5MgYIAhAjGCcyBwgDEAAYgAQyEwgEEC4YgwEYxwEYsQMY0QMYgAQyDQgFEC4YxwEY0QMYgAQyDQgGEC4YxwEY0QMYgAQyBwgHEC4YgAQyDQgIEC4YgwEYsQMYgAQyDQgJEAAYgwEYsQMYgATSAQgxMjI2ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    img: "https://flxt.tmsimg.com/assets/789765_v9_bc.jpg",
    name: "Caleb McLaughlin",
    link: "https://www.google.com/search?q=caleb+mclaughlin&oq=caleb&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxiKBTIJCAAQIxgnGIoFMg8IARAuGBQYhwIYsQMYgAQyDQgCEC4YgwEYsQMYgAQyDQgDEC4YgwEYsQMYigUyDQgEEC4YgwEYsQMYgAQyDQgFEC4YgwEYsQMYgAQyDQgGEC4YgwEYsQMYgAQyBwgHEAAYgAQyDQgIEC4YgwEYsQMYgAQyBwgJEAAYjwLSAQgxNTQxajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    img: "https://images.hola.com/imagenes/actualidad/20220912216546/gaten-matarazzo-stranger-things-cumple-20/1-133-729/gatenmatarazzocumple1-t.jpg?tx=w_680",
    name: "Gaten Matarazzo",
    link: "https://www.google.com/search?q=gaten+matarazzo&oq=gate&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg8IARBFGDkYgwEYsQMYgAQyDQgCEAAYgwEYsQMYgAQyDQgDEAAYgwEYsQMYgAQyDQgEEAAYgwEYsQMYigUyBggFEEUYPTIGCAYQRRg9MgYIBxBFGD3SAQgxMTY3ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    img: "https://media.vanityfair.com/photos/5d386abd9485f7000885b978/4:3/w_1776,h_1332,c_limit/joe-keery-music-band-djo-new-single-roddy.jpg",
    name: "Joe Keery",
    link: "https://www.google.com/search?q=Joe+Keery&sca_esv=569142147&bih=739&biw=1536&cs=0&hl=en&sxsrf=AM9HkKlTFECXBhOTyTHKOo4LWBUMdpGSuQ%3A1695906418802&ei=cnoVZdC0MPyfseMPw8uR2AI&ved=0ahUKEwjQtajdr82BAxX8T2wGHcNlBCsQ4dUDCBA&uact=5&oq=Joe+Keery&gs_lp=Egxnd3Mtd2l6LXNlcnAiCUpvZSBLZWVyeTIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIOEAAY5AIY1gQYsAPYAQEyDhAAGOQCGNYEGLAD2AEBMg4QABjkAhjWBBiwA9gBATIQEC4YigUYyAMYsAMYQ9gBAjIQEC4YigUYyAMYsAMYQ9gBAjIQEC4YigUYyAMYsAMYQ9gBAjIQEC4YigUYyAMYsAMYQ9gBAkiIA1AAWABwAXgBkAEAmAEAoAEAqgEAuAEDyAEA4gMEGAAgQYgGAZAGD7oGBggBEAEYCboGBggCEAEYCA&sclient=gws-wiz-serp",
  },
  {
    img: "https://cdn.britannica.com/53/244253-050-579D9771/Actor-David-Harbour-2022.jpg",
    name: "David Harbour",
    link: "https://www.google.com/search?q=David+Harbour&sca_esv=569142147&bih=739&biw=1536&cs=0&hl=en&sxsrf=AM9HkKn9Yb7y2s7FuF2uYmYCGe2HqHF8PA%3A1695906242441&ei=wnkVZefDGqnuseMPo_OX4A8&ved=0ahUKEwjnrJyJr82BAxUpd2wGHaP5BfwQ4dUDCBA&uact=5&oq=David+Harbour&gs_lp=Egxnd3Mtd2l6LXNlcnAiDURhdmlkIEhhcmJvdXIyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGIoFGLADGEMyChAAGIoFGLADGEMyDhAAGOQCGNYEGLAD2AEBMg4QABjkAhjWBBiwA9gBATIOEAAY5AIY1gQYsAPYAQEyEBAuGIoFGMgDGLADGEPYAQIyEBAuGIoFGMgDGLADGEPYAQIyEBAuGIoFGMgDGLADGEPYAQIyEBAuGIoFGMgDGLADGEPYAQJI3gdQAFgAcAF4AZABAJgBAKABAKoBALgBA8gBAOIDBBgAIEGIBgGQBhG6BgYIARABGAm6BgYIAhABGAg&sclient=gws-wiz-serp",
  },
  {
    img: "https://www.onthisday.com/images/people/natalia-dyer.jpg?w=360",
    name: "Natalia Dyer",
    link: "https://www.google.com/search?q=Natalia+Dyer&source=lmns&bih=739&biw=1536&cs=0&hl=en&sa=X&ved=2ahUKEwj7l7PSsM2BAxUmb2wGHdIVD4QQ0pQJKAB6BAgBEAI",
  },
];

function Details() {
  return (
    <div>
      <Container>
        {/* Top info */}
        <div style={{ paddingTop: "5%" }}>
          <Row>
            <Col md={5}>
              <img
                className="vt_hov"
                style={{ width: "90%", height: "60%" }}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkB1QYZljfp_Hgx3nggir1DnUpgqET-k8JLY1n7600RfB2LVY7"
                alt=""
              />
            </Col>
            <Col md={7} style={{ paddingTop: "3%" }}>
              <Row>
                <Col>
                  <h1>Mersal</h1>
                </Col>
              </Row>
              <Row>
                <Col md={7}>
                  <h6>18/10/2017 • R • 2hr 43min</h6>
                </Col>
                <Col md={5}>
                  <h6>⭐ 7.3 / 10 | ☆☆☆☆☆ Rate this</h6>
                </Col>
              </Row>
              <Row style={{ paddingTop: "3%" }}>
                <Col>
                  <Button variant="secondary" style={{ borderRadius: "50px" }}>
                    Action
                  </Button>
                  &nbsp;
                  <Button variant="secondary" style={{ borderRadius: "50px" }}>
                    Romance
                  </Button>
                  &nbsp;
                  <Button variant="secondary" style={{ borderRadius: "50px" }}>
                    Drama
                  </Button>
                  &nbsp;
                </Col>
              </Row>
              <Row style={{ paddingTop: "5%" }}>
                <Col>
                  <h5>“Magician & Doctor lookalike turns into mysteries”</h5>
                </Col>
              </Row>
              <Row style={{ paddingTop: "3%" }}>
                <Col>
                  <h6 style={{ fontSize: "medium" }}>
                    Maaran, a sincere doctor who fights against corruption and
                    Vettri a magician who is out for a revenge. Both of them are
                    estranged brothers and once they come together, they get to
                    know about their common enemy, Daniel, who had killed their
                    father and mother.
                  </h6>
                </Col>
              </Row>

              <div>
                {data.map((categoryData, index) => (
                  <Row key={index} style={{ paddingTop: "2%" }}>
                    <Col md={4}>
                      <h5>
                        <b>{categoryData.category}</b>
                      </h5>
                    </Col>
                    <Col md={8}>
                      <h5>
                        {categoryData.names.map((nameData, nameIndex) => (
                          <span key={nameIndex}>
                            <a
                              style={{ textDecoration: "none" }}
                              href={nameData.link}
                              alt="none"
                            >
                              {nameData.name}
                            </a>
                            {nameIndex < categoryData.names.length - 1 && " • "}
                          </span>
                        ))}
                      </h5>
                    </Col>
                  </Row>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        {/* videos & Trailers */}
        <div className="container" style={{ paddingTop: "3%" }}>
          <div>
            <h4 style={{ paddingBottom: "1%" }}>
              <b>| Videos & Trailers</b>
            </h4>
            <Row>
              {cardData.map((card, index) => (
                <Col md={3} key={index} style={{ paddingBottom: "3%" }}>
                  <div className="card-container mb-3">
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                      style={{ textDecoration: "none" }}
                    >
                      <Card
                        className="h-100"
                        style={{ width: "100%", border: "none" }}
                      >
                        <div className="card-image">
                          <Card.Img
                            className="vt_hov"
                            style={{
                              width: "300px",
                              height: "200px",
                              borderRadius: "2%",
                            }}
                            variant="top"
                            src={card.image}
                          />

                          <div className="play-pause-icon">
                            <AiOutlinePlayCircle size={40} />
                          </div>
                          <h style={{ paddingTop: "4%" }}>
                            <b>{card.text}</b>
                          </h>
                        </div>
                      </Card>
                    </a>
                  </div>
                  <p>{card.description}</p>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Cast & Crew */}
        <div style={{ paddingTop: "5%" }}>
          <h4 style={{ paddingBottom: "1%" }}>
            <b>| Cast & Crew</b>
          </h4>
          <Row>
            {CastCrew.map((cast, index) => (
              <Col md={2} style={{ paddingBottom: "2%" }}>
                <a
                  href={cast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <img
                    style={{
                      width: "65%",
                      height: "65%",
                      borderRadius: "50%",
                      paddingBottom: "3%",
                    }}
                    src={cast.img}
                    alt="none"
                  />
                </a>
                <h5 style={{ textAlign: "left" }}>{cast.name}</h5>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Details;
