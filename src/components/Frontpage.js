import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


export default function Frontpage() {
   
  return (
   
    <div className="frontPage" >
        <h1 id="heading1">Welcome to Book Manager</h1>
        <div className="para1">
            <p>Book Manager is an application to store the data of various books with functions such as delete, modify and view the books stored. It is very useful for libraries and organisations having a big data of books and have frequent uses to update the information.<br></br> We wish you a happy reading!!
             </p>
        </div>
        <div className="buttons">
        <Link to="/show"><button type="button" class="btn btn-primary" id="view" >View Books</button></Link>
        <Link to="/create"><button type="button" class="btn btn-primary" id="create">Create New Book</button></Link>
        </div>
        

    </div>
  )
}
