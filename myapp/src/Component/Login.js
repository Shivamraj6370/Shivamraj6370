import {userlogin }from '../Service/Auth.service';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
export default function Login() {

  let navigate = useNavigate();
  const [input, setInput] = useState({

    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((previousState) => ({
      ...previousState,
      [name]: value
    }))
  }
  console.log(input)


  const [valid, setValid] = useState({
    email: true,
    password: true,
    emailError: "",
    passwordError: ""
  });


  //emailvalidation
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = pattern.test(email);
    if (emailIsValid) {
      setValid((previousValue) => ({
        ...previousValue,
        email: true,
        emailError: ""
      }))

    } else {
      setValid((previousValue) => ({
        ...previousValue,
        email: false,
        emailError: "Enter your valid email."

      }));

    }
  }
  //passwordvalidation
  const validatePassword = (password) => {

    if (password.length === 0) {
      setValid((previousValue) => ({
        ...previousValue,
        password: false,
        passwordError: "Enter your valid password"
      }))
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        password: true,
        passwordError: ""
      }))
    }
  }
  const [responseMsg, setResponseMsg] = useState('')
  
  const booklogin = async () => {
    // console.log(input);
    
    const apiResponse = await userlogin(input.email, input.password);
    // console.log(apiResponse.data);
    setResponseMsg(apiResponse.data.message);
    if(apiResponse.data.status)
   
   
      { navigate("/Dasboard");
      }
    
   
  }


  return (
    <>


      <Container>
        <Row className="justify-content-md-center my-5">
          <Col md="auto">

            <Form className="form-control">
              <h1>Login </h1><br />
              <Form.Group className="mb-3" controlId="formGroupEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" name="email"
                  onBlur={(e) => validateEmail(e.target.value)} onChange={(e) => handleInput(e)} />
              </Form.Group>
              {!valid.email && <span className="text-danger">{valid.emailError}</span>}
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="*********" name="password"
                  onBlur={(e) => validatePassword(e.target.value)}
                  onChange={(e) => handleInput(e)} />
                {!valid.password && <span className="text-danger">{valid.passwordError}</span>}
              </Form.Group>
              
             
              <Button variant="dark" onClick={booklogin}>Login</Button>
              
             
              {<b className="text-info">{responseMsg}</b>}

            </Form>

          </Col>

        </Row>
      </Container>
    </>
  )



}
