import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Bookdetails(props) {
        const [book, setBook]= useState({});
        const {id}= useParams();

        useEffect(()=>{
            axios
            .get(`http://localhost:8000/show-books/${id}`)
            .then((res)=>{
                setBook(res.data);
                console.log(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        },[id])

  return (
    <div>
<h1>{book.title}</h1>

    </div>
  )
}
