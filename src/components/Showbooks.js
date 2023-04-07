import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Bookcard from './Bookcard';
import { Link } from 'react-router-dom';
import 'animate.css';

export default function Showbooks() {

  const[books,setBooks]= useState([]);

  useEffect(()=>{
    axios
      .get('http://localhost:8000/show-books')
      .then((res)=>{
        setBooks(res.data);
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  },[]);

  const bookList= books.map((book,k)=><Bookcard book={book} key={k}/>);
  return (
    <div className="showBooks">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <Link to="/"><button className="btn btn-primary me-md-2 btn-warning" type="button">Go To Home</button></Link>
  <Link to="/create"><button className="btn btn-warning" type="button">Create New Book</button></Link>
</div>
        <h1 id="heading2">List Of Books</h1>
        <div className='list animate__animated animate__slideInLeft'>{bookList}</div>
        <br/>
    </div>
    
    
  )
}
