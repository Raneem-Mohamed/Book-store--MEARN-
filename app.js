const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const { route } = require("./routes/book-routes");
// const router=require('./routes/book-routes')

const app = express();


//middlewares

app.use(express.json())

app.use('/books',router)


mongoose
  .connect(
    //   "mongodb+srv://raneem:raneembook@cluster0.7nuz1.mongodb.net/test-book?retryWrites=true&w=majority"
    "mongodb+srv://admin:admin@cluster0.2fktb.mongodb.net/Bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conected To Database"))
  .catch((err)=>console.log(err));

  app.listen('5000',()=>{console.log('listen 5000')})

  module.exports = app;

//   then(() => {app.listen(5000)})