import React, { useState } from 'react'
import "./Contact.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import emailjs from "@emailjs/browser"
function Contact() {
    const [inputs, setinputs] = useState({
        fname: "",
        email: "",
        phonenumber: "",
        message: ""
    })
    const handleinput = (e) => {
        const { value, name } = e.target
        setinputs({ ...inputs, [name]: value })
    }
    console.log("hello", inputs);


    const handlesubmitData = (e) => {
        e.preventDefault()
        const serviceid = "service_kkf8v85"
        const templateid = "template_oha8ksr"
        const publickey = "Gfg9iedohfyaLx_uY"

        const templateParams = {
            from_name: inputs.fname,
            to_name: "st mary's school",
            from_mobile: inputs.phonenumber,
            message: inputs.message
        }

        emailjs.send(serviceid, templateid, templateParams, publickey).then((result) => {
            console.log("success", result)
            setinputs({
                ...inputs,
                fname: "",
                email: "",
                phonenumber: "",
                message: ""

            })
            alert("email send success")
        }).catch((error) => {
            alert("unable to send email")
            console.log("error", error)
        })
    }
    return (
        <div>
            <div className='school_contact'>
                <Container>
                    <Row className='container_wrapper'>
                        <Col data-aos="fade-up" data-aos-duration="500" xs={12} lg={6} md={6} sm={6}>
                            <img className='contact_girl' src="https://i.postimg.cc/t4VxxJzt/contact2-removebg-preview.png"></img>
                        </Col>
                        <Col data-aos="fade-down" data-aos-duration="500" xs={12} lg={6} md={6} sm={6}>
                            <h3 className='form_heading'>Send Message</h3>
                            <Row className='form_heading'>
                                <Col>
                                    <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                                    <Form.Control
                                        onChange={(e) => {
                                            handleinput(e)
                                        }}
                                        name='fname'
                                        type="text"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                    />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                                    <Form.Control
                                        onChange={(e) => {
                                            handleinput(e)
                                        }}
                                        name='email'
                                        type="email"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                    /></Col>
                            </Row>
                            <div className='form_heading'>
                                <Form.Label htmlFor="inputPassword5">Phone number</Form.Label>
                                <Form.Control
                                    onChange={(e) => {
                                        handleinput(e)
                                    }}
                                    name='phonenumber'
                                    type="number"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </div>
                            <div className='form_heading'>
                                <Form.Label htmlFor="inputPassword5">Message</Form.Label>
                                <Form.Control
                                    onChange={(e) => {
                                        handleinput(e)
                                    }}
                                    name='message'
                                    type="text"
                                    as="textarea"
                                    rows={5}

                                />
                            </div>
                            <Button variant="success" onClick={handlesubmitData} className='mb-4'>Send</Button>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Container>
                        <Row className='contact__wrapper' >
                            <Col className='map__style'>
                                <iframe src="https://maps.google.com/maps?q=st%20mary's%20english%20medium%20school%20pulpally&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" className='iframe__style' ></iframe>

                            </Col>
                            <Col>
                                <div className='contactus__adress_style'>
                                    <h1 className='mb-3 contact__style'>Contact Us</h1>
                                    <h4 className='contact__subheading'>St.Mary's School</h4>

                                    <h5>Pulpally, Wayanad, Kerala</h5>
                                    <p className='email__style'> Phone: 55555 229760,Email: stmaryses@yahoo.com</p>

                                </div>

                            </Col>
                        </Row>
                    </Container>


                </div>
            </div>
        </div>
    )
}

export default Contact