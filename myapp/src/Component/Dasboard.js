import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { showlist ,deleteBook} from '../Service/Auth.service'
import { Container, Button, Table } from 'react-bootstrap';


export default function Dasboard() {
 
  const handleSubmit = async (_id) => {
    alert("task deleted")
    const updateResponse = await deleteBook(_id);

  console.log(updateResponse.data.message)
window.location.reload()
}

  const [show, setShow] = useState([]);
  

 
  


  
  useEffect(() => {
    const showList = async () => {
      const result = await showlist()
      const arr = result.data.result;
      setShow(arr);
    }
    showList();
  }, [])



 return (
    <>
      <Container>
        <div className="my-4">
          <h1>Welcome</h1>
        </div>
        <Link to="/Book">
          <Button variant="dark" >Add Book</Button>
        </Link>

        <div><br />
       

        </div>
       
        <div><br />
          <Table striped bordered hover>
            <thead>
              <tr>
             
                <th>S.No</th>

                <th>title</th>
                <th>author</th>
                <th>genre</th>
                <th>price</th>
                <th>action</th>
                <th>image upload</th>
              </tr>
            </thead>
            <tbody>
              {show.map((data, index) => {
                return (
                  <tr key={index}>
                     
                    <td>{index + 1}</td>
                    <td>{data.titel}</td>
                    <td>{data.author}</td>
                    <td>{data.genre}</td>
                    <td>{data.price}</td>
                    <td><Link to={`/Editbook/${data._id}`}>Edit</Link><br/>
                    
                      <Button variant="danger"
                       onClick={()=>handleSubmit(data._id)} 
                        className="bi bi-trash" >del </Button>
                      
                    </td>
                    <td> <Link to="/Image">
          <Button variant="success" className="btn"
          >Upload Image </Button>
          </Link></td>
                  </tr>

                )
              })}

            </tbody>
          </Table>
        </div>
       
      </Container>
    
    </>
  )
}
