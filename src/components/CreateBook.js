import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';


export default function CreateBook(props) {

        const [book,setBook]= useState({
            title: '',
            author: '',
            description: '',
            publisher: '',
            published_date: ''

        });
        const onChange = (event) => {
            setBook({...book,[event.target.name]: event.target.value });
          };
          const onSubmit = (event) => {
            event.preventDefault();
        
            axios
              .post('http://localhost:8000/create-book', book)
              .then((res) => {
                console.log(book);
                setBook({
                  title: '',
                  author: '',
                  description: '',
                  published_date: '',
                  publisher: '',
                });
        
              })
              .catch((err) => {
                console.log(err);
              })

             

        }

    
  return (
    <div className="createPage">
      <h1 id="heading2">Create New Book</h1>
      <div className="form-create animate__animated animate__slideInDown">
        <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Book'
                  name='title'
                  className='form-control'
                  value={book.title}
                  onChange={onChange}
                  />
                  
               <br />

<div className='form-group'>
  <input
    type='text'
    placeholder='Author'
    name='author'
    className='form-control'
    value={book.author}
    onChange={onChange}
  />
</div>
<br/>
<div className='form-group'>
  <input
    type='text'
    placeholder='Describe this book'
    name='description'
    className='form-control'
    value={book.description}
    onChange={onChange}
  />
</div>
<br/>

<div className='form-group'>
  <input
    type='date'
    placeholder='published_date'
    name='published_date'
    className='form-control'
    value={book.published_date}
    onChange={onChange}
  />
  <br/>

</div>
<div className='form-group'>
  <input
    type='text'
    placeholder='Publisher of this Book'
    name='publisher'
    className='form-control'
    value={book.publisher}
    onChange={onChange}
  />
</div>
<br/>


            <input onSubmit={onSubmit}
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
                
              />
              </div>
              </form>


              </div>
              <div className='buttons'>
              <Link to="/">
              <button type="button" class="btn btn-warning">Back To Home</button>
              </Link>
              <Link to="/show">
              <button type="button" class="btn btn-warning">Show Books</button>
              </Link>
              </div>
              

    </div>
  )
}
