import React from 'react'
import {Container,Button,Card} from "react-bootstrap";

function AddCategory() {
  return (
    <div>
      <div style={{paddingTop:"3%"}}>
      <h4 className="mt-3 mb-3">Add Category</h4>
      <hr />
      </div>
      <Container>
      <div style={{display:"flex", justifyContent:"center"}}>
      <Card style={{padding:"5%", width:"fit-content",display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div>
        <form style={{textAlign:"start"}}>
            <label style={{fontSize:"20px"}}><b>Category :</b> <input type='text'></input></label>
            <div style={{paddingTop:"5%",display:"flex", justifyContent:"center"}}>
            <Button style={{backgroundColor:"red",borderColor:"red"}}>Submit</Button>&nbsp;
            <Button style={{backgroundColor:"#022135", borderColor:"#022135"}}>Cancel</Button>
            </div>
        </form>
      </div>
        </Card>
      </div>
   
      </Container>
    </div>
  )
}

export default AddCategory
