const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = 8080;
const app = express();

var db = require("./models");


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/Book", { useNewUrlParser: true });

app.get("/Saved", function(req, res){
    db.Book.find({}, function(error, found){
        if(error){
            console.log(error)
        }
        else{
            console.log(found)
        }
    })
    // .then(function(dbBook){
    //     console.log(dbBook)
    // }).catch(err=>{
    //     res.json(err)
    // });
});

app.listen(PORT ,()=>{
console.log("Listening on port: "+PORT)
})