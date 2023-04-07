import React from 'react'
import { Link } from 'react-router-dom';

export default function Bookcard(props) {

    const book=props.book;
    return (
    <div>
       <div className="card" style={{width: "18rem"}}>
  <img src={book.description} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{book.title}</h5>
    <p className="card-text">{book.description}</p>
    <Link to={`/show/${book._id}`}><div className="btn btn-primary">Go somewhere</div></Link>
    
  </div>
</div>
<br/>
    </div>
  )
}
