import React from 'react'
import {Row,Col,Card} from "react-bootstrap";

const Actors = () => {
    const Actors = [
        {
            id:"1",
            img: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/07/20/f6d7ee5390e08c170fa47d75143521da1658306047_original.jpg",
            name: "S. J. Suryah"
        },
        {
            id:"1",
            img: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/07/20/f6d7ee5390e08c170fa47d75143521da1658306047_original.jpg",
            name: "S. J. Suryah"
        },

    ]
  return (
    <div>
      <Row>
        {Actors.map((data,index) => (
 <Col md={3}>
 <Card>
     <Card.Img src={data.img}></Card.Img>
     <Card.Text>{data.name}</Card.Text>
 </Card>
 </Col>
        ))}
       
      </Row>
    </div>
  )
}

export default Actors
