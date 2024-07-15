import React from "react";
import "../Users/UserProfile.css";
import { Row, Col, Container } from "react-bootstrap";
import UserInfo from "./UserInfo";

function UserProfile() {
  return (
    <div>
      <Container>
      <div className="philosopher-font">
        <Row style={{display:"flex", justifyContent:"center"}}>
          <Col md={4}>
            <div className="center">
              <div className="profile">
                <div className="image">
                  <div className="circle-1"></div>
                  <div className="circle-2"></div>
                  <img
                    className="img_pro"
                    src="https://img.freepik.com/premium-vector/3d-young-woman-avatar-happy-smiling-face-icon_313242-1241.jpg?size=626&ext=jpg&ga=GA1.1.786155833.1675059853&semt=aishttps://img.freepik.com/premium-vector/3d-young-woman-avatar-happy-smiling-face-icon_313242-1241.jpg?size=626&ext=jpg&ga=GA1.1.786155833.1675059853&semt=ais"
                    width="70"
                    height="70"
                    alt="Jessica Potter"
                  />
                </div>

                <div className="name">Jessica Potter</div>
                <div className="job">sk000@gmail.com</div>

                <div className="actions">
                  <button className="btn">Contact</button>
                  <button className="btn">Message</button>
                </div>
              </div>

              <div className="stats">
                <div className="vendor_profile_box">
                  <span className="value">18</span>
                  <br></br>
                  <span className="parameter">Reviews</span>
                </div>
                <div className="vendor_profile_box">
                  <span className="value">4</span>
                  <br></br>
                  <span className="parameter">Ratings</span>
                </div>
                <div className="vendor_profile_box">
                  <span className="value">6</span>
                  <br></br>
                  <span className="parameter">WishLists</span>
                </div>
              </div>
            </div>
          </Col>
          </Row>
          <Row style={{display:"flex", justifyContent:"center", paddingTop:"5%"}}>
          <Col className="vendor_info" sm={3} md={12} xl={8}>
            <div style={{ paddingTop: "4%" }}>
              <UserInfo />
            </div>
          </Col>
        </Row>
      </div>

      </Container>
    </div>
  );
}

export default UserProfile;
