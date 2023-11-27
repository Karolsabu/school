import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import { adminlogined } from '../Logincontext';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
  const { loginData, setLoginData } = useContext(adminlogined)
  const navigate = useNavigate()

  //getting data from localstorage for toggling the button
  const isLogedInData = localStorage.getItem("islogedin")
  console.log(isLogedInData);
  const logoutAdmin = () => {
    setLoginData(false)
    navigate('/')
    localStorage.clear()

  }
  const navigateUser = () => {
    navigate("/login")
  }
  return (
    <div>
      <Navbar expand="lg" className="navbarbg ">
        <Container>
          <img style={{ height: "70px" }} src="https://i.postimg.cc/25fn7HTN/school-logo-removebg-preview.png"></img>
          <Navbar.Brand href="#home">ST .MARY'S
            <br />
            <span className="schoolheading">ENGLISH MEDIUM SCHOOL</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link >
                <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
                  Home
                </Link>
              </Nav.Link>


              <Nav.Link >
                <Link to={'/about'} style={{ textDecoration: "none", color: "black" }}>
                  About
                </Link>
              </Nav.Link>



              <Nav.Link >
                <Link to={'/contact'} style={{ textDecoration: "none", color: "black" }}>
                  Contact
                </Link>
              </Nav.Link>
              {/* <Nav.Link href="/view">View</Nav.Link> */}
              {/* {!loginData?<Nav.Link href="/login">Login</Nav.Link>:<Nav.Link href="/">Logout</Nav.Link>} */}
              {
                isLogedInData ? <div className='login_wrapper' >
                  <Nav.Link >
                    <Link to={'/view'} style={{ textDecoration: "none", color: "black" }}>
                      View
                    </Link>
                  </Nav.Link>
                  <button className='button__style__wrapper' style={{ border: "none", backgroundColor: "transparent" }} onClick={logoutAdmin}>Logout</button>
                </div> :
                  <div className='login_wrapper'>
                    <Nav.Link >
                      <Link to={'/admission'} style={{ textDecoration: "none", color: "black" }}>
                        Admission
                      </Link>
                    </Nav.Link>
                    <button className='button__style__wrapper' style={{ border: "none", backgroundColor: "transparent" }} onClick={navigateUser}>Login</button>
                  </div>

              }



            </Nav>
          </Navbar.Collapse>


        </Container>

      </Navbar>
    </div>
  )
}

export default Header