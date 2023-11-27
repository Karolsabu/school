import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="schoolinfo">
        <div className='school__info-content'>
          <h1 data-aos="fade-up" data-aos-duration="300" className='text-light school__headingstyle '><bold>We are Proud</bold></h1>
          <br></br>
          <h3 data-aos="fade-up" data-aos-duration="500" className='text-light subheading__style '>to promote  <span className='text-center text-warning'>educational excellence</span></h3>
          <br></br>
          <p data-aos="fade-up" data-aos-duration="700" className='text-white m-3 para1__style'>Our mission is to strive to force intellectually competent,professionally skilled,spiritualy evolved,morally upright,
            socially responsive and culturally tolerant citizen through holistic integral education for the creation of a civilization of love.
          </p>
          <br></br>
          <p data-aos="fade-down" data-aos-duration="800" className='text-white  para1__style2'>Our vision is to promote educational excellence,leadership and service based on love and brotherhood in an
            environment characterized by respect for the individual and concern for the community ,strive to foster positive
            values based on the pursuit of truth, in to the lives of our students to effect holistic transformation.
          </p>
          <Link to={"./about"} ><button className='btn btn-success '>More about us</button></Link>
         
        </div>

      </div>
      <div className='news'>
        <Container className='recent__news-style'>
          <h2 className='text-center mt-3 ' data-aos="fade-up" data-aos-duration="300">Recent News</h2>
          <Card style={{ width: '18rem' }} data-aos="fade-down" data-aos-duration="700">
            <Card.Img variant="top" src="https://i.postimg.cc/sDSPbVwk/full-shot-kids-sitting-together-table.jpg" />
            <Card.Body>
              <Card.Title>Admission started</Card.Title>
              <Card.Text>
                Admission for the year 2023-2024
              </Card.Text>
              <Button variant="primary" className='mb-4'>More</Button>
            </Card.Body>
          </Card>
        </Container>

      </div>
      <div className='welcome'>
        <Container>
          <Row>
            <Col>
              <img data-aos="fade-up" data-aos-duration="300" src="https://i.postimg.cc/tCX4WbY3/welcome.png" className='mb-5 image__style'></img>
            </Col>
            <Col>
              <h1 data-aos="fade-up" data-aos-duration="700">Welcome to our School</h1>
              <h4 data-aos="fade-up" data-aos-duration="700">Affiliated to CBSE</h4>
              <p data-aos="fade-down" data-aos-duration="700">St.Mary’s English school pulpally, was established & is administrated by the Daughters of Mary Educational and Charitable Society , Sulthan Bathery. The School was established in 1993. The school is affiliated to the Central Board of Secondary Education (C.B.S.E) it is a Co-educational Center of National Standard. The school prepares students for the All India Secondary School Examination (A.I.S.S.E) conducted by the CBSE. It admits students of all communities irrespective of caste or creed.</p>

            </Col>
          </Row>
        </Container>
      </div>
      <div className='gallery'>
        <Container>
          <h1 className='text-center'><bold>Our Gallery</bold></h1>
          <button className='me-3 mb-4 btn btn-secondary justify-content-center'>All</button>
          <button className='me-3 mb-4 btn btn-secondary justify-center'>Sports</button>
          <button className='me-3 mb-4 btn btn-secondary justify-center'>Events</button>
          <button className='me-3 mb-4 btn btn-secondary justify-center'>Arts</button>
          <br></br>
          <img style={{ height: "200px" }} src="https://i.postimg.cc/m2jdmYVc/sports1.png"></img>
          <img className='sports2' style={{ height: "200px" }} src="https://i.postimg.cc/WzTGr4FR/sports2.png"></img>
          <img className='arts1' style={{ height: "200px" }} src="https://i.postimg.cc/Y0Pyxg1G/arts1.png"></img>
          <img className='arts2' style={{ height: "200px" }} src="https://i.postimg.cc/WbdTMwMn/arts2.png"></img>
          <img className='arts3' style={{ height: "180px" }} src="https://i.postimg.cc/NMJftsh8/arts3.png"></img>
          <img className='event1' style={{ height: "200px" }} src="https://i.postimg.cc/tRc1c3RH/Whats-App-Image-2023-11-17-at-9-28-15-PM.jpg"></img>
          <img className='event2' style={{ height: "200px" }} src="https://i.postimg.cc/D0QWTVg7/event2.png"></img>
          <img className='event3' style={{ height: "250px" }} src="https://i.postimg.cc/C1Q7q8TR/event3.png"></img>
        </Container>


      </div>
    </div>
  )
}

export default Home