
import { bookdata } from '../Service/Auth.service';
import React, { useState } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function Book() {
    const [responseMsg, setResponseMsg] = useState('');
   

    const [input, seInput] = useState({
        titel: "",
        author: "",
        genre:"",
        price: ""



    })
   
    const handleInput = (e) => {
        const { name, value } = e.target;

        seInput((previousState) => ({
            ...previousState,
            [name]: value
        }))
    }
    const handlsubmit = async () => {
     
        const apiResponse = await bookdata(input.titel, input.author, input.genre, input.price);
        console.log(apiResponse.data);
        setResponseMsg(apiResponse.data.message);
        console.log(apiResponse.data.message)
      }
    console.log(input)
    return (
        <>

            <Container>
                <Row className="justify-content-md-center my-5">
                    <Col md="auto">

                        <Form className="form-control">
                            <h1>Add Book </h1><br />
                            <Form.Group className="mb-3"  >
                                <Form.Label>titel</Form.Label>
                                <Form.Control type="text" placeholder="Enter your titel"
                                    name="titel" onChange={(e) => handleInput(e)} />

                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Aurhor</Form.Label>
                                <Form.Control type="text" placeholder="Author name" name="author" onChange={(e) => handleInput(e)} />

                            </Form.Group>
                            <label>Genre</label>
                            <Form.Group className="  mb-3" >
                                <input class="form-check-input" type="radio" name="genre"
                                    value="Fiction" onClick={(e) => handleInput(e)} />
                                <label class="form-check-label" >
                                    Fiction
                                </label>
                                <input class="form-check-input" type="radio" name="genre" value="Engg & Technology" onClick={(e) => handleInput(e)} />
                                <label class="form-check-label" >
                                    Engg & Technology
                                </label>
                                <input class="form-check-input" type="radio" name="genre" value="Finance"
                                    onClick={(e) => handleInput(e)} />
                                <label class="form-check-label" >
                                    Finance
                                </label>


                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Price $</Form.Label>
                                <Form.Control type="text" placeholder="price" name="price"
                                    onChange={(e) => handleInput(e)}
                                />

                            </Form.Group>
                            <Link to="/Dasboard">
                            <Button variant="dark" onClick={handlsubmit} >save</Button>
                            </Link>

                            {<b className="text-info">{responseMsg}</b>}

                        </Form>

                    </Col>

                </Row>
            </Container>
        </>
    )
}
