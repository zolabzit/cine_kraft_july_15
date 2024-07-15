import {React,useState} from "react";
import {Row,Col,Container,Card,Button} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

import { motion} from "framer-motion";


const blogsData = [
    {
      title: 'Behind the Scenes: Making of Our Latest Movie',
      image: 'https://images.indianexpress.com/2022/06/Jailer-concept-poster-1200by667.jpg',
      date: 'August 15, 2023',
    },
    {
      title: 'Top 10 Movie Soundtracks That Will Amaze You',
      image: 'https://movies-b26f.kxcdn.com/wp-content/uploads/2023/08/z29842756Q-Barbie-2023-.jpg',
      date: 'August 10, 2023',
    },
    {
        title: 'Varisu OST',
        image: 'https://i.ytimg.com/vi/vnu73olbhzU/maxresdefault.jpg',
        date: 'August 20, 2023',
      },
      {
        title: 'DD Returns - Comedy Thriller',
        image: 'https://assets-in.bmscdn.com/discovery-catalog/events/et00364543-ufpgvtqbsd-landscape.jpg',
        date: 'July 28, 2023',
      },
  ];


function Blog() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can handle form submission here, e.g., send data to a server
      console.log("Form submitted:", { name, email, message });
    };

  return (
    <motion.div initial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerHeight, transition: {duration: 0.1}}}>
      {/* Header */}
      <Header/>
      <div className="about" style={{ paddingTop: "10%" }}>
        <Container>
          <h1 >Blog</h1>
         
        </Container>
      </div>
      <div>
      <Container className="blogs-container">
        <Row>
            <Col md={8}>
            <h2 className="blogs-heading">Latest Blogs</h2>
      <Row>
        {blogsData.map((blog, index) => (
          <Col md={6} key={index} className="blog-col">
            <Card className="blog-card">
              <Card.Img style={{width:"100%", height:"30%"}} variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text className="blog-date">{blog.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
            </Col>
            <Col md={4}>
            <h4 className="blogs-heading">Most movie blogs</h4>
            <Row>
        {blogsData.map((blog, index) => (
          <Col md={6} key={index} className="blog-col">
            <Card className="blog-card">
              <Card.Img style={{width:"100%", height:"30%"}} variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text className="blog-date">{blog.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
            </Col>
        </Row>
        <div>
                <Row style={{ paddingTop: "5%" }}>
            <Col md={6} style={{ paddingTop: "3%" }}>
              <b>
                <p style={{ paddingBottom: "5%" }}>
                  It is a long established fact that a reader will distracted by
                  the readable content of a page hen looking at its layout.The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                </p>
                <li> More Than Just a Movie</li>
                <li>Lights Out, Movie On</li>
                <li style={{ paddingBottom: "5%" }}>
                  {" "}
                  Enter a World of Imagination
                </li>
                <p>
                  It is a long established fact that a reader will distracted by
                  the readable content of a page hen looking at its layout.
                </p>
              </b>
            </Col>
            <Col md={6}>
              <div className="single-image">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.786155833.1675059853&semt=sph"
                  alt="img"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div>
        <Row style={{ paddingTop: "8%" }}>
           <h2 style={{textAlign:"center", color:"#4e4e85"}}>Publish your blog</h2>
           <p style={{textAlign:"center", paddingBottom:"5%"}}><b>"Behind every great film is a team of dream weavers,<br/>crafting moments that stay with us forever."</b></p>
            <Col md={5}>
              <div className="single-image">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://img.freepik.com/free-photo/documents-paperwork-business-strategy-concept_53876-120383.jpg?size=626&ext=jpg&ga=GA1.1.786155833.1675059853&semt=sph"
                  alt="img"
                />
              </div>
            </Col>
            <Col md={7}>
            <div className="enquiry-form-container">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <div className="form-field">
                  <input
                    className="wh_form"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-field">
                  <input
                    className="wh_form"
                    type="email"
                    id="email"
                    placeholder="Movie"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Col>
     
             
            </Row>

            <div className="form-field">
              <textarea
                className="msg_wh"
                id="message"
                placeholder="Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            </div>
          </form>
        </div>
            </Col>
          </Row>
        </div>
     
    </Container>
      </div>
     {/* Footer */}
     <Footer/>
    </motion.div>
  )
}

export default Blog
