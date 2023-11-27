import React, { useState } from 'react'
import "./Admission.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { studentdataApi } from '../Services/Allapis';
import { useNavigate } from 'react-router-dom';

function Admission() {
    const navigate=useNavigate()
    const[fill,setFll]=useState({
                   pupil:"",
                    grdin:"",
                    gender:"",
                    occupation:"",
                    phone:"",
                    address:"",
                    prevschool:"",
                    std:"",
                    tcdate:"",
                    dob:"",
                    place:"",
                    nationality:""
    })
    const inputdata=(e)=>{
        const{name,value}=e.target
        setFll({...fill,[name]:value})
    }
    console.log(fill);
    const submitdata=async(e)=>{
        e.preventDefault()
        const {pupil,grdin,gender, occupation,phone,address,prevschool,std,tcdate,dob,place,nationality}=fill
    const result=await studentdataApi(fill)
    if (result.status >= 200 && result.status <= 300) {
                 alert("data added successfully")
                
                navigate("/")
            }
            else {
                alert("unable to upload")
            }

    console.log(result);
    }
    console.log(fill);
    return (
        <div>
            <div className='admission_school mb-4 '>
                <h1 className='admission_schoolimage  text-center  mt-4 mb-4 text-white '>Admission</h1>
            </div>
           
            <div>
                <Container className='container__wrapper'>
                    <form>
                        <Row>
                            <Col>
                                <Form.Label className='label__style' htmlFor="inputPassword5">Name of pupil</Form.Label>
                                <Form.Control
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                name="pupil"
                                    type="text"
                                    id="sname"
                                    aria-describedby="passwordHelpBlock"
                                />
                                <Form.Label  className='label__style' htmlFor="inputPassword5">Name of Parent/Guardian and his relationship to the pupil</Form.Label>
                                <Form.Control
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="grdin"
                                    type="text"
                                    id="pname"
                                    aria-describedby="passwordHelpBlock"
                                />
                                  <Form.Label  className='label__style' htmlFor="inputPassword5">Residential Address</Form.Label>
                                <Form.Control
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="address"
                                    type="text"
                                    id="add"
                                    aria-describedby="passwordHelpBlock"
                                />
                                  <Form.Label  className='label__style' htmlFor="inputPassword5">Name of Previous School</Form.Label>
                                <Form.Control
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="prevschool"
                                    type="text"
                                    id="pschool"
                                    aria-describedby="passwordHelpBlock"
                                />
                                   <Form.Label  className='label__style' htmlFor="inputPassword5">TC Date</Form.Label>
                                <Form.Control
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="tcdate"
                                    type="date"
                                    id="tdate"
                                    aria-describedby="passwordHelpBlock"
                                />
                                   <Form.Label  className='label__style mt-2' htmlFor="inputPassword5">Place</Form.Label>
                                <Form.Control
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="place"
                                    type="text"
                                    id="splace"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col>
                            <Col>
                            <Form.Label  className='label__style' htmlFor="inputPassword5">Gender:</Form.Label>
                            <div>
                                <input 
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                type="radio"
                                name="gender"
                                value={"Male"}
                                id="gender"/>
                                <label htmlFor="gender">Male </label>
                                <input
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                 type="radio"
                                name="gender"
                                value={"Female"}
                                id="genderf"/>
                                <label htmlFor="genderf">Female</label>
                            </div>
                               
                                 <Form.Label  className='label__style mt-2' htmlFor="inputPassword5">Phone</Form.Label>
                                <Form.Control onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="phone"
                                    type="number"
                                    id="num"
                                    aria-describedby="passwordHelpBlock"
                                />
                                 <Form.Label htmlFor="inputPassword5">Occupation of Guardian</Form.Label>
                                <Form.Control 
                                 onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="occupation"
                                    type="text"
                                    id="job"
                                    aria-describedby="passwordHelpBlock"
                                />
                                  <Form.Label  className='label__style' htmlFor="inputPassword5">Standard when leaving</Form.Label>
                                <Form.Control 
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="std"
                                    type="text"
                                    id="pstd"
                                    aria-describedby="passwordHelpBlock"
                                />
                                   <Form.Label  className='label__style' htmlFor="inputPassword5">Date of Birth</Form.Label>
                                <Form.Control 
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="dob"
                                    type="date"
                                    id="birth"
                                    aria-describedby="passwordHelpBlock"
                                />
                                   <Form.Label  className='label__style mt-2' htmlFor="inputPassword5">Nationality</Form.Label>
                                <Form.Control 
                                onChange={(e)=>{
                                    inputdata(e)
                                }}
                                   name="nationality"
                                    type="text"
                                    id="nation"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <button onClick={submitdata} type='button' className='btn btn-success mb-4 mt-4'>Submit</button>
                        </Row>
                    </form>
                </Container>
            </div>

        </div>
    )
}

export default Admission