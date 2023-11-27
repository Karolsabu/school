import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./Signup.css"
import { adminsignupApi } from '../Services/Allapis';
import { useNavigate } from 'react-router-dom';

function Signup() {
    //validation state
    const [emailVaild, setemailValid] = useState(true)
    //validation state for password
    const [passwordvalid, setpasswordvalid] = useState(true)
    //validation state for confirm password
    const [cpasswordvalid, setcpasswordvalid] = useState(true)

    const [signup, setsignup] = useState({
        email: "",
        psw: "",
        cpsw: ""
    })
    const navigate = useNavigate()
    // const handleinput = (e) => {
    //     const { name, value } = e.target
    //     setsignup({ ...signup, [name]: value })
    // }

    console.log(signup);

    const submitdata = async (e) => {
        const { email, psw, cpsw } = signup
        if (email === "" || psw === "" || cpsw === "") {
            alert("all fields are required")
        }
        else {
            if (psw == cpsw) {
                const result = await adminsignupApi(signup)
                if (result.status >= 200 && result.status <= 300) {
                     alert("signup successfully")
                   
                    navigate("/login")
                }
                else {
                    alert("error")
                }

            }
        }
    }
    const logindata = (e) => {
        const { value, name } = e.target
        if (name == 'email') {
            //reactil validation/akkath use chayne/
            if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                setemailValid(true)
                setsignup({ ...signup, [name]: value })
            }
            else {
                setemailValid(false)
            }

        }
        if (name == 'psw') {
            if (value.match(/^[a-zA-Z0-9]+$/)) {
                setpasswordvalid(true)
                setsignup({ ...signup, [name]: value })
            }
            else {
                setpasswordvalid(false)
            }
        }
        if (name == 'cpsw') {
            if (value.match(/^[a-zA-Z0-9]+$/)) {
                setcpasswordvalid(true)
                setsignup({ ...signup, [name]: value })
            }
            else {
                setcpasswordvalid(false)
            }
        }

    }
    return (
        <div className='login__wrapper'>
            <div className='login__container'>

                <Row>
                    {/* <Col >
                            <img src="https://i.postimg.cc/QdGWJQn7/login-image.png" ></img>
                        </Col> */}
                    {/* <Col className='loginform'>
                            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            /> 
                             <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                        </Col> */}
                </Row>

                <div className='login__left__section '>
                    <img style={{
                        width: "100%",
                        height: "70vh",
                        borderRadius: "10px"
                    }} src="https://i.postimg.cc/tTJHSP1m/signup3.png" ></img>
                </div>

                <div className='login__right__section '>
                    <Form.Label htmlFor="inputPassword5"></Form.Label>
                    <Form.Control
                        onChange={(e) => {
                            logindata(e)
                        }}
                        name="email"
                        placeholder='Email'
                        style={{ width: "92%" }}
                        type="email"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    {!emailVaild && //true akkumpo && use chyta mathii athukond ann !emailvalid && koduthe
                        <div>
                            <p className='text-danger'>*Invalid email</p>
                        </div>}

                    <Form.Label htmlFor="inputPassword5"></Form.Label>
                    <Form.Control className='mt-3'
                        onChange={(e) => {
                            logindata(e)
                        }}
                        name="psw"
                        placeholder='Password'
                        style={{ width: "92%" }}
                        type="password"
                        id="inputPassword5"
                    />
                    {!passwordvalid && //true akkumpo && use chyta mathii athukond ann !emailvalid && koduthe
                        <div>
                            <p className='text-danger'>*Password required</p>
                        </div>}
                    <Form.Label htmlFor="inputPassword5"> </Form.Label>
                    <Form.Control className='mt-3'
                        onChange={(e) => {
                            logindata(e)
                        }}
                        name="cpsw"
                        placeholder='Confirm password'
                        style={{ width: "92%" }}
                        type="password"
                        id="inputPassword5"
                    />
                    {!cpasswordvalid && //true akkumpo && use chyta mathii athukond ann !emailvalid && koduthe
                        <div>
                            <p className='text-danger'>*Password required </p>
                        </div>}
                    <Button onClick={submitdata}

                        style={{
                            marginTop: "23px", width: "95%"
                        }} variant="success" className='mb-4'>Sign up</Button>
                </div>

            </div>
         
        </div>
    )
}

export default Signup