const express = require('express');
const app =express();

const cookieParser = require("cookie-parser")
const path = require("path");

const db=require("./config/mongoose-connection")

app.use(express.json())
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const ownersRouter =require("./routes/ownersRouter");

const usersRouter =require("./routes/usersRouter");

const productsRouter =require("./routes/productsRouter");
const rootRouter = require('./routes/index'); 

//this will send the requests related to the perticular route
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);
app.use("/",rootRouter);

// app.get("/", function(req, res){
//     res.send("hey")
// })

app.listen(3000)