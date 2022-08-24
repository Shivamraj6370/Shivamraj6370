
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getBookDetail, updateBook } from "../Service/Auth.service";


function EditBook() {
    let { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    // const [data,setData] = useState([]);


    const [input, setInput] = useState({
        titel: "",
        author:"",
        price: "",
        genre: '',
    });
   

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInput((previousValue) => ({
            ...previousValue,
            [name]: value
        }));

    };


    useEffect(() => {
       
        const test = async (id) => {
            const response = await getBookDetail(id);
            setInput(() => ({
                titel: response.data.result.titel,
                author: response.data.result.author,
                price: response.data.result.price,
                genre: response.data.result.genre,
            }))
            console.log(response)
        }
        test(id);
    },[]);
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Run update code here");
        const updateResponse = await updateBook(input,id);
        if (updateResponse.data.status) {
            navigate("/Dasboard");
        } else {
            alert("update failed");
        }
        console.log(updateResponse);

    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">

                <div className="col-md-6">
                    <form className="form-control" onSubmit={(e) => handleSubmit(e)}>
                        <h3>Add Book</h3>
                        <br />
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Title</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={input.titel}
                                        name="titel"
                                        onChange={handleChange}
                                    />

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Author</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="author"
                                        value={input.author}
                                        onChange={handleChange}
                                    />

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Genre</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="genre"
                                        value="fiction"
                                        checked="{input.genre == 'fiction' && true}"
                                    />
                                    <label>Fiction</label>&nbsp;
                                    <input type="radio"
                                        className="form-check-input"
                                        name="genre"
                                        checked="{input.genre == 'enggandtechnology' && true}"
                                        value="enggandtechnology"
                                    />
                                    <label>Engg & Technology</label>&nbsp;
                                    <input type="radio"
                                        className="form-check-input"
                                        name="genre"
                                        checked="{input.genre == 'finance' && true}"
                                        value="finance" />
                                    <label>Finance</label>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Price $ </label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="price"
                                        value={input.price}
                                        onChange={handleChange}
                                    />

                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div>
                                    <div>
                                        <button type="submit"
                                            class="btn btn-primary">
                                            Save
                                        </button>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default EditBook;
