import React from 'react'
import {Container,Button,Card,Form} from "react-bootstrap";

function AddSubCategory() {
  return (
    <div>
      <div style={{paddingTop:"3%"}}>
      <h4 className="mt-3 mb-3">Add Sub_Category</h4>
      <hr />
      </div>
      <Container>
      <div style={{display:"flex", justifyContent:"center"}}>
      <Card style={{padding:"5%", width:"fit-content",display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div>
      <Form.Group controlId="categorySelect">
        <Form.Label style={{fontSize:"20px"}}><b>Category :</b></Form.Label>
        <Form.Select aria-label="Select Category">
          <option>Select Category</option>
          <option value="1">Marketing</option>
          <option value="2">Production</option>
          <option value="3">Post Production</option>
        </Form.Select>
      </Form.Group>
  <div style={{paddingTop:"5%"}}>
  <form style={{textAlign:"start"}}>
            <label style={{fontSize:"20px"}}><b>Sub_Category :</b> <input type='text'></input></label>
         
        </form>
  </div>
    <div style={{paddingTop:"5%",display:"flex", justifyContent:"center"}}>
            <Button style={{backgroundColor:"red",borderColor:"red"}}>Submit</Button>&nbsp;
            <Button style={{backgroundColor:"#022135", borderColor:"#022135"}}>Cancel</Button>
            </div>
      </div>
        </Card>
      </div>
   
      </Container>
    </div>
  )
}

export default AddSubCategory
