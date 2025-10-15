const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const contactsRoute = require("./routes/contactsRoute");
const educationsRoute = require("./routes/educationsRoute");
const projectsRoute = require("./routes/projectsRoute");
const usersRoute = require("./routes/usersRoute");
dotenv.config();
app.use(express.json());

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{console.log("db connected")})
.catch((error)=>{console.error(`error while connecting to db ${error}`)});

app.use("/contacts", contactsRoute);
app.use("/qualifications", educationsRoute);
app.use("/projects", projectsRoute);
app.use("/users", usersRoute);
app.use("/", (req,res)=>{
    res.send("Welcome to my portfolio application");
});


app.listen(process.env.PORT || 3000, ()=>{console.log(`listening at port ${process.env.PORT}`)});