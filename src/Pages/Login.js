import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { adminloginApi } from '../Services/Allapis';
import { adminlogined } from '../Components/Logincontext';
function Login() {
    //login context
    const { setLoginData } = useContext(adminlogined)
    const navigate = useNavigate()
    //validation state
    const [emailVaild, setemailValid] = useState(true)
    //validation state for password
    const [passwordvalid, setpasswordvalid] = useState(true)
    const [login, setlogin] = useState({
        email: "",
        psw: ""

    })

    console.log(login);
    const logindata = (e) => {
        const { value, name } = e.target
        if (name == 'email') {
            //reactil validation/akkath use chayne/
            if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                setemailValid(true)
                setlogin({ ...login, [name]: value })
            }
            else {
                setemailValid(false)
            }

        }
        if (name == 'psw') {
            if (value.match(/^[a-zA-Z0-9]+$/)) {
                setpasswordvalid(true)
                setlogin({ ...login, [name]: value })
            }
            else {
                setpasswordvalid(false)
            }
        }
    }
    const submitdata = async (e) => {
        const { email, psw } = login
        if (email === "" || psw === "") {
            alert("all fields are required")
        }
        else {

            const result = await adminloginApi(login)
            console.log(result);
            if (result.status >= 200 && result.status <= 300) {
           alert("login successfully")
                localStorage.setItem("islogedin", result.data.isAdmin)
                setLoginData(true)
                navigate("/")
            }
            else {
                alert("incorrect password or email")
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
                    }} src="https://i.postimg.cc/HLxmr56q/login-image2.png" ></img>
                </div>

                <div className='login__right__section'>
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
                        placeholder='password'
                        style={{ width: "92%" }}
                        type="password"
                        id="inputPassword5"
                    />
                    {!passwordvalid && //true akkumpo && use chyta mathii athukond ann !emailvalid && koduthe
                        <div>
                            <p className='text-danger'>*password required</p>
                        </div>}

                    <Button onClick={submitdata} style={{

                        marginTop: "23px", width: "95%"
                    }} variant="success" className='mb-4'>Login</Button>
                    <h6 className='text-center mt-2'>do you have an account?</h6>
                    <Link to="/signup" style={{
                        width: "100%", textDecoration: "none", marginLeft: "16px"
                    }}><Button style={{
                        marginTop: "23px", width: "95%"
                    }} variant="success" className='mb-4'>Sign up</Button></Link>

                </div>

            </div>
           
        </div>

    )
}

export default Login