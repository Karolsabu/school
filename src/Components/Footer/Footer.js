import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import"./Footer.css"
function Footer() {
  return (
    <div  className="footerbg">
    <Container>
      <Row className='footer__wrapper'>
        <Col className="p-4 ">
          <div
            className="mt-2 "
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-20px",
            }}>
            <img
              style={{height:"70px"}} src="https://i.postimg.cc/25fn7HTN/school-logo-removebg-preview.png"></img>
          
            <h3 >ST .MARY'S 
        <br />
        <span className="schoolheading">ENGLISH MEDIUM SCHOOL</span></h3>
          </div>

          <p>
          The moto of our school is lighted for life.We the Mariens prepares the students keep shining and do their duties diligently and become important to the world and find their purpose of life.
          </p>
        </Col>

        <Col className=" getIn__touch">
          <h3 >Get In Touch</h3>
          <p>The objective of the curriculum is to fully develop student’s individual potentialities rather than to continue him/her to books alone.</p>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="enter your email"
          />
          <Button className="btn btn-success w-25 mt-2">Send</Button>
          
        </Col>
        <Col className=" getIn__touch">
          <h2 className=" my-3">Connect With Us</h2>

          <div>
            <i
              class="fa-brands fa-instagram fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
            <i
              class="fa-brands fa-facebook fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
            <i
              class="fa-brands fa-linkdin fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
            <i
              class="fa-brands fa-github fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
            <i
              class="fa-brands fa-twitter fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
              <i
              class="fa-solid fa-envelopes-bulk fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
          </div>
          <div className="mt-3">
            
              <br></br>
                Email: stmaryses@yahoo.com
        
          <br></br>
          Phone: 55555 229760
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Footer