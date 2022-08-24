import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
export default function Deletebook() {
    let { id } = useParams();
    console.log(id)
    
  return (
    <div>
      hello
      
    </div>
  )
}
