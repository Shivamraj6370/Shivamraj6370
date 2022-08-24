
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Uploadfile } from '../Service/Uploadfile'
export default function Image() {
  
  
  //store data
    const [input, setInput] = useState({
        image: null,
        name:""

 })
    console.log(input)
    //updata
    const onFileChange = (e) => {
        setInput((previous) => ({
            ...previous,
            image: e.target.files[0],
        }))

    }

    

    //api data send
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log("submit")
        const formData = new FormData();
        formData.append('image', input.image);
        try {
            const apiResponse = await Uploadfile(formData);
            console.log(apiResponse.data);

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <form action="" method="post"
                            encType="multipart/form-data" onSubmit={(e) => handleFormSubmit(e)}  >
                            <h2>File Upload</h2>
                            <input type="file"
                                className="image"
                                onChange={(e) => onFileChange(e)} />

                            <br />
                            <input type="text" className="name" name="name"
                                onChange={(e) => onFileChange(e)} />
                            <br />
                            <Button type="submit" > Submit </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}









