const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 8080;
const app = express();

const routes = require("./routes");


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Book", { useNewUrlParser: true });

app.use(routes);

app.listen(PORT ,()=>{
console.log("Listening on port: "+PORT)
})