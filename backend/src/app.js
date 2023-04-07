const express= require("express");
require('./db/connection')
const books= require('./model/books')
const cors = require('cors');
const app= express();
const port = 8000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get("/", (req,res)=>{
    res.send("Hello from server");
})
app.post('/create-book', (req, res) => {
    books.create(req.body)
      .then(books => res.json({ msg: 'Book added successfully' }))
    
      .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
  });

  app.get('/show-books', (req,res)=>{
    books.find()
    .then(books=>res.json(books))
    .catch(err=>{
        res.json({error: 'no books found'})
    })
  }
  )

  app.get('/show-books/:id', (req,res)=>{
    books.findById(req.params.id)
    .then((books)=>res.json(books))
    .catch((err)=>res.status(404).json(err))
  });

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
})
