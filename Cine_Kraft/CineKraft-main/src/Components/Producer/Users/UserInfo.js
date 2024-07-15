import React from "react";
import { Card } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Tabs } from "antd";
import { Row, Col } from "react-bootstrap";
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const PersonalInfo = () => {
  return (
    <Card
      style={{
        width: "auto",
        height: "auto",
        boxShadow: "0px 10px 0px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Card.Body>
        <Row>
          <Col md={6}>
            <Card.Text>
              <b>First Name :</b> Jessica
            </Card.Text>
            <Card.Text>
              <b>Last Name :</b> Potter
            </Card.Text>
            <Card.Text>
              <b>Address :</b> 256 Kudlu Gate, Banglore 560068
            </Card.Text>
       
          </Col>
          <Col md={6}>
            <Card.Text>
              <b>Email Address :</b> jessica123@gmail.com
            </Card.Text>
            <Card.Text>
              <b>Mobile Number :</b> 865457XXXX
            </Card.Text>
            <Card.Text>
              <b>Birthday :</b> 09 Oct, 2000
            </Card.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Card.Text style={{ textAlign: "center" }}>
              <h6>Social Profile</h6>
              <AiFillFacebook size={30} />
              <AiFillTwitterSquare size={30} />
              <AiFillInstagram size={30} />
              <AiFillLinkedin size={30} />
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const ProfilePage = () => {
  const items = [
    {
      key: "1",
      label: `Personal Information`,
      content: <PersonalInfo />,
    },
    // Add more sections if needed
  ];

  return (
    <Tabs defaultActiveKey="1" onChange={onChange} className="philosopher-font">
      {items.map((item) => (
        <TabPane tab={item.label} key={item.key} className="philosopher-font">
          {item.content}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default ProfilePage;
